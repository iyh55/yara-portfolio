"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin, FileDown } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Technical Arsenal", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md border-b border-palette-dustyBlue/30" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-palette-dustyBlue/80 hover:text-palette-mint transition-colors font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Social Links & Download CV */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-palette-dustyBlue/50 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Github size={20} className="text-palette-mint" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-palette-dustyBlue/50 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Linkedin size={20} className="text-palette-mint" />
              </motion.a>
              <motion.a
                href="/images/Yara_Alshehri_AI_Engineer.pdf"
                download="Yara_Alshehri_AI_Engineer.pdf"
                className="btn-primary flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <FileDown size={16} />
                <span>My CV</span>
              </motion.a>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="md:hidden p-2 rounded-lg hover:bg-palette-dustyBlue/50"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 space-y-3 pb-4"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 rounded-lg hover:bg-palette-dustyBlue/50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </motion.nav>
    </>
  );
}
