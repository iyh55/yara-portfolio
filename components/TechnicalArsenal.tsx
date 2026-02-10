"use client";

import { motion } from "framer-motion";
import { Code, Cpu, Eye, Zap, Wrench, Database } from "lucide-react";

const skills = [
  {
    category: "AI & ML",
    icon: <Cpu className="w-6 h-6" />,
    items: ["Python", "TensorFlow", "PyTorch", "Machine Learning", "Statistics", "Deep Learning"],
  },
  {
    category: "Data Science",
    icon: <Database className="w-6 h-6" />,
    items: ["Data Analysis", "Pandas", "NumPy", "Power BI", "SQL", "Data Visualization"],
  },
  {
    category: "Computer Vision",
    icon: <Eye className="w-6 h-6" />,
    items: ["OpenCV", "Image Processing", "Object Detection", "CNN", "YOLO", "NLP"],
  },
  {
    category: "Development",
    icon: <Code className="w-6 h-6" />,
    items: ["Python", "JavaScript", "React", "Next.js", "Flask", "FastAPI"],
  },
  {
    category: "Tools & Frameworks",
    icon: <Wrench className="w-6 h-6" />,
    items: ["Git", "Docker", "Jupyter", "Scikit-learn", "Keras", "AWS"],
  },
  {
    category: "Analytics",
    icon: <Zap className="w-6 h-6" />,
    items: ["Statistical Analysis", "A/B Testing", "Predictive Models", "Time Series", "NLP", "Optimization"],
  },
];

export default function TechnicalArsenal() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-text">Technical Arsenal</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                className="card-glow"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-palette-mint">{skill.icon}</div>
                  <h4 className="text-xl font-orbitron font-semibold">{skill.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-xs rounded-full bg-palette-dustyBlue/30 border border-palette-mint/30 text-palette-dustyBlue"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
