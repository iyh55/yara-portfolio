"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    title: "AI Specialist",
    company: "National Center for Meteorology",
    location: "Saudi Arabia",
    period: "Jul 2025 – Jan 2026",
    logo: "/images/National Center for Meteorology.jfif",
    responsibilities: [
      "Developed an AI-powered Local Content Advisor to support regulatory understanding and compliance.",
      "Implemented semantic retrieval and context-aware question answering for local content regulations.",
      "Built the web interface and logic for local content calculations and advisory responses."
    ]
  },
  {
    title: "Artificial Intelligence Engineer Intern",
    company: "King Fahad Armed Forces Hospital",
    location: "Jeddah, Saudi Arabia",
    period: "Apr 2025 – Jun 2025",
    logo: "/images/King Fahad Armed Forces Hospital.jfif",
    responsibilities: [
      "Developed an internal AI-powered chatbot to support guesting and housing operations.",
      "Automated access to booking records and operational data for internal users.",
      "Reduced manual reporting efforts and improved workflow efficiency."
    ]
  },
  {
    title: "Artificial Intelligence Coop Trainee",
    company: "Saudi Airlines",
    location: "Jeddah, Saudi Arabia",
    period: "Jan 2025 – Feb 2025",
    logo: "/images/Saudi Airlines.png",
    responsibilities: [
      "Conducted applied AI research focused on aviation-related use cases.",
      "Evaluated existing AI-driven systems, particularly chatbot solutions.",
      "Proposed improvements to user experience and system intelligence."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
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
            <span className="glow-text">Experience</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-glow relative"
              >
                {/* Content */}
                <div className="flex items-start gap-6">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <div className="relative flex items-center justify-center" style={{ width: '60px', height: '60px' }}>
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={60}
                        height={60}
                        className="object-contain"
                        style={{ maxWidth: '60px', maxHeight: '60px' }}
                      />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold mb-1 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent" style={{
                          fontFamily: "'Playwrite NZ Basic', cursive",
                          fontOpticalSizing: "auto",
                          fontWeight: 400,
                          fontStyle: "normal"
                        }}>
                          {exp.title}
                        </h3>
                        <p className="text-lg text-gray-800 font-semibold mb-1">
                          {exp.company}
                        </p>
                        <p className="text-sm text-gray-600">
                          {exp.location}
                        </p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="inline-flex items-center gap-1 text-sm text-green-600 font-semibold bg-green-50 px-3 py-1 rounded-full">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-green-500 mt-1.5">•</span>
                          <span className="leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
