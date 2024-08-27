/* eslint-disable no-undef */
// src/api/contact.js or pages/api/contact.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, subject, message } = req.body;
  
      const nodemailer = require('nodemailer');
  
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.EMAIL_USER, // Use environment variables for credentials
          pass: process.env.EMAIL_PASS,
        },
      });
  
      const mailOptions = {
        from: email,
        to: 'kyummdabdul@gmail.com',
        subject: `New message from ${name}: ${subject}`, // Include subject in the email
        text: message,
      };
  
      try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Message sent successfully' });
      } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Error sending email' });
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }
  