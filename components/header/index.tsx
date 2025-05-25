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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Close mobile menu when Escape key is pressed
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Home", icon: Home, href: "/" },
    { name: "Music", icon: Music, href: "/music" },
    { name: "About", icon: Info, href: "/about" },
    { name: "Contact", icon: Mail, href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Define text color variables based on scroll state
  const textColor = scrolled ? "text-gray-800" : "text-white";
  const navTextColor = scrolled ? "text-gray-600" : "text-white";
  const navTextActiveColor = scrolled ? "text-blue-600" : "text-blue-300";

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300 }
    },
  };

  return (
    <motion.header
      className="fixed w-full top-0 left-0 z-40"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      role="banner"
    >
      <div className="container mx-auto px-6 md:px-4 py-4">
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
            <Link href="/" className="flex items-center gap-2" aria-label="KARTE - Home">
              <Music className="w-8 h-8 text-[#ff930f]" aria-hidden="true" />
              <span className="font-bold tracking-wider">KARTE</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block z-50" aria-label="Main Navigation">
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
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    <item.icon
                      className={`w-5 h-5 transition-colors ${
                        pathname === item.href ? `${navTextActiveColor}/70` : `${navTextColor}/70`
                      } group-hover:text-blue-300`}
                      aria-hidden="true"
                    />
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-blue-300 
                      transition-all group-hover:w-full ${pathname === item.href ? 'w-full' : 'w-0'}`}
                      aria-hidden="true"
                    />
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <motion.button
            className={`md:hidden ${textColor} z-50 relative transition-colors duration-300 p-2`}
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
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
                  <X size={32} aria-hidden="true" />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu size={32} aria-hidden="true" />
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
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                aria-label="Mobile Navigation"
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
                        className={`text-3xl text-white hover:text-blue-300 transition-colors 
                        relative group flex items-center gap-4 ${pathname === item.href ? 'font-medium' : ''}`}
                        onClick={toggleMenu}
                        aria-current={pathname === item.href ? "page" : undefined}
                      >
                        <item.icon className="w-8 h-8 text-white/70 group-hover:text-blue-300 transition-colors" aria-hidden="true" />
                        {item.name}
                        <span
                          className={`absolute bottom-0 left-0 h-0.5 bg-blue-300 
                          transition-all group-hover:w-full ${pathname === item.href ? 'w-full' : 'w-0'}`}
                          aria-hidden="true"
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