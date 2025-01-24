import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/Adminnavbar.css';
import adminicon from '../assets/adminicon.png';

const Adminnavbar = () => {
  const [currentadmin, setCurrentadmin] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentadmin(localStorage.getItem('adminname'));
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    setCurrentadmin(localStorage.removeItem('adminname'));
    toast.info('Thanks for visiting');
    navigate('/Adminlogin');
  };

  return (
    <nav className="admin-navbar">
      <div className="navbar-container">
        <div className="top-row">
          <div className="logo">
            <span className="logo-icon">🖥️</span> Admin Panel
          </div>
          <div className="admin-info">
            <img src={adminicon} alt="Admin" />
            <span className="adminname">{currentadmin || 'Guest'}</span>
            <button className="logout-button" onClick={logout}>Logout</button>
          </div>
        </div>
        <div className="bottom-row">
          <div className={`nav-links ${isOpen ? 'open' : ''}`}>
            <Link to="/Adminhomepage" className="nav-link" onClick={toggleMenu}>DASHBOARD</Link>
            <Link to="/Adminhomepage/Addpg" className="nav-link" onClick={toggleMenu}>ADD PG'S</Link>
            <Link to="/Adminhomepage/Viewpg" className="nav-link" onClick={toggleMenu}>VIEW PG'S</Link>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Adminnavbar;
