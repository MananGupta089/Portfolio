"use client";
import React from "react";
import { motion } from "framer-motion";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(name)}
      className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
        isSelected
          ? "glass border border-white/20 text-white shadow-lg bg-gradient-to-r from-primary-400/20 to-secondary-500/20"
          : "text-white/60 hover:text-white/80 hover:bg-white/5 border border-transparent hover:border-white/20"
      }`}
    >
      {name}
    </motion.button>
  );
};

export default ProjectTag;
