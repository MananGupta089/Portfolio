"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Cyberpunk Adventure Game",
    description: "A 3D action-adventure game built with Unity featuring advanced AI, dynamic lighting, and immersive storytelling. Includes multiplayer functionality and VR support.",
    image: "/images/projects/1.png",
    tag: ["All", "Games", "Unity"],
    gitUrl: "/",
    previewUrl: "/",
    technologies: ["Unity", "C#", "Blender", "VR/AR"],
    featured: true,
  },
  {
    id: 2,
    title: "E-Commerce Gaming Platform",
    description: "Full-stack web platform for gaming merchandise with real-time inventory, user authentication, and integrated payment processing using Stripe.",
    image: "/images/projects/2.png",
    tag: ["All", "Web", "Full-Stack"],
    gitUrl: "/",
    previewUrl: "/",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    featured: true,
  },
  {
    id: 3,
    title: "Mobile Puzzle Game",
    description: "Cross-platform mobile puzzle game with 50+ levels, social features, and monetization. Built with Unity and optimized for performance.",
    image: "/images/projects/3.png",
    tag: ["All", "Games", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
    technologies: ["Unity", "C#", "Firebase", "AdMob"],
    featured: false,
  },
  {
    id: 4,
    title: "Game Development Portfolio",
    description: "Interactive portfolio showcasing game development projects with 3D models, gameplay videos, and technical documentation.",
    image: "/images/projects/4.png",
    tag: ["All", "Web", "Portfolio"],
    gitUrl: "/",
    previewUrl: "/",
    technologies: ["Next.js", "Three.js", "Framer Motion", "WebGL"],
    featured: false,
  },
  {
    id: 5,
    title: "VR Escape Room",
    description: "Immersive VR escape room experience with physics-based puzzles, spatial audio, and multiplayer support for Meta Quest.",
    image: "/images/projects/5.png",
    tag: ["All", "Games", "VR/AR"],
    gitUrl: "/",
    previewUrl: "/",
    technologies: ["Unity", "C#", "VR SDK", "Oculus"],
    featured: false,
  },
  {
    id: 6,
    title: "Game Analytics Dashboard",
    description: "Real-time analytics platform for game developers with player behavior tracking, performance metrics, and predictive analytics.",
    image: "/images/projects/6.png",
    tag: ["All", "Web", "Analytics"],
    gitUrl: "/",
    previewUrl: "/",
    technologies: ["React", "Python", "TensorFlow", "AWS"],
    featured: false,
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

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
    <section id="projects" className="py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Explore my latest work showcasing innovative games and cutting-edge web applications
        </p>
      </motion.div>

      {/* Filter Tags */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {["All", "Games", "Web", "Mobile", "VR/AR", "Unity", "Full-Stack", "Analytics"].map((tagName) => (
          <ProjectTag
            key={tagName}
            onClick={handleTagChange}
            name={tagName}
            isSelected={tag === tagName}
          />
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            className="group"
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              technologies={project.technologies}
              featured={project.featured}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center mt-16"
      >
        <div className="glass rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Create Something Amazing?
          </h3>
          <p className="text-white/70 mb-6">
            Let's collaborate to bring your game or web project to life with cutting-edge technology
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-premium"
          >
            Start Your Project
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
