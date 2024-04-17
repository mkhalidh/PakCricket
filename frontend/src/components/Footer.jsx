import React, { useState } from 'react';
import axios from "axios";
import toast from "react-hot-toast";

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSendMessage = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/email/send",
        { email },
        { withCredentials: true, headers: { "Content-Type": "application/json" } }
      );
      toast.success(response.data.message);
      setEmail(""); // Clear the email input
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <footer>
      <div className='banner'>
        <div className='title'>
          <h1>PCB'S</h1>
          <p>GLORIOUS CRICKET</p>
        </div>
        <div className='tag'>
          <form onSubmit={handleSendMessage}> {/* Attach onSubmit event to the form */}
            <label>News Letter</label>
            <div>
              <input
                className='Emaill'
                type='email'
                placeholder='E-mail'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type='submit'>Subscribe</button> {/* Move onSubmit from here */}
            </div>
          </form>
          <p>Enter your email address to receive news and updates!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
