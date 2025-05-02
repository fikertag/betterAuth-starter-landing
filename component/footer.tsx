"use client";
import Link from "next/link";
import {
  Mail,
  Twitter,
  Github,
  MapPin,
  Shield,
  HelpCircle,
  Code,
  Zap,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
              Product
            </h3>
            <nav className="space-y-2">
              <FooterLink href="/features">Features</FooterLink>
              <FooterLink href="/security">Security</FooterLink>
              <FooterLink href="/pricing">Pricing</FooterLink>
              <FooterLink href="/demo">Demo</FooterLink>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Code className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
              Resources
            </h3>
            <nav className="space-y-2">
              <FooterLink href="/docs">Documentation</FooterLink>
              <FooterLink href="/guides">Guides</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/support">Support</FooterLink>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <HelpCircle className="w-5 h-5 mr-2 text-green-600 dark:text-green-400" />
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-start text-gray-600 dark:text-gray-300">
                <Mail className="w-5 h-5 mr-2 mt-0.5 text-blue-600 dark:text-blue-400" />
                <span>hello@betterauth.com</span>
              </div>
              <div className="flex items-start text-gray-600 dark:text-gray-300">
                <Twitter className="w-5 h-5 mr-2 mt-0.5 text-blue-400 dark:text-blue-300" />
                <span>@BetterAuth</span>
              </div>
              <div className="flex items-start text-gray-600 dark:text-gray-300">
                <Github className="w-5 h-5 mr-2 mt-0.5 text-gray-800 dark:text-gray-200" />
                <span>github.com/betterauth</span>
              </div>
              <div className="flex items-start text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-red-500 dark:text-red-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-amber-600 dark:text-amber-400" />
              Company
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The complete authentication solution for modern applications.
            </p>
            <div className="text-gray-500 dark:text-gray-400 text-sm">
              <p>© {new Date().getFullYear()} BetterAuth Inc.</p>
              <p className="mt-1">All rights reserved.</p>
              <div className="mt-4 space-x-4">
                <FooterLink href="/privacy">Privacy</FooterLink>
                <FooterLink href="/terms">Terms</FooterLink>
                <FooterLink href="/cookies">Cookies</FooterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 block"
    >
      {children}
    </Link>
  );
}
