import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Mail, MapPin, Phone } from "lucide-react";

import Link from "next/link";
import Logo from "../Logo/Logo";
const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Cart", href: "/cart" },
];

const socials = [
  { icon: FaFacebookF, href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaXTwitter, href: "#" },
  { icon: FaLinkedinIn, href: "#" },
];
const contact = [
  {
    title: "Contact Us",
    address: "T. +929 333 9296",
    email: "contact@nokshi.com",
  },
];
const Footer = () => {
  return (
    <footer className="relative bg-linear-to-br from-accent-soft via-muted-surface to-background  py-6 m-3 shadow-xl rounded-2xl border-.5 border-teal-500 shadow-slate-200">
      <div className=" h-1 w-full bg-linear-to-r from-acent via-accent-soft to-transparent" />

      <div className="flex flex-col lg:flex-row justify-between flex-wrap gap-6 text-center max-w-7xl mx-auto py-14">
        {/* quick links */}
        <div className="">
          <h3 className="mb-6 text-xl xl:text-2xl lg:font-bold font-semibold text-text-primary font-sora">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm md:text-lg font-manrope text-muted-text transition-all duration-300 hover:translate-x-1 hover:text-accent"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* logo and content */}
        <div className="flex flex-col items-center gap-4 justify-between">
          <Logo />
              <p className="max-w-sm leading-7 text-muted-text text-center mx-auto font-manrope">
              Nokshi is a modern fashion destination offering timeless
              styles, premium fabrics, and everyday elegance for every
              wardrobe.
            </p>
          <div className="flex items-center flex-wrap">
          {socials.map((social, index) => {
            const Icon = social.icon;

            return (
              <a
                key={index}
                href={social.href}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-accent-soft text-text transition-all duration-300 hover:-translate-y-1 hover:bg-muted-surface hover:text-background"
              >
                <Icon size={18} />
              </a>
            );
          })}
          </div>
        </div>

        {/* contact */}
        <div>
          {contact.map((c, i) => (
            <div key={i} className="">
              <h2  className="mb-6 text-xl xl:text-2xl lg:font-bold font-semibold text-text-primary font-sora">{c.title}</h2>
              <h4 className="text-sm text-text-primary py-1 lg:text-lg">{c.address}</h4>
              <h4 className="text-sm text-text-primary py-1 lg:text-lg">{c.email}</h4>
            </div>
          ))}
        </div>
      </div>
      {/* copyrights */}
      <div className="border-t border-t-slate-200">
        <div className="max-w-7xl mx-auto pt-4">
          <p className="text-lg text-text-primary font-manrope text-center font-medium">
            &copy;2026 <span className="font-manrope bg-linear-to-r from-teal-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent font-bold">
  Nokshi-Fashion
</span> All
            Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
