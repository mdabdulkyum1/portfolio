import React, { useEffect, useState } from "react";
import myPhoto from "../assets/myPhoto.jpg"; // Make sure this path is correct
import { HiLocationMarker } from "react-icons/hi";
import { Helmet } from "react-helmet-async";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          access_key: "94e0072e-f4e4-4190-be50-671f5cf0610b", // Your Web3Forms Access Key
        }),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send message.");
    }
  };
  useEffect(()=> {
        window.scrollTo(0,0);
  },[])

  return (
    <>
    <Helmet>
       <title>Md Abdul Kyum | Contact</title>
    </Helmet>
    <section className="py-12 bg-light-background dark:bg-dark-background" id="contact">
    <div className="text-center mb-8">
      <h1 className="text-3xl lg:text-5xl font-bold text-primary dark:text-dark-text mb-4">
        Contact Me
      </h1>
    </div>
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Form Section */}
      <form onSubmit={handleSubmit} className="p-6 bg-white dark:bg-dark-background rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-primary dark:text-primary font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full p-3 border border-light-border dark:border-dark-border bg-white dark:bg-dark-background text-dark dark:text-dark-text text-base rounded placeholder-dark dark:placeholder-light"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-primary dark:text-primary font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full p-3 border border-light-border dark:border-dark-border bg-white dark:bg-dark-background text-dark dark:text-dark-text text-base rounded placeholder-dark dark:placeholder-light"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-primary dark:text-primary  font-semibold mb-2" htmlFor="subject">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter subject"
            className="w-full p-3 border border-light-border dark:border-dark-border bg-white dark:bg-dark-background text-dark dark:text-dark-text text-base rounded placeholder-dark dark:placeholder-light"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-primary dark:text-primary  font-semibold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className="w-full p-3 border border-light-border dark:border-dark-border bg-white dark:bg-dark-background text-dark dark:text-dark-text text-base rounded placeholder-dark dark:placeholder-light"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-light-accent to-dark-accent dark:from-dark-accent dark:to-light-accent rounded-md border border-light-border dark:border-dark-border shadow-sm text-light-text dark:text-dark-text font-bold py-3 hover:bg-accent dark:hover:bg-accent-dark transition duration-300"
        >
          Send
        </button>
        {status && <p className="mt-4 text-center text-primary dark:text-primary-dark">{status}</p>}
      </form>
  
      {/* Image and Address Section */}
      <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-dark-background rounded-lg shadow-lg">
        <div className="relative">
          <img
            src={myPhoto}
            alt="My Photo"
            className="rounded-full w-32 h-32 object-cover border-4 border-primary dark:border-primary-dark"
          />
          <div className="absolute inset-0 bg-black opacity-25 rounded-full"></div> {/* Overlay */}
        </div>
        <div className="mt-6 text-center">
          <div className="flex items-center justify-center mb-4 text-primary dark:text-primary-dark">
            <HiLocationMarker className="mr-2 text-xl" />
            <span className="text-lg">Barishal, Amtali, Barguna</span>
          </div>
          <div className="text-lg text-primary dark:text-primary-dark">
            <p>Address: Tarikata, Amtali, Barguna, Bangladesh</p>
          </div>
          <div className="text-lg text-primary dark:text-primary-dark my-2">
            <p>Phone: +8801754-462-008</p>
          </div>
        </div>
      </div>
    </div>
     </section>
    </>
  
  

  );
};

export default ContactForm;
