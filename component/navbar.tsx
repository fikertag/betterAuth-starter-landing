"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const sections = ["features", "tech", "contact"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Wait for the DOM to be fully loaded
    const handleLoad = () => {
      console.log("DOM fully loaded, initializing observer...");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            console.log(`Entry: ${entry.target.id}`, {
              isIntersecting: entry.isIntersecting,
              ratio: entry.intersectionRatio,
            });

            if (entry.isIntersecting) {
              console.log("Setting active section:", entry.target.id);
              setActiveSection(entry.target.id);
            }
          });
        },
        {
          rootMargin: "-30% 0px -30% 0px",
          threshold: 0.2,
        }
      );

      // Verify and observe each section
      sections.forEach((id) => {
        const element = document.getElementById(id);
        console.log(`Checking for #${id}:`, element);

        if (element) {
          observer.observe(element);
          console.log(`Observing #${id}`);
        } else {
          console.error(`Element #${id} not found!`);
        }
      });

      return () => {
        sections.forEach((id) => {
          const element = document.getElementById(id);
          if (element) observer.unobserve(element);
        });
      };
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button */}

          {/* Brand logo/name */}
          <div className="flex items-center space-x-2">
            <Link
              href="/"
              className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              BetterAuth starter
            </Link>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink href="#features" active={activeSection === "features"}>
              Features
            </NavLink>
            <NavLink href="#tech" active={activeSection === "tech"}>
              Tech Stack
            </NavLink>
            <NavLink href="#contact" active={activeSection === "contact"}>
              Get source code
            </NavLink>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="https://betterauth-mongodb-starter.vercel.app"
              target="_blank"
              className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Live Demo
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="px-2 pt-2 pb-4 space-y-2">
            <MobileNavLink
              href="#features"
              onClick={() => setIsOpen(false)}
              active={activeSection === "features"}
            >
              Features
            </MobileNavLink>
            <MobileNavLink
              href="#tech"
              onClick={() => setIsOpen(false)}
              active={activeSection === "tech"}
            >
              Tech Stack
            </MobileNavLink>
            <MobileNavLink
              href="#contact"
              onClick={() => setIsOpen(false)}
              active={activeSection === "contact"}
            >
              Get source code
            </MobileNavLink>

            <div className="mt-3">
              <Link
                href="https://betterauth-mongodb-starter.vercel.app"
                target="_blank"
                className="flex items-center justify-center px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
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
  active,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`text-sm font-medium px-3 py-2 rounded-md transition-colors duration-200 relative group ${
        active
          ? "text-blue-600 dark:text-blue-400"
          : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
      }`}
    >
      {children}
      <span
        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 ${
          active ? "w-3/4" : "w-0 group-hover:w-3/4"
        }`}
      ></span>
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
  active,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
        active
          ? "text-blue-600 dark:text-blue-400"
          : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
      }`}
    >
      {children}
    </Link>
  );
}
