import { useState } from "react";
import axios from "axios";
import "../Styles/Addpg.css";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Addpg = () => {
   let navigate = useNavigate();
    const [formData, setFormData] = useState({
        pgname: "",
        ownername: "",
        location: "Bangalore", 
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

   
    const addpg = async (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.keys(formData).forEach((key) => {
            data.append(key, formData[key]);
        });

       
        for (let i = 0; i < images.length; i++) {
            data.append("room_images", images[i]);
        }

        try {
            const response = await axios.post("http://localhost:5000/addpg", data, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            navigate('/Adminhomepage/Viewpg');
            toast.success(response.data.message); 
        } catch (err) {
            console.error(err);
            toast.error("Failed to add PG details."); 
        }
    };

    return (
        <div className="addpg">
            <form onSubmit={addpg}>
                <h1>ENTER PG DETAILS</h1>

                <label htmlFor="pgname">PG NAME:</label>
                <input 
                    type="text" 
                    name="pgname" 
                    value={formData.pgname} 
                    onChange={handleInputChange} 
                    required 
                    placeholder="Enter The PG Name" 
                />

                <label htmlFor="ownername">PG OWNER NAME</label>
                <input 
                    type="text" 
                    name="ownername" 
                    value={formData.ownername} 
                    onChange={handleInputChange} 
                    required 
                    placeholder="Enter The Owner Name" 
                />

                <label htmlFor="location">LOCATION</label>
                <input 
                    type="text" 
                    placeholder="Enter The Location" 
                    value={formData.location} 
                    onChange={handleInputChange} 
                    name="location" 
                />

                <label htmlFor="address">ADDRESS</label>
                <input 
                    type="text" 
                    placeholder="Enter The Address" 
                    value={formData.address} 
                    onChange={handleInputChange} 
                    name="address" 
                />

                <label htmlFor="availablerooms">AVAILABLE ROOMS</label>
                <input 
                    type="number" 
                    name="availablerooms" 
                    value={formData.availablerooms} 
                    onChange={handleInputChange} 
                    required 
                    placeholder="Enter The Available Rooms" 
                />

                <label htmlFor="roomrent">ROOM RENT</label>
                <input 
                    type="number" 
                    name="roomrent" 
                    value={formData.roomrent} 
                    onChange={handleInputChange} 
                    required 
                    placeholder="Enter The Room Rent" 
                />

                <label htmlFor="phonenumber">PHONE NUMBER</label>
                <input 
                    type="text" 
                    name="phonenumber" 
                    value={formData.phonenumber} 
                    onChange={handleInputChange} 
                    required 
                    placeholder="Enter The Phone Number" 
                />

                <label htmlFor="pgtype">PG TYPE</label>
                <select 
                    name="pgtype" 
                    value={formData.pgtype} 
                    onChange={handleInputChange} 
                    required
                >
                    <option value="Men Only">Men Only</option>
                    <option value="Women Only">Women Only</option>
                    <option value="Men and Women Both">Men and Women Both</option>
                </select>

                <label htmlFor="roomimages">ROOM IMAGES</label>
                <input 
                    type="file" 
                    multiple 
                    onChange={handleFileChange} 
                />

                <button type="submit">ADD PG</button>
            </form>
        </div>
    );
};

export default Addpg;
