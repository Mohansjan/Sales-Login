// server.js (Node.js with Express)
import React from 'react';
import LoginSection from './LoginSection/login';
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001; // Example port

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint to send email
app.post('/send-email', async (req, res) => {
  const { recipient, subject, text } = req.body;

  // Create a Nodemailer transporter
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your_email@gmail.com', // Your Gmail email address
      pass: 'your_password', // Your Gmail password
    },
  });

  // Define email options
  let mailOptions = {
    from: 'your_email@gmail.com',
    to: recipient,
    subject: subject,
    text: text,
  };

  try {
    // Send email
    let info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send email');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
