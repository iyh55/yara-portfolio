"use client";

import { motion } from "framer-motion";
import { ChevronDown, Rocket, Brain, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Icons */}
          <div className="flex justify-center space-x-8 mb-8" />

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{
              fontFamily: "'Playwrite NZ Basic', cursive",
              fontOpticalSizing: "auto",
              fontWeight: 400,
              fontStyle: "normal"
            }}>
              <span className="glow-text">Yara Alshehri</span>
            </h1>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-palette-dustyBlue" style={{
              fontFamily: "'Playwrite NZ Basic', cursive",
              fontOpticalSizing: "auto",
              fontWeight: 400,
              fontStyle: "normal"
            }}>
              AI Engineer
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-pink-500 mb-8 max-w-3xl mx-auto leading-relaxed font-semibold"
            style={{
              fontFamily: "'Playwrite NZ Basic', cursive",
              fontOpticalSizing: "auto",
              fontWeight: 400,
              fontStyle: "normal"
            }}
          >
            Turning ideas into intelligent, scalable AI solutions
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a href="#projects" className="btn-primary">
              Explore My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg font-orbitron font-semibold text-sm uppercase tracking-wider border-2 border-palette-mint hover:bg-palette-mint/10 transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8"
          >
            {[
              { label: "Projects", value: "10+" },
              { label: "Certifications", value: "15+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="card-glow text-center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <div className="text-3xl font-orbitron font-bold text-palette-dustyBlue mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-palette-dustyBlue/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-palette-mint" />
      </motion.a>
    </section>
  );
}
