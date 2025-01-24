
import "../Styles/Termsconditions.css";
import { FaFileContract, FaCheckCircle, FaBan, FaUserShield } from "react-icons/fa";

const Termsconditions = () => {
  return (
    <div className="terms-conditions-container">
      <h1 className="terms-title">Terms and Conditions</h1>
      <p className="terms-intro">
        Please read these terms and conditions carefully before using our services.
      </p>

      <div className="terms-section">
        <span className="terms-icon">
          <FaFileContract />
        </span>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using our services, you agree to comply with and be bound by these terms.
        </p>
      </div>

      <div className="terms-section">
        <span className="terms-icon">
          <FaCheckCircle />
        </span>
        <h2>2. User Responsibilities</h2>
        <p>
          Users are responsible for ensuring the accuracy of the information they provide and for
          complying with all applicable laws.
        </p>
      </div>

      <div className="terms-section">
        <span className="terms-icon">
          <FaBan />
        </span>
        <h2>3. Prohibited Activities</h2>
        <ul>
          <li>Unauthorized access to our systems or data.</li>
          <li>Spamming, phishing, or other fraudulent activities.</li>
        </ul>
      </div>

      <div className="terms-section">
        <span className="terms-icon">
          <FaUserShield />
        </span>
        <h2>4. Privacy Policy</h2>
        <p>
          Our Privacy Policy outlines how we handle your data. Please refer to it for more
          information.
        </p>
      </div>

      <p className="terms-footer">
        By using our services, you agree to these terms and conditions. If you have any questions,
        please contact us at <a href="mailto:sabarivirat2@gmail.com">sabarivirat2@gmail.com</a>.
      </p>
    </div>
  );
};

export default Termsconditions;
