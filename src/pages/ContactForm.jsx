import React, { useState } from 'react';
import myPhoto from '../assets/myPhoto.jpg'; // Make sure this path is correct

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
        setStatus('Message sent successfully!');
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
    <section className="py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl lg:text-5xl text-slate-gray font-bold">Contact Me</h1>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="p-6 bg-deep-navy rounded-lg shadow-lg">
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
          <button type="submit" className="hover:bg-gradient-to-r hover:from-slate-500 hover:to-slate-900 w-full bg-nav-navy text-white py-3 rounded hover:bg-rich-blue transition duration-300">
            Send
          </button>
          {status && <p className="mt-4 text-slate-gray text-center">{status}</p>}
        </form>
        <div className="relative flex items-center justify-center p-6 bg-deep-navy rounded-lg shadow-lg">
  <img src={myPhoto} alt="My Photo" className="rounded-full shadow-lg max-w-full h-auto" />
  <div className="absolute inset-0 bg-black opacity-50 rounded-full"></div> {/* Overlay */}
</div>

      </div>
    </section>
  );
};

export default ContactForm;
