"use client";
import React from "react";
import { CodeBracketIcon, EyeIcon, StarIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, technologies, featured }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative"
    >
      <div className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 card-hover">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${imgUrl})` }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
            <Link href={gitUrl}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 glass rounded-full flex items-center justify-center border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <CodeBracketIcon className="w-6 h-6 text-white" />
              </motion.div>
            </Link>
            <Link href={previewUrl}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 glass rounded-full flex items-center justify-center border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <EyeIcon className="w-6 h-6 text-white" />
              </motion.div>
            </Link>
          </div>

          {/* Featured Badge */}
          {featured && (
            <div className="absolute top-4 left-4">
              <div className="flex items-center gap-1 bg-gradient-to-r from-primary-400 to-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                <StarIcon className="w-4 h-4" />
                Featured
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
            {title}
          </h3>
          <p className="text-white/70 text-sm leading-relaxed mb-4">
            {description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies?.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full border border-white/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Link href={gitUrl} className="flex-1">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-2 px-4 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <CodeBracketIcon className="w-4 h-4" />
                Code
              </motion.button>
            </Link>
            <Link href={previewUrl} className="flex-1">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-2 px-4 bg-gradient-to-r from-primary-400 to-secondary-500 hover:from-primary-500 hover:to-secondary-600 text-white text-sm font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <EyeIcon className="w-4 h-4" />
                Live Demo
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-400/10 to-secondary-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
