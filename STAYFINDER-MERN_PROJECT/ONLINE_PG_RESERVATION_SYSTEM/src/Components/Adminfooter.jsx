import { Link } from 'react-router-dom';
import '../Styles/AdminFooter.css';

const AdminFooter = () => {
  return (
    <footer className="admin-footer">
      <div className="footer-container">
        <div className="footer-middle">
          <h2>Quick Links</h2>
          <Link to="/Adminhomepage/Aboutus">About Us | </Link>
          <Link to="/Adminhomepage/Contactus" className="footer-link">Contact Us | </Link>
          <Link to="/Adminhomepage/Privacypolicy" className="footer-link">Privacy Policy | </Link>
          <Link to="/Adminhomepage/Termsconditions" className="footer-link">Terms & Conditions</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default AdminFooter;
