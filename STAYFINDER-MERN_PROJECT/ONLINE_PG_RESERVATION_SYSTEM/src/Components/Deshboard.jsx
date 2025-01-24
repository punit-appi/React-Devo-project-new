import axios from 'axios';
import { useEffect, useState } from 'react';
import '../Styles/Deshboard.css'

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [pgs, setPgs] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [error, setError] = useState('');

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:5000/userdashboard');
      setUsers(res.data);
    } catch {
      setError('Error fetching user data');
    }
  };

  const fetchPgs = async () => {
    try {
      const res = await axios.get('http://localhost:5000/pgdashboard');
      setPgs(res.data);
    } catch {
      setError('Error fetching PG data');
    }
  };

  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/feedbackdashboard');
      setFeedbacks(res.data);
    } catch {
      setError('Error fetching feedback data');
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchPgs();
    fetchFeedbacks();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>
      
      {error && <p className="error-message">{error}</p>}

  
      <div className="overview">
        <div className="overview-item">
          <h3>Total Users</h3>
          <p>{users.length}</p>
        </div>
        <div className="overview-item">
          <h3>Total PGs</h3>
          <p>{pgs.length}</p>
        </div>
        <div className="overview-item">
          <h3>Total Feedbacks</h3>
          <p>{feedbacks.length}</p>
        </div>
      </div>


      <div className="section">
        <h2>User Details</h2>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? users.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>
            )) : (
              <tr><td colSpan="3">No users found</td></tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="section">
        <h2>PG Details</h2>
        <table>
          <thead>
            <tr>
              <th>PG Name</th>
              <th>Owner Name</th>
              <th>Location</th>
              <th>Available Rooms</th>
              <th>Room Rent</th>
            </tr>
          </thead>
          <tbody>
            {pgs.length > 0 ? pgs.map((pg, index) => (
              <tr key={index}>
                <td>{pg.pgname}</td>
                <td>{pg.ownername}</td>
                <td>{pg.location}</td>
                <td>{pg.availablerooms}</td>
                <td>{pg.roomrent}</td>
              </tr>
            )) : (
              <tr><td colSpan="5">No PG data found</td></tr>
            )}
          </tbody>
        </table>
      </div>

     
      <div className="section">
        <h2>Feedbacks</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Query</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.length > 0 ? feedbacks.map((feedback, index) => (
              <tr key={index}>
                <td>{feedback.name}</td>
                <td>{feedback.email}</td>
                <td>{feedback.query}</td>
              </tr>
            )) : (
              <tr><td colSpan="3">No feedback found</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
