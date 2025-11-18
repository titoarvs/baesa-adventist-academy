"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    "Announcement",
    "About",
    "Academics",
    "Admission",
    "Alumni",
  ];

  return (
    <nav className="bg-[#00264d] px-4 md:px-8 py-4 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-yellow-400 border-2 border-yellow-500 flex items-center justify-center flex-shrink-0">
          <svg
            className="w-8 h-8 text-blue-900"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-5.5-3.4V7z" />
          </svg>
        </div>
        <span className="text-white font-bold text-sm md:text-lg">
          Baesa Adventist Academy
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-white font-semibold hover:text-yellow-400 transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white p-2"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-10 left-70 right-0 mt-10 bg-[#00264d] md:hidden ">
          <div className="flex flex-col px-4 py-4 gap-4 text-center">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white font-semibold hover:bg-blue-500 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
