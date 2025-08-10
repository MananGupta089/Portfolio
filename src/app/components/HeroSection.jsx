"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d0d0d]">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <span className="text-lg lg:text-xl text-gray-300 font-medium tracking-wide">
                Hello, I'm
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-6xl lg:text-8xl xl:text-9xl font-bold mb-8 text-white leading-none tracking-tight"
            >
              Manan
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Gupta
              </span>
            </motion.h1>

            {/* Animated Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-10"
            >
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-200 mb-6">
                I'm a{" "}
                <span className="text-white">
                  <TypeAnimation
                    sequence={[
                      "Game Developer",
                      2500,
                      "Web Developer",
                      2500,
                      "Full-Stack Engineer",
                      2500,
                      "Creative Technologist",
                      2500,
                    ]}
                    wrapper="span"
                    speed={40}
                    repeat={Infinity}
                    className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                  />
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg lg:text-xl text-gray-400 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Passionate about creating immersive gaming experiences and cutting-edge web applications. 
              I blend creativity with technical expertise to build engaging digital worlds and powerful web solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            >
              <Link href="/#contact">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Let's Build Together
                </motion.button>
              </Link>
              <Link href="/#projects">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-semibold rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  View My Work
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex justify-center lg:justify-start gap-12 mt-16"
            >
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">25+</div>
                <div className="text-gray-400 text-sm font-medium">Games & Apps</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">4+</div>
                <div className="text-gray-400 text-sm font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-400 text-sm font-medium">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl scale-110"></div>
              
              {/* Main Image Container */}
              <div className="relative rounded-3xl p-8 backdrop-blur-sm bg-white/5 border border-white/10 shadow-2xl">
                <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden relative">
                  <Image
                    src="/images/hero-image.png"
                    alt="Manan Gupta - Game & Web Developer"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Subtle Floating Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-60"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
