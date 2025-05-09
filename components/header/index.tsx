"use client";

import { Home, Info, Mail, Menu, Music, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { name: "Home", icon: Home, href: "/" },
    { name: "Music", icon: Music, href: "/music" },
    { name: "About", icon: Info, href: "/about" },
    { name: "Contact", icon: Mail, href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "tween",
        duration: 0.3,
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const menuItemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
      transition: {
        type: "tween",
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  // Define text color based on scroll position
  const textColor = scrolled ? "text-black" : "text-white";
  const navTextColor = scrolled ? "text-gray-800" : "text-gray-400";
  const navTextActiveColor = scrolled ? "text-black" : "text-white";

  return (
    <motion.header
      className="fixed w-full top-0 left-0 z-40"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="container mx-auto px-2 md:px-4 py-4">
        <div className="relative flex justify-between items-center">
          {/* Glassmorphic Background */}
          <motion.div
            className={`absolute inset-0 ${
              scrolled ? "bg-white/90 backdrop-blur-xl shadow-md" : "bg-transparent"
            } rounded-2xl transition-all duration-300 -z-10`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Logo */}
          <motion.div
            className={`${textColor} text-2xl font-bold z-50 relative flex items-center gap-2 transition-colors duration-300`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href="/" className="flex items-center gap-2">
              <Music className="w-8 h-8 text-[#ff930f]" />
              KARTE
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block z-50">
            <motion.ul
              className={`flex space-x-6 ${
                scrolled ? "bg-white/50" : "bg-white/15"
              } backdrop-blur-lg rounded-full px-6 py-3 border ${
                scrolled ? "border-gray-200" : "border-white/10"
              } transition-all duration-300`}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delayChildren: 0.2,
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {navLinks.map((item) => (
                <motion.li
                  key={item.name}
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { type: "spring", stiffness: 300 },
                    },
                  }}
                >
                  <Link
                    href={item.href}
                    className={`hover:text-blue-300 transition-colors relative 
                    flex items-center gap-2 group ${
                      pathname === item.href ? navTextActiveColor : navTextColor
                    }`}
                  >
                    <item.icon
                      className={`w-5 h-5 transition-colors ${
                        pathname === item.href ? `${navTextActiveColor}/70` : `${navTextColor}/70`
                      } group-hover:text-blue-300`}
                    />
                    {item.name}
                    <span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 
                    transition-all group-hover:w-full"
                    />
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <motion.button
            className={`md:hidden ${textColor} z-50 relative transition-colors duration-300`}
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X size={32} />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu size={32} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Navigation Overlay */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="fixed inset-0 bg-black/80 backdrop-blur-2xl z-40 md:hidden"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={mobileMenuVariants}
              >
                <motion.nav
                  className="flex flex-col items-center justify-center h-full space-y-8"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={mobileMenuVariants}
                >
                  {navLinks.map((item) => (
                    <motion.div key={item.name} variants={menuItemVariants}>
                      <Link
                        href={item.href}
                        className="text-3xl text-white hover:text-blue-300 transition-colors 
                        relative group flex items-center gap-4"
                        onClick={toggleMenu}
                      >
                        <item.icon className="w-8 h-8 text-white/70 group-hover:text-blue-300 transition-colors" />
                        {item.name}
                        <span
                          className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 
                        transition-all group-hover:w-full"
                        />
                      </Link>
                    </motion.div>
                  ))}
                </motion.nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}
