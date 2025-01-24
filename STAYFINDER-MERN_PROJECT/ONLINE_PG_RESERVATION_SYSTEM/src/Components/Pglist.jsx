import { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/Pglist.css"; // Ensure this path is correct

const Pglist = () => {
  const [pglist, setPglist] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchPgList = async () => {
      try {
        const response = await axios.get("http://localhost:5000/pglist");
        setPglist(response.data);
      } catch (err) {
        console.error("Can't get data", err);
      }
    };

    fetchPgList();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/pglist/search?query=${searchQuery}`);
      setPglist(response.data);
    } catch (err) {
      console.error("Search failed", err);
    }
  };

  return (
    <div className="pglists">
      <div className="search-bar">
        <input type="text" placeholder="Search Here" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
        <button onClick={handleSearch}>Search</button>
      </div>
      {pglist.length > 0 ? (
        pglist.map((pg, index) => (
          <div className="pglist" key={index}>
            <div className="text-content">
              <h1>{pg.pgname}</h1>
              <h2>Owner: {pg.ownername}</h2>
              <h2>Location: {pg.location}</h2>
              <h2>Address: {pg.address}</h2>
              <h2>Available Rooms: {pg.availablerooms}</h2>
              <h2>Room Rent: ₹{pg.roomrent}</h2>
              <h2>Contact: {pg.phonenumber}</h2>
            </div>
            <div className="image-gallery">
              {pg.room_images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={`http://localhost:5000${image}`}
                  alt={`Room ${imgIndex + 1}`}
                  className="room-image"
                />
              ))}
            </div>
          </div>
        ))
      ) : (
        <p className="no-data">No data available. Please try again later.</p>
      )}
    </div>
  );
};

export default Pglist;
