"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  { title: "CDMP® – Associate", issuer: "DAMA International®" },
  { title: "Artificial Intelligence and Applications", issuer: "Huawei" },
  { title: "LLMs Practitioner", issuer: "SDAIA | سدايا" },
  { title: "INE/SDA Jr Data Scientist", issuer: "INE (Saudi Digital Academy)" },
  { title: "Guided Learning Experience in Data Analytics", issuer: "IBM SkillsBuild" },
  { title: "Data Visualization", issuer: "Coursera" },
  { title: "Ask Questions to Make Data-Driven Decisions", issuer: "Google" },
  { title: "Prepare Data for Exploration", issuer: "Google" },
  { title: "Process Data from Dirty to Clean", issuer: "Google" },
  { title: "Analyze Data to Answer Questions", issuer: "Google" },
  { title: "Supervised Machine Learning: Regression and Classification", issuer: "DeepLearning.AI" },
  { title: "Python for Data Science, AI & Development", issuer: "IBM" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-5 rounded-xl bg-pink-50/80 border-2 border-pink-200/50 backdrop-blur-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-200/50 flex items-center justify-center">
                    <Award className="w-5 h-5 text-pink-600" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h3 className="font-bold text-gray-800 text-sm mb-1 leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-pink-600 font-medium">
                      {cert.issuer}
                    </p>
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