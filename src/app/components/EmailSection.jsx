"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSONdata,
      });

      if (response.status === 200) {
        setEmailSubmitted(true);
        e.target.reset();
      }
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: "Email",
      value: "manan@gupta.dev",
      link: "mailto:manan@gupta.dev",
    },
    {
      icon: PhoneIcon,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPinIcon,
      title: "Location",
      value: "San Francisco, CA",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Ready to bring your game or web project to life? Let's discuss your next project and create something amazing together.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Get In Touch
            </h3>
            <p className="text-white/70 leading-relaxed mb-8">
              I'm always open to discussing new game development projects, web applications, or opportunities to be part of your creative vision. Let's make something extraordinary together!
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="flex items-center space-x-4"
              >
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center border border-white/20">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium">{info.title}</h4>
                  <a
                    href={info.link}
                    className="text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {info.value}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 glass rounded-xl flex items-center justify-center border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <Image src={GithubIcon} alt="Github" className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 glass rounded-xl flex items-center justify-center border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <Image src={LinkedinIcon} alt="LinkedIn" className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="glass rounded-2xl p-8 border border-white/10">
            {emailSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-white/70">Thank you for reaching out. I'll get back to you soon!</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setEmailSubmitted(false)}
                  className="mt-4 btn-outline"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 glass rounded-xl border border-white/20 focus:border-white/40 focus:outline-none text-white placeholder-white/50 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 glass rounded-xl border border-white/20 focus:border-white/40 focus:outline-none text-white placeholder-white/50 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 glass rounded-xl border border-white/20 focus:border-white/40 focus:outline-none text-white placeholder-white/50 transition-all duration-300 resize-none"
                    placeholder="Tell me about your game or web project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-premium py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailSection;
