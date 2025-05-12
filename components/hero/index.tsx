"use client";

import { motion } from "framer-motion";
import { Disc3, Headphones, MessageSquarePlus, Play } from "lucide-react";
import { unifraktur } from "@/components/fonts";
import Link from "next/link";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 300 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 overflow-hidden">
      {/* Gradient Background */}
      <motion.div
        //className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/50 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-1/4 left-0 w-72 h-72 bg-blue-600/30 rounded-full blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 0.5,
          rotate: 360,
        }}
        transition={{
          duration: 10,
          repeat: 99,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 0.5,
          rotate: -360,
        }}
        transition={{
          duration: 12,
          repeat: 99,
          repeatType: "reverse",
        }}
      />

      {/* Hero Content */}
      <motion.div
        className="relative z-20 text-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <motion.h1
            className={ `${unifraktur.className} text-6xl md:text-8xl font-bold mb-4 
            bg-gradient-to-r from-[#FF8A00] to-[#FFD700] bg-clip-text text-transparent` }
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            KARTE
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]">
            Electrifying soundscapes that transcend boundaries, mixing beats that move your soul
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex justify-center space-x-4 mt-8">
          <Link href="/music">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="flex items-center gap-2 bg-[#FFD700]/70 
            text-black px-6 py-3 rounded-full hover:bg-[#FF8A00]/80 
            transition-all shadow-lg"
            >
              <Play className="w-5 h-5 fill-white" />
              Listen Now
            </motion.button>
          </Link>

          <Link href="/contact">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="flex items-center gap-2 border-2 border-white/50 
            text-white px-6 py-3 rounded-full hover:bg-white/20 
            transition-all shadow-lg"
            >
              <MessageSquarePlus className="w-5 h-5" />
              Booking
            </motion.button>
          </Link>
        </motion.div>

        {/* Social Proof / Stats */}
        <motion.div variants={itemVariants} className="mt-16 flex justify-center space-x-8 text-white/70">
          <div className="flex items-center gap-2">
            <Disc3 className="w-6 h-6" />
            <span className="text-lg font-semibold">5+ Tracks</span>
          </div>
          <div className="flex items-center gap-2">
            <Headphones className="w-6 h-6" />
            <span className="text-lg font-semibold">2k+ Listeners</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
