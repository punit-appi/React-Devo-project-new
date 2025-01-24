import { Link } from 'react-router-dom';
import '../Styles/Adminlogin.css';
import { useState } from 'react';
import admin from '../assets/admin.avif';
import Particle from './Particle';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Adminlogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let payload={email,password}
  let navigate=useNavigate()
   let adminlogin=(e)=>{
              e.preventDefault();
            try{
              axios.post("http://localhost:5000/adminlogin", payload)
              .then((res)=>{
                //  if(res.data==="success"){
                  // localStorage.setItem('username')
                //    navigate('/Adminhomepage')
                //    toast.success("login successfully")
                //  }
                if(res.data==="invaild password"){
                  toast.error("invaild password")
                 }
                 else if(res.data==='error'){
                   toast.error("enter vaild email and password")
                 }
                 else{
                     let currentadmin=res.data.username;
                     localStorage.setItem('adminname',currentadmin)
                   
                          navigate('/Adminhomepage')
                   toast.success("login successfully")
                 }
              })
            }
            catch{
              toast.error("cant fetch data")
            }
   }



  return (
    <div className="adminlogin">
   <Particle/>
    <form action="" onSubmit={adminlogin}>
         <div className="adminimg">
          <img src={admin} alt="Admin" />
        </div>
        <h1>Welcome to Admin Area</h1>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Enter Your Email ID" value={email} onChange={(e)=>setEmail(e.target.value)}required />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Enter Your Password" required  value={password} onChange={(e)=>setPassword(e.target.value)} />
        <div className="links">
          <Link to="/Forgetpassword"><span>Forget Password?</span></Link>
          <Link to="/Adminsignup"><span>Sign Up</span></Link>
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Adminlogin;
