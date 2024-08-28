import React, { useRef } from 'react';
import "./Return.css"; // Updated stylesheet name
import emailjs from '@emailjs/browser';

// Initialize with your actual user ID
emailjs.init('YOUR_ACTUAL_USER_ID');

const ReturnSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const payload = new FormData(form.current);
    console.log('Payload Size:', payload.get('message').length);

    emailjs
      .sendForm('service_wg3y16d', 'template_mbso9xd', form.current, 'Z39N3_cDaDEqpcpty')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Failed to send email. Please check the console for more details.");
        },
      );
  };

  return (
    <div className='return-section'>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="user_name">Name</label>
        <input type="text" id="user_name" name="user_name" required />

        <label htmlFor="user_Email">Email</label>
        <input type="email" id="user_Email" name="user_Email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />

        <label htmlFor="file_upload">Attach a file</label>
        <input type="file" id="file_upload" name="file_upload" />

        <label htmlFor="return_type">Type of Return</label>
        <select id="return_type" name="return_type" required>
          <option value="">Select</option>
          <option value="damage">Product Damage</option>
          <option value="size_issue">Size Issue</option>
          <option value="not_same_product">Not the Same Product</option>
          <option value="color_issue">Color Issue</option>
        </select>

        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ReturnSection;
