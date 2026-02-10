"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About Me
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12 relative max-w-4xl mx-auto"
          >
            {/* Speech Bubble */}
            <div className="bg-pink-200/40 rounded-3xl p-8 md:p-12 relative border-2 border-gray-400" style={{
              boxShadow: "0 10px 30px rgba(255, 192, 203, 0.3)"
            }}>
              {/* Tail */}
              <div className="absolute -bottom-4 left-12 w-0 h-0" style={{
                borderLeft: "12px solid transparent",
                borderRight: "12px solid transparent",
                borderTop: "12px solid rgba(255, 192, 203, 0.4)",
              }} />
              
              <p className="text-lg text-black leading-relaxed mb-4 text-center">
                Hello, I'm <span style={{ color: "#F075AE", fontSize: "1.3em", fontWeight: "600" }}>Yara</span>. I'm an AI Engineer with a Bachelor's degree in Artificial Intelligence (with honors) and CDMP® certification.
              </p>
              <p className="text-lg text-black leading-relaxed mb-4 text-center">
                I focus on applied AI, where I design intelligent systems that support decision-making, improve processes, and turn data into practical solutions.
              </p>
              <p className="text-lg text-black leading-relaxed mb-4 text-center">
                Through my academic background and professional experience, I have worked on AI-powered tools across different domains, collaborating with real operational data and business needs.
              </p>
              <p className="text-lg text-black leading-relaxed text-center">
                I'm passionate about building scalable and impactful AI solutions that bridge innovation and real-world application.
              </p>
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
}
