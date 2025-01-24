const { query } = require('express');
const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    username: { type: String },
    email: { type: String},
    password: { type: String },
});

const userSchema = mongoose.Schema({
    username: { type: String },
    email: { type: String },
    password: { type: String},
});
const pgSchema = new mongoose.Schema({
  pgname: { type: String, required: true },
  ownername: { type: String, required: true },
  location: { type: String, required: true },
  address: { type: String, required: true },
  availablerooms: { type: Number, required: true },
  roomrent: { type: Number, required: true },
  phonenumber: { type: String, required: true },
  pgtype: { type: String, required: true }, 
  room_images: [{ type: String }],
});

const feedbackSchema=new mongoose.Schema({
  name:String,
  email:String,
  query:String
})



const Admin = mongoose.model('Admin', adminSchema);
const User = mongoose.model('User', userSchema);
const PG = mongoose.model("PG", pgSchema);
const feedback = mongoose.model("feedback", feedbackSchema);


module.exports = { Admin, User,PG,feedback};
