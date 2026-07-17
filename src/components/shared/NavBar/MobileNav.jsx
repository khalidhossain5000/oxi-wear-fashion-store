"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

const MobileMenu = ({ isOpen, onClose, navLinks }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-90000000000000050 md:hidden border-none"
          />

          {/* Slide Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-background-elevated border-l  p-6 flex flex-col md:hidden shadow-2xl border-none z-90000000000000050"
          >
            {/* Close Button */}
            <div className="flex justify-end mb-10">
              <button
                onClick={onClose}
                className="text-foreground-muted hover:text-primary transition-colors"
              >
                <X size={30} />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col space-y-6 grow">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;

                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link
                      href={link.href}
                      onClick={(event) => {
                        onNavClick(event, link.href);
                        onClose();
                      }}
                      className={`block font-special text-2xl transition-colors ${
                        isActive ? "text-accent" : "text-text-primary "
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
