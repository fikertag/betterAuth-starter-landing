"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
          {/* Brand name - aligned right */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-gray-900 dark:text-white"
            >
              BetterAuth Starter
            </Link>
          </div>
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#security">Security</NavLink>
            <NavLink href="#demo">Demo</NavLink>
            <NavLink href="#tech">Tech Stack</NavLink>
          </div>

          {/* Demo button - aligned right */}
          <div className="hidden md:block ml-4">
            <Link
              href="https://betterauth-mongodb-starter.vercel.app"
              className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Live Demo
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink href="#features" onClick={() => setIsOpen(false)}>
              Features
            </MobileNavLink>
            <MobileNavLink href="#security" onClick={() => setIsOpen(false)}>
              Security
            </MobileNavLink>
            <MobileNavLink href="#demo" onClick={() => setIsOpen(false)}>
              Demo
            </MobileNavLink>
            <MobileNavLink href="#tech" onClick={() => setIsOpen(false)}>
              Tech Stack
            </MobileNavLink>
            <div className="mt-4">
              <Link
                href="https://betterauth-mongodb-starter.vercel.app"
                className="block w-full px-3 py-2 rounded-md text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium"
                onClick={() => setIsOpen(false)}
              >
                Live Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
    >
      {children}
    </Link>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}
