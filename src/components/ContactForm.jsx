// src/components/ContactForm.jsx
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          access_key: '94e0072e-f4e4-4190-be50-671f5cf0610b', // Your Web3Forms Access Key
        }),
      });

      if (response.ok) {
        setStatus('Message sent!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Failed to send message.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-deep-navy rounded-lg shadow-lg">
      <div className="mb-4">
        <label className="block text-slate-gray font-semibold mb-2" htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-steel-gray bg-midnight-blue text-white rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-slate-gray font-semibold mb-2" htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-steel-gray bg-midnight-blue text-white rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-slate-gray font-semibold mb-2" htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-3 border border-steel-gray bg-midnight-blue text-white rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-slate-gray font-semibold mb-2" htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border border-steel-gray bg-midnight-blue text-white rounded"
          required
        />
      </div>
      <button type="submit" className="w-full bg-nav-navy text-white py-3 rounded hover:bg-rich-blue transition duration-300">
        Send
      </button>
      {status && <p className="mt-4 text-slate-gray text-center">{status}</p>}
    </form>
  );
};

export default ContactForm;
