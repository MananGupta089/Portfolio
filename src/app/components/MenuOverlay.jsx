"use client";
import React from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const MenuOverlay = ({ links }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="glass backdrop-blur-md border-t border-white/10"
    >
      <ul className="flex flex-col py-6 items-center space-y-4">
        {links.map((link, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <NavLink href={link.path} title={link.title} />
          </motion.li>
        ))}
        {/* Mobile CTA Button */}
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="mt-4"
        >
          <a
            href="/#contact"
            className="btn-premium text-sm px-6 py-2 inline-block"
          >
            Get In Touch
          </a>
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default MenuOverlay;
