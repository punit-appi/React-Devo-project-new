import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Updatepg = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    pgname: "",
    ownername: "",
    location: "",
    address: "",
    availablerooms: "",
    roomrent: "",
    phonenumber: "",
    pgtype: "Men Only",
  });

  const [images, setImages] = useState([]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImages(e.target.files);
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/details/${params.id}`)
      .then((res) => {
        setFormData({
          pgname: res.data.pgname,
          ownername: res.data.ownername,
          location: res.data.location,
          address: res.data.address,
          availablerooms: res.data.availablerooms,
          roomrent: res.data.roomrent,
          phonenumber: res.data.phonenumber,
          pgtype: res.data.pgtype,
        });
      })
      .catch(() => {
        toast("Can't fetch data");
      });
  }, [params.id]);

  const updatepgdeatils = (e) => {
    e.preventDefault(); // Prevent default form submission

    const updateData = new FormData();
    // Append form data
    updateData.append("pgname", formData.pgname);
    updateData.append("ownername", formData.ownername);
    updateData.append("location", formData.location);
    updateData.append("address", formData.address);
    updateData.append("availablerooms", formData.availablerooms);
    updateData.append("roomrent", formData.roomrent);
    updateData.append("phonenumber", formData.phonenumber);
    updateData.append("pgtype", formData.pgtype);

    // Append images to formData
    for (let i = 0; i < images.length; i++) {
      updateData.append("room_images", images[i]);
    }

    // Send PUT request with FormData
    axios.put(`http://localhost:5000/updatepg/${params.id}`, updateData)
      .then((res) => {
        if (res.status === 200) {
          navigate('/Adminhomepage/Viewpg');
          toast.success("Successfully updated");
        } else {
          toast.error("Not updated");
        }
      })
      .catch(() => {
        toast.error("Can't update data");
      });
  };

  return (
    <div className="addpg">
      <form onSubmit={updatepgdeatils}>
        <h1>UPDATE PG DETAILS</h1>
        <label htmlFor="pgname">PG NAME:</label>
        <input type="text" name="pgname" value={formData.pgname} onChange={handleInputChange} required placeholder="Enter The PG Name" />

        <label htmlFor="ownername">PG OWNER NAME</label>
        <input type="text" name="ownername" value={formData.ownername} onChange={handleInputChange} required placeholder="Enter The Owner Name" />

        <label htmlFor="location">LOCATION</label>
        <input type="text" placeholder="Enter The Location" value={formData.location} onChange={handleInputChange} name="location" />

        <label htmlFor="address">ADDRESS</label>
        <input type="text" placeholder="Enter The Address" value={formData.address} onChange={handleInputChange} name="address" />

        <label htmlFor="availablerooms">AVAILABLE ROOMS</label>
        <input type="number" name="availablerooms" value={formData.availablerooms} onChange={handleInputChange} required placeholder="Enter The Available Rooms" />

        <label htmlFor="roomrent">ROOM RENT</label>
        <input type="number" name="roomrent" value={formData.roomrent} onChange={handleInputChange} required placeholder="Enter The Room Rent" />

        <label htmlFor="phonenumber">PHONE NUMBER</label>
        <input type="text" name="phonenumber" value={formData.phonenumber} onChange={handleInputChange} required placeholder="Enter The Phone Number" />

        <label htmlFor="pgtype">PG TYPE</label>
        <select name="pgtype" value={formData.pgtype} onChange={handleInputChange} required>
          <option value="Men Only">Men Only</option>
          <option value="Women Only">Women Only</option>
          <option value="Men and Women Both">Men and Women Both</option>
        </select>

        <label htmlFor="roomimages">ROOM IMAGES</label>
        <input type="file" multiple onChange={handleFileChange} />

        <button type="submit">Update PG</button>
      </form>
    </div>
  );
};

export default Updatepg;
