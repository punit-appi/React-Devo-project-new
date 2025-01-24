import { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/Myprofile.css";
import userprofile from '../assets/gamer.png'

const Myprofile = () => {
  const [currentuser, setcurrentuser] = useState({});

  const fetchdata = async () => {
    try {
      const user = localStorage.getItem('username');
      if (!user) {
        console.log('No user found in localStorage');
        return;
      }
      const response = await axios.get(`http://localhost:5000/userdata/${user}`);
      setcurrentuser(response.data);
    } catch (error) {
      console.log('Cannot fetch data:', error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="myprofile">
      <div className="profile-container">
        <h1 className="profile-title">My Profile</h1>
        <div className="profile-details">
          <img src={userprofile} alt="" />
          <p><span>Username:</span> {currentuser.username}</p>
          <p><span>Email:</span> {currentuser.email}</p>
          <p><span>Password:</span> {currentuser.password}</p>
        </div>
      </div>
    </div>
  );
};

export default Myprofile;
