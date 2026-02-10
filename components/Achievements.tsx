"use client";

import { motion } from "framer-motion";
import { Trophy, Lightbulb, Rocket, Users } from "lucide-react";

const achievements = [
  {
    title: "Gravity Hackathon",
    organization: "lablab.ai",
    description: "Participated in an AI-focused hackathon, collaborating with a team to design and present an innovative solution under time constraints, strengthening problem-solving, teamwork, and rapid prototyping skills.",
    icon: Trophy,
    color: "from-green-300 to-emerald-400",
  },
  {
    title: "Hackathon Participant",
    organization: "lablab.ai",
    description: "Contributed to an AI-based project in a competitive hackathon environment, gaining hands-on experience in idea development, collaboration, and solution presentation.",
    icon: Users,
    color: "from-green-300 to-emerald-400",
  },
  {
    title: "Entrepreneurship & Innovation Program",
    organization: "University of Jeddah",
    description: "Participated in the Entrepreneurship and Innovation initiative as part of my graduation project, focusing on idea development, teamwork, and transforming concepts into practical solutions.",
    icon: Lightbulb,
    color: "from-green-300 to-emerald-400",
  },
  {
    title: "NASA Space Apps Challenge",
    organization: "NASA",
    description: "Participated in a global innovation challenge focused on solving real-world problems using open data, collaborating within a team to develop and present a solution under time constraints.",
    icon: Rocket,
    color: "from-green-300 to-emerald-400",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
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
            <span className="glow-text">Achievements & Hackathons</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#91C6BC' }}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {achievement.title}
                      </h3>
                      <p className="text-sm font-semibold" style={{ color: '#91C6BC' }}>
                        {achievement.organization}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {achievement.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
