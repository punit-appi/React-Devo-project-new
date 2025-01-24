import axios from "axios";
import { useEffect, useState } from "react";
import "../Styles/Viewpg.css";
import { useNavigate } from "react-router-dom";
import update from '../assets/updated.png'
import del from '../assets/recycle-bin.png'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Viewpg = () => {
  const [pglist, setPglist] = useState([]);

  const navigate=useNavigate()

    const fetchPgList = async () => {
      try {
        const response = await axios.get("http://localhost:5000/pglist");
        setPglist(response.data);
      } catch (err) {
        console.error("Can't get data", err);
      }
    };
    useEffect(()=>{
    fetchPgList();
    })
    function updatepg(pid){
        navigate(`/Adminhomepage/Updatepg/${pid}`)
    }
    
    function deletepg(pid) {
      axios.delete(`http://localhost:5000/delete/${pid}`)
        .then(res => {
          if (res.status === 200) {
            fetchPgList(); 
            toast("Deleted successfully");
          }
        })
        .catch(err => {
          console.error('Error:', err);
          toast("Failed to delete");
        });
    }
    

  return (
    <div className="viewpg">
      {pglist.map((pg, index) => (
        <div className="pglist" key={index}>
          <div className="text-content">
            <h1>{pg.pgname}</h1>
            <h2>Owner: {pg.ownername}</h2>
            <h2>Location: {pg.location}</h2>
            <h2>Address: {pg.address}</h2>
            <h2>Available Rooms: {pg.availablerooms}</h2>
            <h2>Room Rent: ₹{pg.roomrent}</h2>
            <h2>Contact: {pg.phonenumber}</h2>
            <h2>Pg Type: {pg.pgtype}</h2>
            <div className="buttons">
            <button id="update" onClick={()=>updatepg(pg._id)}><img src={update} alt="" />UPDATE</button>
            <button id="delete" onClick={()=>deletepg(pg._id)}><img src={del} alt="" />DELETE</button>
            </div>
          </div>
          <div className="image-gallery">
            {pg.room_images.map((image, imgIndex) => (
              <img key={imgIndex} src={`http://localhost:5000${image}`} alt={`Room ${imgIndex + 1}`} className="room-image"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Viewpg;
