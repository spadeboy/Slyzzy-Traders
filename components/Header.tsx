"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[200] bg-[#FDFBF5]">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Language Toggle */}
        <button className="text-[#B23A28] font-semibold text-sm tracking-wider">
          EN
        </button>

        {/* Centered Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="cursor-pointer">
            <h1 className="font-serif text-2xl font-bold text-[#B23A28] tracking-tight">
              SLYZZY TRADERS
            </h1>
          </Link>
        </div>

        {/* Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 rounded-full border-2 border-[#B23A28] flex items-center justify-center text-[#B23A28] font-semibold text-sm tracking-wider hover:bg-[#B23A28] hover:text-white transition-colors"
        >
          MENU
        </button>
      </div>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#FDFBF5] z-[300] flex items-center justify-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full border-2 border-[#B23A28] flex items-center justify-center text-[#B23A28] font-semibold text-sm tracking-wider hover:bg-[#B23A28] hover:text-white transition-colors"
            >
              CLOSE
            </button>
            <nav className="flex flex-col items-center space-y-8">
              <Link
                href="/"
                className="font-serif text-5xl text-[#B23A28] hover:text-[#8B2E1F] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/catalog"
                className="font-serif text-5xl text-[#B23A28] hover:text-[#8B2E1F] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Catalog
              </Link>
              <Link
                href="/contact"
                className="font-serif text-5xl text-[#B23A28] hover:text-[#8B2E1F] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
