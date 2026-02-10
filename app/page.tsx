"use client";

import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import TechnicalArsenal from "../components/TechnicalArsenal";
import Certifications from "../components/Certifications";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import ParticleBackground from "../components/ParticleBackground";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white">
      <ParticleBackground />
      <Navigation />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Experience />
        <TechnicalArsenal />
        <Certifications />
        <Projects />
        <Achievements />
        <Contact />
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center border-t border-palette-dustyBlue/30">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4"
        >
          <p className="text-palette-dustyBlue/80 text-sm">
            © 2026 Yara Alshehri | AI Engineer
          </p>
        </motion.div>
      </footer>
    </main>
  );
}
