"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Palette, Eye, Cpu } from "lucide-react";

export default function GraduationProject() {
  const features = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Smart Skin Tone Analysis",
      description: "Accurately identifies the user's skin tone using advanced detection and classification algorithms."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Personalized Makeup Recommendations",
      description: "Matches user preferences with product attributes through a knowledge-based recommendation engine."
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Customized Seasonal Color Palette",
      description: "Maps the user's features to one of the 12 seasonal color types (Spring, Summer, Autumn, Winter) to suggest the most flattering colors for clothing and accessories."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Accurate Hair & Iris Classification",
      description: "Uses image processing and perceptual color analysis to determine natural hair and eye colors precisely."
    }
  ];

  return (
    <section id="graduation-project" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{
            fontFamily: "'Playwrite NZ Basic', cursive",
            fontOpticalSizing: "auto",
            fontWeight: 400,
            fontStyle: "normal"
          }}>
            <span className="glow-text">Graduation Project</span>
          </h2>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            {/* Title and Tagline */}
            <div className="text-center mb-12">
              <motion.h3 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent"
                style={{
                  fontFamily: "'Playwrite NZ Basic', cursive",
                  fontOpticalSizing: "auto",
                  fontWeight: 400,
                  fontStyle: "normal"
                }}
              >
                Color Harmony
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl text-palette-dustyBlue/90 mb-3 font-semibold"
              >
                AI-Powered Beauty Experience
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-xl text-purple-600 font-medium italic"
              >
                ✨ Discover your perfect colors ✨
              </motion.p>
            </div>

            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl mb-12 max-w-4xl mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-purple-300/20 to-transparent z-10"></div>
              <Image
                src="/images/Color Harmony.png"
                alt="Color Harmony Project"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
            </motion.div>

            {/* Description Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                className="card-yellow"
              >
                <h4 className="text-xl font-bold text-purple-700 mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  What is Color Harmony?
                </h4>
                <p className="text-black leading-relaxed">
                  An AI-powered system that analyzes your features and gives you personalized makeup and color palette recommendations instantly and accurately.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                className="card-yellow"
              >
                <h4 className="text-xl font-bold text-purple-700 mb-3 flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  The Innovation
                </h4>
                <p className="text-black leading-relaxed">
                  Color Harmony delivers an innovative beauty experience powered by advanced artificial intelligence, analyzing key facial features to provide personalized recommendations that enhance each user's natural beauty.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* How It Works Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center text-purple-600" style={{
              fontFamily: "'Playwrite NZ Basic', cursive",
              fontOpticalSizing: "auto",
              fontWeight: 400,
              fontStyle: "normal"
            }}>
              How It Works
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-yellow group hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-purple-300/30 text-purple-700 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-purple-700">{feature.title}</h4>
                      <p className="text-black text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
