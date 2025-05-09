"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              MyLogo
            </Link>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
            <Link href="/login" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Login
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? (
                <span className="text-2xl">✖</span>
              ) : (
                <span className="text-2xl">☰</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-white">
          <Link href="/" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
            Home
          </Link>
          <Link href="/about" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
            About
          </Link>
          <Link href="/services" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
            Services
          </Link>
          <Link href="/contact" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
