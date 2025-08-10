"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" },
    ],
    services: [
      { name: "Game Development", href: "#" },
      { name: "Web Development", href: "#" },
      { name: "VR/AR Development", href: "#" },
      { name: "Mobile Apps", href: "#" },
    ],
    social: [
      { name: "GitHub", href: "https://github.com", icon: GithubIcon },
      { name: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon },
    ],
  };

  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-transparent to-dark-950/50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-5"></div>
      
      <div className="relative container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">MG</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Manan Gupta</h3>
              </div>
            </Link>
            <p className="text-white/70 mb-6 leading-relaxed">
              Crafting immersive gaming experiences and cutting-edge web applications. 
              Let's build something extraordinary together.
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <Image src={social.icon} alt={social.name} className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-3">
              <p className="text-white/70">
                <span className="text-white">Email:</span><br />
                manan@gupta.dev
              </p>
              <p className="text-white/70">
                <span className="text-white">Location:</span><br />
                San Francisco, CA
              </p>
              <p className="text-white/70">
                <span className="text-white">Available:</span><br />
                For new projects
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © {currentYear} Manan Gupta. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 glass rounded-full flex items-center justify-center border border-white/20 hover:border-white/40 transition-all duration-300 z-50"
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer;
