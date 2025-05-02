"use client";
import Link from "next/link";
import {
  Mail,
  Twitter,
  Github,
  HelpCircle,
  Shield,
  MessageCircle,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <HelpCircle className="w-5 h-5 mr-2 text-green-600 dark:text-green-400" />
              Contact
            </h3>
            <div className="space-y-3">
              <ContactItem
                icon={
                  <Mail className="w-5 h-5 mr-2 mt-0.5 text-blue-600 dark:text-blue-400" />
                }
                label="hello@betterauth.com"
                href="mailto:hello@betterauth.com"
              />
              <ContactItem
                icon={
                  <Twitter className="w-5 h-5 mr-2 mt-0.5 text-blue-400 dark:text-blue-300" />
                }
                label="@BetterAuth"
                href="https://twitter.com/BetterAuth"
              />
              <ContactItem
                icon={
                  <Github className="w-5 h-5 mr-2 mt-0.5 text-gray-800 dark:text-gray-200" />
                }
                label="github.com/betterauth"
                href="https://github.com/betterauth"
              />
              <ContactItem
                icon={
                  <MessageCircle className="w-5 h-5 mr-2 mt-0.5 text-sky-600 dark:text-sky-400" />
                }
                label="Telegram"
                href="https://t.me/betterauth"
              />
              <ContactItem
                icon={
                  <MessageCircle className="w-5 h-5 mr-2 mt-0.5 text-indigo-600 dark:text-indigo-400" />
                }
                label="Discord"
                href="https://discord.gg/betterauth"
              />
              <ContactItem
                icon={
                  <Linkedin className="w-5 h-5 mr-2 mt-0.5 text-blue-700 dark:text-blue-500" />
                }
                label="LinkedIn"
                href="https://linkedin.com/company/betterauth"
              />
            </div>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-amber-600 dark:text-amber-400" />
              Company
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The complete authentication starting kit for modern applications.
            </p>
            <div className="text-gray-500 dark:text-gray-400 text-sm">
              <p>© {new Date().getFullYear()} fikiryilkal</p>
              <p className="mt-1">All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ContactItem({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
