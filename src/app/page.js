"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const linkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-gradient-to-br from-purple-100 to-indigo-50">
      {/* Navbar */}
      <header className="bg-white/70 backdrop-blur-md fixed w-full z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-extrabold text-indigo-600 tracking-tight"
          >
            ShopMate
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="relative text-gray-700 font-medium group"
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 * index }}
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-indigo-700 transition-all"
            >
              Cart
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ rotate: menuOpen ? 45 : 0 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"}
                />
              </motion.svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden md:hidden bg-white shadow-lg"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block px-6 py-4 text-gray-700 hover:text-indigo-600 transition-all"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * index }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="m-6 bg-indigo-600 text-white w-[calc(100%-3rem)] py-2 rounded-lg shadow-lg hover:bg-indigo-700 transition-all"
              >
                Cart
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
<main className="pt-28 max-w-7xl mx-auto px-6 lg:px-20 space-y-20">
  {["Category A", "Category B", "Category C"].map((cat, idx) => (
    <motion.div
      key={cat}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: idx * 0.2 }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold text-gray-800">{cat}</h2>

      {/* Horizontal swipe container */}
      <motion.div
        className="flex space-x-6 overflow-hidden relative"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: -1200, right: 0 }} // adjust based on number of cards
          dragElastic={0.2}
          className="flex space-x-6"
        >
{Array.from({ length: 10 }).map((_, i) => (
  <motion.div
    key={i}
    whileHover={{ scale: 1.05, y: -5 }}
    whileTap={{ scale: 1.15 }}
    transition={{ type: "spring", stiffness: 150, damping: 12 }}
    className="relative bg-white rounded-xl shadow-2xl cursor-pointer min-w-[250px] flex-shrink-0"
  >
    <img
      src={`https://via.placeholder.com/300x200.png?text=${cat}+${i + 1}`}
      alt={`${cat} ${i + 1}`}
      className="w-full h-40 object-cover rounded-t-xl"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{cat} Product {i + 1}</h3>
      <p className="text-gray-600 mt-1">Stylish animated card.</p>
    </div>
  </motion.div>
))}


        </motion.div>
      </motion.div>
    </motion.div>
  ))}
</main>



  
    </div>
  );
}
