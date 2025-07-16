import React, { useState, useContext } from "react";
import ThemeContext from "./ThemeContext";
import "./Contact.css";                // ⬅️ import the CSS below

const Contact = () => {
  const mode = useContext(ThemeContext);

  const [details, setDetails] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // simple validation
    const everyFieldFilled = Object.values(details).every((v) => v.trim() !== "");
    if (!everyFieldFilled) {
      alert("Please fill in all fields.");
      return;
    }

    console.table(details);       // 🔍 or send to backend
    alert("Thank you! Your message has been received.");

    // clear form
    setDetails({ name: "", email: "", contact: "", message: "" });
  };

  return (
    <div
      className="contact-page"
      style={{
        backgroundColor: mode === "dark" ? "#121212" : "#f4f4f4",
        color:           mode === "dark" ? "#ffffff" : "#121212",
      }}
    >
      <h1>Contact Us!</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name..."
          onChange={handleChange}
          value={details.name}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email..."
          onChange={handleChange}
          value={details.email}
        />

        <label htmlFor="contact">Contact</label>
        <input
          id="contact"
          name="contact"
          type="tel"
          placeholder="Enter your contact no..."
          onChange={handleChange}
          value={details.contact}
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter your message..."
          onChange={handleChange}
          value={details.message}
        />

        <div style={{ display: 'flex', justifyContent: 'center' }}>
    <button type='submit'>Submit</button>
  </div>
      </form>
    </div>
  );
};

export default Contact;
