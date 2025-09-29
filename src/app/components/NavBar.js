"use client"; // needed for client components in App Router
import { motion } from "framer-motion";
import Link from "next/link";

const navItems = ["Home", "Shop", "About", "Contact"];

export default function NavBar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-extrabold text-blue-600 cursor-pointer"
        >
          MyShop
        </motion.div>

        {/* Nav links */}
        <div className="flex space-x-6">
          {navItems.map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.1, color: "#2563eb" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href={`/#${item.toLowerCase()}`} className="text-gray-700 font-medium">
                {item}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
