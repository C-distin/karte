"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Music, Twitch, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/sonicwave",
      color: "text-pink-500 hover:text-pink-400",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/sonicwave",
      color: "text-blue-400 hover:text-blue-300",
    },
    {
      icon: Facebook,
      href: "https://facebook.com/sonicwave",
      color: "text-blue-600 hover:text-blue-500",
    },
    {
      icon: Twitch,
      href: "https://twitch.tv/sonicwave",
      color: "text-purple-500 hover:text-purple-400",
    },
    {
      icon: Youtube,
      href: "https://youtube.com/sonicwave",
      color: "text-red-500 hover:text-red-400",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "/home" },
    { name: "Music", href: "/music" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const musicPlatforms = [
    { name: "Spotify", href: "https://spotify.com/sonicwave" },
    { name: "Apple Music", href: "https://apple.com/sonicwave" },
    { name: "SoundCloud", href: "https://soundcloud.com/sonicwave" },
  ];

  return (
    <footer className="relative bg-black/80 text-white py-16 px-4">
      <motion.div
        className="container mx-auto grid md:grid-cols-4 gap-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Music className="w-8 h-8 text-blue-400" />
            <h3 className="text-2xl font-bold">KARTE</h3>
          </div>
          <p className="text-white/70 mb-4">
            Electronic music producer crafting sonic journeys that transcend boundaries.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} transition-colors`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-white/70 hover:text-white transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Music Platforms */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Listen Now</h4>
          <ul className="space-y-2">
            {musicPlatforms.map((platform) => (
              <li key={platform.name}>
                <Link href={platform.href} target="_blank" className="text-white/70 hover:text-white transition-colors">
                  {platform.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        className="text-center text-white/50 mt-8 pt-4 border-t border-white/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} KARTE. All Rights Reserved.
      </motion.div>
    </footer>
  );
}
