"use client";
import React from "react";
import { motion } from "framer-motion";

const TabButton = ({ active, selectTab, children }) => {
  return (
    <motion.button
      onClick={selectTab}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
        active
          ? "glass border border-white/20 text-white shadow-lg"
          : "text-white/60 hover:text-white/80 hover:bg-white/5"
      }`}
    >
      {children}
      {active && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-secondary-500/20 rounded-xl border border-white/20"
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default TabButton;
