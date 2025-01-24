import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Styles/Contactus.css"

const ContactUs = () => {
  let [Feedback, setfeedback] = useState({
    name: "",
    email: "",
    query: "",
  });

  let handlechange = (e) => {
    setfeedback({ ...Feedback, [e.target.name]: e.target.value });
  };

  function addfeedback(e) {
    e.preventDefault();
    try {
      axios
        .post("http://localhost:5000/feedbackdetails", Feedback)
        .then((res) => {
          if (res.data === "success") {
            toast.success("Thanks for your query");
            setfeedback({
              name: "",
              email: "",
              query: "",
            });
          }
        });
    } catch {
      toast.error("Can't send feedback");
    }
  }

  return (
    <div className="contact-container">
      <form className="contact-form">
        <h1 className="contact-title">Enter Your Queries</h1>
        <label htmlFor="name">Name</label>
        <input type="text" required name="name" value={Feedback.name} onChange={handlechange} placeholder="Enter your name"/>
        <label htmlFor="email">Email</label>
        <input type="email" required name="email" value={Feedback.email} onChange={handlechange}placeholder="Enter your email"/>
        <label htmlFor="query">Query</label>
        <textarea id="query" required name="query" value={Feedback.query} onChange={handlechange}placeholder="Enter your query or feedback"></textarea>
        <button className="contact-submit" onClick={addfeedback}>Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
