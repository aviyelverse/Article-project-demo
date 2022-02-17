import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact">
      <h1>Contact Us</h1>
      <form>
        <input type="text" placeholder="Enter your name" required />
        <input type="email" placeholder="Enter your email" required />
        <textarea placeholder="Explain in brief..." name="message"></textarea>
        <input type="submit" value="send" />
      </form>
    </div>
  );
};

export default Contact;
