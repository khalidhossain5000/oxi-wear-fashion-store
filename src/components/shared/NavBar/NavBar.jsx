"use client";
import Image from "next/image";
import React from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { usePathname } from "next/navigation";
import Link from "next/link";
import CartButton from "../Button/CartButton";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Cart", href: "/cart" },
];

const NavBar = () => {
  const pathname = usePathname();
  return (
    <header className="bg-foreground py-4">
      <section className="max-w-7xl mx-auto flex items-center justify-between">
        {/* logo */}
        <div>
          {/* <Image src={"/new.png"} alt="website main logo" width={150} height={50} className="h-"/> */}
          <h2 className="text-2xl font-bold text-accent">OxiWear</h2>
        </div>
        {/* nav items */}
        <nav className="hidden xl:flex items-center space-x-6 text-sm text-text-primary">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={`k${i}`}
                href={link.href}
                className={`text-text-primary hover:text-gray-600 font-semibold transition-colors text-xl capitalize ${isActive ? "bg-accent-soft px-4 py-2 rounded-full" : ""}`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        {/* cta and cart icon */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <CartButton/>
        </div>
      </section>
    </header>
  );
};

export default NavBar;
