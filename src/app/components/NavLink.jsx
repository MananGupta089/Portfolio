"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const NavLink = ({ href, title }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        className="relative px-3 py-2 text-white/80 hover:text-white font-medium transition-all duration-300 group"
      >
        {title}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-500 transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </motion.div>
  );
};

export default NavLink;
