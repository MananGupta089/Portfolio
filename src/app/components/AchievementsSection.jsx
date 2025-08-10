"use client";
import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Games",
    value: "15",
    postfix: "+",
    icon: "🎮",
    description: "Games developed",
  },
  {
    prefix: "~",
    metric: "Downloads",
    value: "50,000",
    icon: "📱",
    description: "App downloads",
  },
  {
    metric: "Awards",
    value: "8",
    icon: "🏆",
    description: "Industry recognition",
  },
  {
    metric: "Years",
    value: "4",
    icon: "⏰",
    description: "Of experience",
  },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="text-center mb-16"
      >
        <motion.h2
          variants={cardVariants}
          className="text-4xl lg:text-5xl font-bold text-white mb-6"
        >
          <span className="text-gradient">Achievements</span> That Matter
        </motion.h2>
        <motion.p
          variants={cardVariants}
          className="text-xl text-white/70 max-w-3xl mx-auto"
        >
          Numbers that tell the story of dedication, innovation, and success in game development and web engineering
        </motion.p>
      </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {achievementsList.map((achievement, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            className="group"
          >
            <div className="glass rounded-2xl p-8 text-center border border-white/10 hover:border-white/20 transition-all duration-300 card-hover">
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {achievement.icon}
              </div>
              
              {/* Number */}
              <div className="mb-2">
                <h3 className="text-3xl lg:text-4xl font-bold text-gradient flex items-center justify-center">
                  {achievement.prefix}
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(achievement.value)}
                    locale="en-US"
                    className="text-gradient"
                    configs={(_, index) => {
                      return {
                        mass: 1,
                        friction: 100,
                        tensions: 140 * (index + 1),
                      };
                    }}
                  />
                  {achievement.postfix}
                </h3>
              </div>
              
              {/* Metric */}
              <h4 className="text-xl font-semibold text-white mb-2">
                {achievement.metric}
              </h4>
              
              {/* Description */}
              <p className="text-white/60 text-sm">
                {achievement.description}
              </p>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400/10 to-secondary-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Stats */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-16 text-center"
      >
        <div className="glass rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your Next Project?
          </h3>
          <p className="text-white/70 mb-6">
            Let's create something amazing together - whether it's a game or web application
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-premium"
          >
            Get Started Today
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default AchievementsSection;
