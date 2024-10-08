"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, ArrowLeft } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

// Initialize EmailJS with your public key
emailjs.init("1ggY8LRSu4amFw6vN");  // Replace with your actual public key

function Contact() {
  
  const [gradientColor, setGradientColor] = useState('from-purple-900');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const colors = ['from-purple-900', 'from-indigo-900', 'from-blue-900', 'from-violet-900'];
    let colorIndex = 0;
    const intervalId = setInterval(() => {
      colorIndex = (colorIndex + 1) % colors.length;
      setGradientColor(colors[colorIndex]);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await emailjs.sendForm(
        'service_lrm20ey',     // Replace with your actual EmailJS Service ID
        'template_1loh8va',    // Replace with your actual EmailJS Template ID
        e.target,              // Form element
        '1ggY8LRSu4amFw6vN'    // Replace with your actual Public Key
      );
      console.log('Email sent successfully:', result.text);
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Failed to send email:', error.text);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Starry night background */}
      <div className="absolute inset-0 bg-black">
        {[...Array(200)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>
      
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-b ${gradientColor} to-transparent opacity-70 transition-colors duration-1000`} />

      {/* Back button */}
      <Link to={'/'} className="absolute top-4 left-4 z-20">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white bg-opacity-20 p-2 rounded-full"
        >
          <ArrowLeft className="text-white" size={24} />
        </motion.div>
      </Link>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Contact Me</h1>
        
        <div className="max-w-3xl mx-auto bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 bg-white bg-opacity-10 border border-gray-300 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 bg-white bg-opacity-10 border border-gray-300 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="mt-1 block w-full px-3 py-2 bg-white bg-opacity-10 border border-gray-300 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        
        <div className="mt-12 flex justify-center space-x-6">
          <a href="https://github.com/Nimit1775" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/nimit-sodhani-10487b1a6/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <Linkedin size={24} />
          </a>
          <a href="https://x.com/nimit_sodhani" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <Twitter size={24} />
          </a>
          <a href="https://www.instagram.com/nimitsodhani/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
