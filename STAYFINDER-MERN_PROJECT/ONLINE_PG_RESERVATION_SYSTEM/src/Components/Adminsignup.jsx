import { useState } from "react";
import "../Styles/Adminsignup.css";
import Particle from "./Particle";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Adminsignup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const navigate = useNavigate();

  const signupData = async (e) => {
    e.preventDefault();
    if (password !== retypePassword) {
      toast.error("Passwords do not match");
      return;
    }

    const payload = { username, email, password };

    try {
      const response = await axios.post("http://localhost:5000/adminsignup", payload);
      if (response.data === "Invalid input data") {
        toast.error("Invalid input");
      } else if (response.data === "Admin created successfully") {
        toast.success("Signup Successful");
        navigate("/Adminlogin");
      } else if (response.data === "This email ID already exists") {
        toast.error("This email ID already exists");
      } else {
        toast.error("Can't store signup details");
      }
    } catch (err) {
      console.error("Error occurred:", err);
      toast.error("An unexpected error occurred");
    }
  };

  return (
    <div className="adminsignup">
      <Particle />
      <form onSubmit={signupData}>
        <h1>ENTER THE SIGNUP DETAILS</h1>
        <label htmlFor="username">USERNAME</label>
        <input
          type="text"
          placeholder="Enter The Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">EMAIL</label>
        <input
          type="email"
          placeholder="Enter The Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">PASSWORD</label>
        <input
          type="password"
          placeholder="Enter The Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="retypePassword">RE-TYPE PASSWORD</label>
        <input
          type="password"
          placeholder="Re-Type The Password"
          value={retypePassword}
          onChange={(e) => setRetypePassword(e.target.value)}
        />
        <button type="submit">SUBMIT</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Adminsignup;
