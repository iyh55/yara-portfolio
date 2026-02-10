"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Education() {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-text">Education</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl bg-white/5 border border-palette-dustyBlue/20"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              <div className="w-24 h-24 relative">
                <Image
                  src="/images/uj-logo-new.png"
                  alt="University of Jeddah"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

            {/* Education Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex-grow"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-palette-dustyBlue" style={{
                fontFamily: "'Playwrite NZ Basic', cursive",
                fontOpticalSizing: "auto",
                fontWeight: 400,
                fontStyle: "normal"
              }}>
                Bachelor of Science in Artificial Intelligence
              </h3>
              <p className="text-lg text-palette-dustyBlue/80 mb-4 font-semibold" style={{
                fontFamily: "'Playwrite NZ Basic', cursive",
                fontOpticalSizing: "auto",
                fontWeight: 400,
                fontStyle: "normal"
              }}>
                (with Honors)
              </p>
              <p className="text-palette-dustyBlue/70 mb-2" style={{
                fontFamily: "'Playwrite NZ Basic', cursive",
                fontOpticalSizing: "auto",
                fontWeight: 400,
                fontStyle: "normal"
              }}>
                College of Computer Science and Engineering
              </p>
              <p className="text-palette-dustyBlue/70" style={{
                fontFamily: "'Playwrite NZ Basic', cursive",
                fontOpticalSizing: "auto",
                fontWeight: 400,
                fontStyle: "normal"
              }}>
                University of Jeddah | May 2025
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
