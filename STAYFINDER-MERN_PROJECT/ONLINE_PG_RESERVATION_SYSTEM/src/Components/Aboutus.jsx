import user from '../assets/user.png'
import phone from '../assets/phone.png'
import mail from '../assets/email.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import '../Styles/Aboutus.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <img
        src={user} alt="About Us"/>
      <p>
        Welcome to our company! We are a passionate team of professionals dedicated to delivering the best
        solutions for our clients. We believe in creating innovative products and services that can drive change.
      </p>
      <div className="team-info">
        <h2>Our Founder</h2>
        <p>
          Our founder, <strong>Sabarinathan</strong>, brings extensive experience in frontend and backend web
          development, with expertise in technologies like HTML, CSS,SCSS,Tailwind,JavaScript,React,Nodejs,Expressjs,MongoDb,SQL Firebase. With a keen eye for design and user experience, Sabarinathan strives to create
          impactful and user-friendly digital solutions.
        </p>
      </div>
      <div className="contact-details">
        <h2>Contact Information</h2>
        <p>
          <img src={mail} alt="" /> <a href="mailto:sabarivirat2@gmail.com">sabarivirrt2@gmail.com</a>
        </p>
        <p>
          <img src={phone} alt="" /><a href="tel:+19345772036">+91 9345772036</a>
        </p>
        <p>
          <img src={github} alt="" /> <a href="https://github.com/viratsabari" target="_blank" rel="noopener noreferrer">https://github.com/viratsabari</a>
        </p>
        <p>
          <img src={linkedin} alt="" /> <a href="https://www.linkedin.com/in/sabari-nathan-828123246" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/sabari-nathan-828123246</a>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
