import axios from 'axios'
import '../Styles/Usersignup.css'
import Particle from './Particle'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
const Usersignup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const navigate = useNavigate();
    
  const payload = { username, email, password };
  const signupData = async (e) => {
    e.preventDefault();
    if (password === retypePassword) {
      try {
        const response = await axios.post('http://localhost:5000/usersignup', payload);
        
        if (response.data === 'Invalid input data') {
          toast.error("Invalid input");
        } else if (response.data === 'this mail id already exists') {
          toast.error('This mail ID already exists');
        } else {
          toast.success('Signup Successfully');
          navigate('/Userlogin');
        }
      } catch (err) {
        console.error("Error in signupData:", err);
        toast.error('An unexpected error occurred');
      }
    } else {
      toast.error('Passwords do not match');
    }
  };
  
  return (
    <div className="usersignup">
     <Particle/>
       
       <form onSubmit={signupData}>
        <h1>ENTER THE SIGNUP DETAILS</h1>
        <label htmlFor="username">USERNAME</label>
        <input type="text" placeholder="Enter The Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="email">EMAIL</label>
        <input type="text" placeholder="Enter The Email ID" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <label htmlFor="password">PASSWORD</label>
        <input type="password" placeholder="Enter The Password"value={password} onChange={(e) => setPassword(e.target.value)}/>
        <label htmlFor="retypePassword">RE-TYPE PASSWORD</label>
        <input type="password" placeholder="Re-Type The Password" value={retypePassword} onChange={(e) => setRetypePassword(e.target.value)}/>
        <button type="submit">SUBMIT</button>
      </form>
      <ToastContainer position="top-end" autoClose={10000} hideProgressBar={false} closeOnClick pauseOnHover draggable style={{fontSize: '10px',width: '400px',}}/>
    </div>
  )
}

export default Usersignup
