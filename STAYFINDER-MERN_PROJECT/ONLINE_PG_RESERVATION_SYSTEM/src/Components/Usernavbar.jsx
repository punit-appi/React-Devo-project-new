import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Styles/Usernavbar.css';
import usericon from '../assets/usericon.png';

const Usernavbar = () => {
    const [currentuser, setCurrentuser] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentuser(localStorage.getItem('username'));
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const logout = () => {
        setCurrentuser(localStorage.removeItem('username'));
        toast.info('Thanks for visiting');
        navigate('/Userlogin');
    };

    return (
        <nav className="user-navbar">
            <div className="navbar-container">
                <div className="top-row">
                    <div className="logo">
                        <span className="logo-icon">🌐</span> User Panel
                    </div>
                    <div className="user-info">
                        <img src={usericon} alt="User" />
                        <span className="username">{currentuser || 'Guest'}</span>
                        <button className="logout-button" onClick={logout}>Logout</button>
                    </div>
                </div>
                <div className="bottom-row">
                    <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                        <Link to="/Userhomepage/Pglist" className="nav-link" onClick={toggleMenu}>PG'S LIST</Link>
                        
                        <Link to="/Userhomepage/Myprofile" className="nav-link" onClick={toggleMenu}>MY PROFILE</Link>
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

export default Usernavbar;
