
import "../Styles/privacypolicy.css";
import { FaShieldAlt, FaInfoCircle, FaUserSecret, FaCookieBite, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-title">Privacy Policy</h1>
      <p className="privacy-intro">
        Your privacy matters to us. This Privacy Policy explains how we collect, use, and protect your data while you use our services. Please read it carefully.
      </p>

      <div className="privacy-section">
        <FaInfoCircle className="privacy-icon" />
        <h2>1. Information We Collect</h2>
        <ul>
          <li><strong>Personal Data:</strong> Name, email, phone number, or other details you provide.</li>
          <li><strong>Usage Data:</strong> Interactions with our platform, such as pages visited and features used.</li>
          <li><strong>Device Data:</strong> Information like your IP address, browser type, and device model.</li>
        </ul>
      </div>

      <div className="privacy-section">
        <FaUserSecret className="privacy-icon" />
        <h2>2. How We Use Your Information</h2>
        <p>Your data is used to:</p>
        <ul>
          <li>Provide and improve our services.</li>
          <li>Respond to your queries and support requests.</li>
          <li>Analyze platform usage to enhance user experience.</li>
        </ul>
      </div>

      <div className="privacy-section">
        <FaShieldAlt className="privacy-icon" />
        <h2>3. How We Protect Your Data</h2>
        <p>We employ advanced security measures such as encryption and firewalls to ensure your information remains secure. However, no system is 100% secure, and we encourage users to safeguard their credentials.</p>
      </div>

      <div className="privacy-section">
        <FaCookieBite className="privacy-icon" />
        <h2>4. Cookies</h2>
        <p>We use cookies to provide a personalized experience. Cookies help us analyze traffic, save preferences, and deliver tailored content.</p>
      </div>

      <div className="privacy-section">
        <FaEnvelope className="privacy-icon" />
        <h2>5. Contact Us</h2>
        <p>Have questions? Contact us anytime:</p>
        <p>Email: <a href="mailto:sabarivirrt2@gmail.com">sabarivirrt2@gmail.com</a></p>
        <p>Phone: <a href="tel:+919345772036">+91 9345772036</a></p>
      </div>

      <p className="privacy-footer">Last Updated: December 5, 2024</p>
    </div>
  );
};

export default PrivacyPolicy;
