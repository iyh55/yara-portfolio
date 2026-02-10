"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Send, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-text">Let's collaborate and create something amazing</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="card-glow">
                <h3 className="text-2xl font-orbitron font-bold mb-6 text-palette-dustyBlue">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  {/* Email */}
                  <motion.a
                    href="mailto:Yara55hassan@gmail.com"
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-palette-dustyBlue/30 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-palette-dustyBlue/20 flex items-center justify-center group-hover:bg-palette-dustyBlue/30 transition-colors">
                      <Mail className="w-6 h-6 text-palette-mint" />
                    </div>
                    <div>
                      <p className="text-sm text-palette-dustyBlue/70">Email</p>
                      <p className="font-semibold">Yara55hassan@gmail.com</p>
                    </div>
                  </motion.a>

                  {/* Phone */}
                  <motion.a
                    href="tel:+966561667293"
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-palette-dustyBlue/30 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-palette-dustyBlue/20 flex items-center justify-center group-hover:bg-palette-dustyBlue/30 transition-colors">
                      <Phone className="w-6 h-6 text-palette-mint" />
                    </div>
                    <div>
                      <p className="text-sm text-palette-dustyBlue/70">Phone</p>
                      <p className="font-semibold">+966 56 166 7293</p>
                    </div>
                  </motion.a>

                  {/* Location */}
                  <motion.div
                    className="flex items-center space-x-4 p-4 rounded-lg group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-palette-dustyBlue/20 flex items-center justify-center group-hover:bg-palette-dustyBlue/30 transition-colors">
                      <MapPin className="w-6 h-6 text-palette-mint" />
                    </div>
                    <div>
                      <p className="text-sm text-palette-dustyBlue/70">Location</p>
                      <p className="font-semibold">Saudi Arabia</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Social Links */}
              <div className="card-glow">
                <h3 className="text-xl font-orbitron font-bold mb-4 text-palette-dustyBlue">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-palette-dustyBlue/50 flex items-center justify-center hover:bg-palette-mint/20 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-6 h-6 text-palette-mint" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-palette-dustyBlue/50 flex items-center justify-center hover:bg-palette-mint/20 transition-colors"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-6 h-6 text-palette-mint" />
                  </motion.a>
                  <motion.a
                    href="mailto:Yara55hassan@gmail.com"
                    className="w-12 h-12 rounded-full bg-palette-dustyBlue/50 flex items-center justify-center hover:bg-palette-mint/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="w-6 h-6 text-palette-mint" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="card-glow"
            >
              <h3 className="text-2xl font-orbitron font-bold mb-6 text-palette-dustyBlue">
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-palette-dustyBlue/80 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-palette-dustyBlue/50 border border-palette-dustyBlue/30 text-gray-800 placeholder-palette-dustyBlue/50 focus:outline-none focus:border-palette-mint transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-palette-dustyBlue/80 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-palette-dustyBlue/50 border border-palette-dustyBlue/30 text-gray-800 placeholder-palette-dustyBlue/50 focus:outline-none focus:border-palette-mint transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-palette-dustyBlue/80 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg bg-palette-dustyBlue/50 border border-palette-dustyBlue/30 text-gray-800 placeholder-palette-dustyBlue/50 focus:outline-none focus:border-palette-mint transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Send Message</span>
                  <Send size={18} />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
