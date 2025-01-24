const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const nodemailer =require('nodemailer')
const { Admin, User, PG ,feedback} = require("./schemas/details");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

mongoose.connect("mongodb://localhost:27017/ONLINE_PG_RESERVATION_SYSTEM")
// mongoose.connect('mongodb+srv://viratsabari:sabari2020@reservationsystem.xjsaz.mongodb.net/ONLINE_PG_RESERVATION_SYSTEM')
// mongoose.connect('mongodb+srv://punitg169:nNA2NbW9WzYZqrOz@cluster0.mdayj.mongodb.net/ONLINE_PG_RESERVATION_SYSTEM')


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, "uploads");
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.post("/adminlogin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Admin.findOne({ email });
    if (!user) {
      return res.status(404).send("Admin not found");
    }
    if (password !== user.password) {
      return res.status(400).send("Invalid password");
    }
    res.json(user);
  } catch (err) {
    console.error("Error in admin login:", err);
    res.status(500).send("Internal server error");
  }
});

app.post("/adminsignup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).send("Invalid input data");
    }
    const existing = await Admin.findOne({ email });
    if (existing) {
      return res.status(400).send("This email ID already exists");
    }
    await Admin.create({ username, email, password });
    res.status(201).send("Admin created successfully");
  } catch (err) {
    console.error("Error in admin signup:", err);
    res.status(500).send("Internal server error");
  }
});

app.post("/userlogin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send("User not found");
    }
    if (password !== user.password) {
      return res.status(400).send("Invalid password");
    }
    res.json(user);
  } catch (err) {
    console.error("Error in user login:", err);
    res.status(500).send("Internal server error");
  }
});

app.post("/usersignup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).send("Invalid input data");
    }
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).send("This email ID already exists");
    }
    await User.create({ username, email, password });
    res.status(201).send("User created successfully");
  } catch (err) {
    console.error("Error in user signup:", err);
    res.status(500).send("Internal server error");
  }
});

app.post("/addpg", upload.array("room_images", 10), async (req, res) => {
  try {
    const { pgname, ownername, location, address, availablerooms, roomrent, phonenumber, pgtype } = req.body;

    if (!pgname || !ownername || !location || !address || !availablerooms || !roomrent || !phonenumber || !pgtype) {
        return res.status(400).send("All fields are required");
    }


    const roomImages = req.files.map((file) => `/uploads/${file.filename}`);

    const pgData = new PG({
      pgname, ownername, location, address, availablerooms, roomrent, phonenumber, pgtype, room_images: roomImages
    });

    await pgData.save();
    res.status(201).send({ message: "PG details added successfully", pgData });
  } catch (err) {
    console.error("Error adding PG details:", err);
    res.status(500).send("Internal server error");
  }
});


app.get("/pglist", async (req, res) => {
  try {
    const list = await PG.find();
    res.json(list);
  } catch (err) {
    res.status(404).send("Data not found");
  }
});
app.get('/userdata/:username', async (req, res) => {
  const { username } = req.params;
 
  const user = await User.findOne({ username }); 
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});
app.get("/pglist/search", async (req, res) => {
  const { query } = req.query; 
  if (!query) {
    return res.status(400).json({ message: "Search query is required" });
  }
  try {
   const filteredPgList = await PG.find({
      $or: [
        { pgname: { $regex: query, $options: "i" } },
        { ownername: { $regex: query, $options: "i" } },
        { location: { $regex: query, $options: "i" } },
        { address: { $regex: query, $options: "i" } },
        
      ],
    });

    res.status(200).json(filteredPgList);
  } catch (err) {
    res.status(500).json({ message: "Unable to search PG list", error: err });
  }
});
app.get('/details/:id',async(req,res)=>{
  const {id}=req.params
  try{
    let updata=await PG.findOne({_id:id})
    res.send(updata)
  }
  catch(err){
    console.log("can't fetch data");
    
  }
})

app.put('/updatepg/:id', upload.array('room_images', 10), async (req, res) => {
  const { id } = req.params;
  const {pgname,ownername,location,address,availablerooms,roomrent,phonenumber,pgtype,} = req.body;

  try {
    const updatedPg = await PG.findByIdAndUpdate(id,{pgname,ownername,location,address,availablerooms,roomrent,phonenumber,pgtype,
        room_images: req.files.map((file) => `/uploads/${file.filename}`),},
      { new: true }  
    );

    if (!updatedPg) {
      return res.status(404).send({ message: 'PG not found' });
    }

    res.status(200).send({ message: 'PG updated successfully', updatedPg });
  } catch (err) {
    console.error('Error updating PG:', err);
    res.status(500).send({ message: 'Failed to update PG' });
  }
});


app.delete('/delete/:pid', async (req, res) => {
  const { pid } = req.params;  
  // console.log(pid);
  try {
       await PG.deleteOne({ _id:pid });
      res.status(200).send("success");
  } catch (err) {
    res.status(500).send("Error deleting PG");
  }
});
app.post('/feedbackdetails',async(req,res)=>{ 
  try{
     let feedbackdata=req.body;
     console.log(feedbackdata);
     
     const success=await feedback.create(feedbackdata)
     if(success){
      res.send("success")
     }
     else{
      res.send('error')
     }
  }
  catch(err){
    res.send(err)
  }
})
app.get("/userdashboard", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send("Error fetching users");
  }
});

app.get("/pgdashboard", async (req, res) => {
  try {
    const pgs = await PG.find();
    res.json(pgs);
  } catch (err) {
    res.status(500).send("Error fetching PG data");
  }
});

app.get("/feedbackdashboard", async (req, res) => {
  try {
    const feedbacks = await feedback.find();
    res.json(feedbacks);
  } catch (err) {
    res.status(500).send("Error fetching feedbacks");
  }
});

app.post('/forgetpassword/:email',async(req,res)=>{
     let {email}=req.params
    let admin=await Admin.findOne({email})
    if(!admin){
      res.status(404).send("email not found try sign up")
    }
    else{
      let pass1=admin.password;
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'sabarivirat488@gmail.com',
          pass: 'zlev pqmv uzle ppql'
        }
      });
      
      var mailOptions = {
        from: 'sabarivirat488@gmail.com',
        to: admin.email,
        subject: 'YOUR PASSWORD IS',
        text: "We ve received your request to recover your password"+" "+pass1
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          res.send("success");
        }
      });
    }
     
})
app.post('/userforgetpassword/:email',async(req,res)=>{
  let {email}=req.params
 let user=await User.findOne({email})
 if(!user){
   res.status(404).send("email not found try sign up")
 }
 else{
   let pass1=user.password;
   var transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
       user: 'sabarivirat488@gmail.com',
       pass: 'zlev pqmv uzle ppql'
     }
   });
   
   var mailOptions = {
     from: 'sabarivirat488@gmail.com',
     to: user.email,
     subject: 'YOUR PASSWORD IS',
     text: "We ve received your request to recover your password"+" "+pass1
   };
   
   transporter.sendMail(mailOptions, function(error, info){
     if (error) {
       console.log(error);
     } else {
       res.send("success");
     }
   });
 }
  
})


app.listen(5000, (err) => {
  if (err) throw err;
  console.log("Server running on port 5000");
});
