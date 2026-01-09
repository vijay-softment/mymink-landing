"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Button from "./Button";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 backdrop-blur-sm bg-white/95">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-full px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo with Icon */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity group"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/images/icons.png"
                alt="my MINK logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
                priority
              />
            </motion.div>
            <span className="text-2xl font-bold text-text-black group-hover:text-primary-red transition-colors">
              my MINK
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link
              href="/"
              className={`text-sm transition-colors ${
                isActive("/")
                  ? "text-primary-red font-semibold"
                  : "text-text-darkGrey hover:text-primary-red"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-sm transition-colors ${
                isActive("/about")
                  ? "text-primary-red font-semibold"
                  : "text-text-darkGrey hover:text-primary-red"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/download"
              className={`text-sm transition-colors ${
                isActive("/download")
                  ? "text-primary-red font-semibold"
                  : "text-text-darkGrey hover:text-primary-red"
              }`}
            >
              Download
            </Link>
            <Button href="/download" className="ml-4">
              Download App
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button href="/download" size="sm">
              Download
            </Button>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
