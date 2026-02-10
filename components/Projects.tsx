"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Color Harmony",
    company: "Graduation Project",
    description: "An AI-powered system that analyzes your features and gives you personalized makeup and color palette recommendations instantly and accurately. Color Harmony delivers an innovative beauty experience powered by advanced artificial intelligence, analyzing key facial features—skin tone, hair color, eye color, and undertone—to provide personalized makeup recommendations and customized color palettes that enhance each user's natural beauty.",
    tech: ["AI", "Computer Vision", "Image Processing", "Machine Learning", "Beauty Tech"],
    color: "from-purple-300 to-purple-500",
    logo: "/images/Color Harmony.png",
  },
  {
    title: "AI Research Project",
    company: "Saudi Airlines",
    description: "An AI-focused research project conducted during my cooperative training at Saudi Airlines, exploring practical applications of artificial intelligence in the aviation sector. The project involved evaluating existing AI-driven systems, particularly chatbots, and proposing improvements to user experience, interaction design, and system intelligence to support scalable digital solutions.",
    tech: ["AI", "Research", "Chatbot Analysis", "UX Design", "Aviation Tech"],
    color: "from-blue-500 to-cyan-500",
    logo: "/images/Saudi Airlines.png",
  },
  {
    title: "Healthcare Operations Chatbot",
    company: "King Fahad Armed Forces Hospital",
    description: "An internal AI-powered chatbot developed during my internship at King Fahad Armed Forces Hospital to support guesting and housing operations. The project focused on automating access to booking records and operational information, reducing manual reporting effort and improving workflow efficiency by providing quick and reliable responses for internal users.",
    tech: ["AI Chatbot", "Healthcare", "Automation", "Internal Systems", "Workflow Optimization"],
    color: "from-green-500 to-teal-500",
    logo: "/images/King Fahad Armed Forces Hospital.jfif",
  },
  {
    title: "Local Content AI Assistant",
    company: "National Center for Meteorology",
    description: "This project is an AI-powered assistant that supports understanding and compliance with Saudi local content regulations by providing clear and accurate Arabic responses related to local content requirements, pricing preference mechanisms, and government procurement rules, using a specialized large language model within a scalable web-based architecture to help government entities, contractors, and suppliers make informed and efficient decisions.",
    tech: ["LLM", "Arabic NLP", "Compliance", "Government Procurement", "Web Architecture"],
    color: "from-purple-500 to-pink-500",
    logo: "/images/LC.jpg",
  },
  {
    title: "TechProposal",
    company: "InspiraCore",
    description: "The project focuses on creating an automated solution that helps prepare official government technical proposals in a clear, structured, and professional manner. It takes project requirements and special conditions as input and produces a complete, well-organized technical document aligned with formal government standards. The solution aims to save time, improve consistency, and ensure high-quality documentation for proposal preparation.",
    tech: ["Document Automation", "Government Standards", "AI Generation", "Proposal Management", "Quality Assurance"],
    color: "from-orange-500 to-red-500",
    logo: "/images/InspiraCore company.png",
  },
  {
    title: "PCB Component Detection System",
    company: "Company Project",
    description: "This project uses Artificial Intelligence (AI) to automatically detect electronic components on Printed Circuit Boards (PCBs) from images. The system analyzes a PCB image and identifies the location of each component, recognizes the type of component (such as capacitors, resistors, and ICs), and counts how many components of each type are present.",
    tech: ["Computer Vision", "Object Detection", "Deep Learning", "Image Processing", "Electronics"],
    color: "from-indigo-500 to-blue-500",
    logo: "/images/PCB Component Detection System.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
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
            <span className="glow-text">Projects</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="project-card group relative overflow-hidden h-full flex flex-col"
                whileHover={{ y: -5 }}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Header with Logo */}
                  <div className="flex items-start gap-4 mb-4">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                      <div className="relative flex items-center justify-center" style={{ 
                        width: index === 5 ? '100px' : '60px', 
                        height: index === 5 ? '100px' : '60px' 
                      }}>
                        <Image
                          src={project.logo}
                          alt={project.company}
                          width={index === 5 ? 100 : 60}
                          height={index === 5 ? 100 : 60}
                          className="object-contain"
                          style={{ 
                            maxWidth: index === 5 ? '100px' : '60px', 
                            maxHeight: index === 5 ? '100px' : '60px' 
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Title and Company */}
                    <div className="flex-grow">
                      <h3 className="text-xl font-orbitron font-bold mb-1">{project.title}</h3>
                      <p className="text-palette-dustyBlue/60 text-sm font-semibold">{project.company}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-black mb-4 flex-grow text-sm leading-relaxed">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-palette-dustyBlue/30 border border-palette-mint/30 text-palette-dustyBlue"
                      >
                        {tech}
                      </span>
                    ))}
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
