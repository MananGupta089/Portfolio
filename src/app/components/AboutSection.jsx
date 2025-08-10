"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="glass rounded-lg p-4 border border-white/10">
            <h4 className="font-semibold text-white mb-2">Game Development</h4>
            <ul className="text-white/70 text-sm space-y-1">
              <li>• Unity & Unreal Engine</li>
              <li>• C# & C++</li>
              <li>• Game Design Principles</li>
              <li>• 3D Modeling & Animation</li>
            </ul>
          </div>
          <div className="glass rounded-lg p-4 border border-white/10">
            <h4 className="font-semibold text-white mb-2">Web Development</h4>
            <ul className="text-white/70 text-sm space-y-1">
              <li>• React & Next.js</li>
              <li>• Node.js & Express</li>
              <li>• TypeScript</li>
              <li>• MongoDB & PostgreSQL</li>
            </ul>
          </div>
          <div className="glass rounded-lg p-4 border border-white/10">
            <h4 className="font-semibold text-white mb-2">Tools & Platforms</h4>
            <ul className="text-white/70 text-sm space-y-1">
              <li>• Git & GitHub</li>
              <li>• Docker & AWS</li>
              <li>• Figma & Adobe Suite</li>
              <li>• Blender & Maya</li>
            </ul>
          </div>
          <div className="glass rounded-lg p-4 border border-white/10">
            <h4 className="font-semibold text-white mb-2">Specializations</h4>
            <ul className="text-white/70 text-sm space-y-1">
              <li>• VR/AR Development</li>
              <li>• Mobile Game Development</li>
              <li>• Real-time 3D Graphics</li>
              <li>• Game AI & Physics</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-6">
        <div className="glass rounded-lg p-6 border border-white/10">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Bachelor of Technology in Computer Science</h4>
              <p className="text-white/70">Game Development & Web Technologies</p>
            </div>
            <span className="text-sm text-white/50">2020-2024</span>
          </div>
          <p className="text-white/80">
            Specialized in game development, computer graphics, and full-stack web development. 
            Completed projects in Unity, Unreal Engine, and modern web frameworks.
          </p>
        </div>
        <div className="glass rounded-lg p-6 border border-white/10">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Game Development Certification</h4>
              <p className="text-white/70">Unity Technologies</p>
            </div>
            <span className="text-sm text-white/50">2023</span>
          </div>
          <p className="text-white/80">
            Certified Unity Developer with expertise in 3D game development, 
            scripting, and optimization techniques.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <div className="space-y-6">
        <div className="glass rounded-lg p-6 border border-white/10">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Senior Game Developer</h4>
              <p className="text-white/70">TechGaming Studios</p>
            </div>
            <span className="text-sm text-white/50">2022-Present</span>
          </div>
          <p className="text-white/80">
            Leading development of mobile and PC games using Unity. 
            Implemented advanced game mechanics, AI systems, and multiplayer features.
          </p>
        </div>
        <div className="glass rounded-lg p-6 border border-white/10">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Full-Stack Web Developer</h4>
              <p className="text-white/70">Digital Solutions Inc.</p>
            </div>
            <span className="text-sm text-white/50">2021-2022</span>
          </div>
          <p className="text-white/80">
            Developed responsive web applications using React, Node.js, and modern web technologies. 
            Created interactive dashboards and e-commerce platforms.
          </p>
        </div>
        <div className="glass rounded-lg p-6 border border-white/10">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Freelance Developer</h4>
              <p className="text-white/70">Independent Projects</p>
            </div>
            <span className="text-sm text-white/50">2020-Present</span>
          </div>
          <p className="text-white/80">
            Created custom games and web applications for clients worldwide. 
            Specialized in indie game development and startup web solutions.
          </p>
        </div>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="py-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-secondary-500/20 rounded-3xl blur-3xl"></div>
            
            {/* Image Container */}
            <div className="relative glass rounded-3xl p-8 border border-white/10 overflow-hidden">
              <Image 
                src="/images/about-image.png" 
                width={500} 
                height={500}
                alt="Manan Gupta - Game & Web Developer"
                className="rounded-2xl w-full h-auto"
              />
              
              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-full opacity-60"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-accent-400 to-primary-500 rounded-full opacity-60"
              />
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              I'm a passionate game developer and full-stack web engineer with over 4 years of experience 
              creating immersive digital experiences. My journey began with a fascination for interactive 
              storytelling and has evolved into expertise in both game development and web technologies.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              I specialize in Unity and Unreal Engine for game development, while also building robust 
              web applications using modern frameworks. My goal is to push the boundaries of what's 
              possible in both gaming and web experiences.
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap gap-4">
            {TAB_DATA.map((tabData) => (
              <TabButton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
              >
                {tabData.title}
              </TabButton>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="min-h-[300px]"
          >
            {TAB_DATA.find((t) => t.id === tab).content}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
