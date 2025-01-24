import { Link } from 'react-router-dom';
import { useState } from 'react';
import user from '../assets/user.avif';
import '../Styles/Userlogin.css';
import Particle from './Particle';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


const Userlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let payload={email,password}
  let navigate=useNavigate()
   let userlogin=(e)=>{
              e.preventDefault();
            try{
              axios.post("http://localhost:5000/userlogin", payload)
              .then((res)=>{
                 if(res.data==="invaild password"){
                  toast.error("invaild password")
                 }
                 else if(res.data==='error'){
                   toast.error("enter vaild email and password")
                 }
                 else{
                  let currentuser=res.data.username
                     localStorage.setItem('username',currentuser)
                    navigate('/Userhomepage')
                    toast.success("login successfully")
                  
                 }
              })
            }
            catch{
              toast.error("cant fetch data")
            }
   }

  return (
    
    <div className="userlogin">
   <Particle/>
    
   <form action="" onSubmit={userlogin}>
         <div className="adminimg">
          <img src={user} alt="Admin" />
        </div>
        <h1>Welcome to User Area</h1>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Enter Your Email ID" value={email} onChange={(e)=>setEmail(e.target.value)}required />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Enter Your Password" required  value={password} onChange={(e)=>setPassword(e.target.value)} />
        <div className="links">
          <Link to="/Forgetpassword"><span>Forget Password?</span></Link>
          <Link to="/Usersignup"><span>Sign Up</span></Link>
        </div>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Userlogin
