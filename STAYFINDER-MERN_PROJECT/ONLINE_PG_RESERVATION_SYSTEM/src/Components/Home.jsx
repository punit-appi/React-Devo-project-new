import { Link } from 'react-router-dom';
import admin from '../assets/admin.avif';
import user from '../assets/user.avif';
import '../Styles/Home.css';
import Particle from './Particle';


const Home = () => {
  return (
    <div className="homepage">
        <Particle/>
       
       
      <div className="user-admin">
      <h1>WELCOME TO STAYFINDER</h1>
      <p>BOOK YOUR ROOMS...</p>
        <div className="admin">
          <img src={admin} alt="Admin" />
          <Link to='/Adminlogin'>ADMIN LOGIN</Link>
        </div>
        <div className="user">
          <img src={user} alt="User" />
          <Link to='/Userlogin'>USER LOGIN</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
