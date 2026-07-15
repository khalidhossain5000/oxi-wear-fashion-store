"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { usePathname } from "next/navigation";
import Link from "next/link";
import CartButton from "../Button/CartButton";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileNav";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Cart", href: "/cart" },
];

const NavBar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
 
  //sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`bg-foreground py-4 px-2 md:px-4 xl:px-0 fixed top-0 left-0 right-0 z-400 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <section className="max-w-7xl mx-auto flex items-center justify-between">
        {/* logo */}
        <div>
          {/* <Image src={"/new.png"} alt="website main logo" width={150} height={50} className="h-"/> */}
          <h2 className="text-3xl font-bold bg-linear-to-r from-accent to-text-primary dark:to-text-primary bg-clip-text text-transparent">
            Nokshi
          </h2>
        </div>
        {/* nav items */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm text-text-primary">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={`k${i}`}
                href={link.href}
                className={`relative z-600 text-text-primary hover:text-gray-600 font-semibold transition-colors text-xl capitalize ${isActive ? "bg-[#29eddd5a]  dark:bg-accent-soft px-4 py-2 rounded-full" : ""}`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        {/* cta and cart icon */}
        <div className="flex items-center gap-4 lg:gap-2">
          <ThemeToggle />
          <CartButton />
          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-accent transition-colors focus:outline-none"
            >
              <Menu size={25} />
            </button>
          </div>
        </div>
      </section>
      {/* Mobile Drawer Component */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </header>
  );
};

export default NavBar;
