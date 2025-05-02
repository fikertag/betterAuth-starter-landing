"use client";
import Link from "next/link";
import { Mail, Github, HelpCircle, Linkedin } from "lucide-react";
import { SiDiscord, SiTelegram, SiX } from "react-icons/si";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 min-h-[78vh]"
    >
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <HelpCircle className="w-5 h-5 mr-2 text-green-600 dark:text-green-400" />
              Contact
            </h3>
            <div className=" space-y-3">
              <ContactItem
                icon={
                  <Mail className="w-5 h-5 mr-2 mt-0.5 text-blue-600 dark:text-blue-400" />
                }
                label="fikeryilkaltages@gmail.com"
                href="mailto:fikeryilkaltages@gmail.com"
              />
              <ContactItem
                icon={
                  <SiX className="w-5 h-5 mr-2 mt-0.5 text-blue-400 dark:text-blue-300" />
                }
                label="X"
                href="https://x.com/fiker_yilkal"
              />
              <ContactItem
                icon={
                  <Github className="w-5 h-5 mr-2 mt-0.5 text-gray-800 dark:text-gray-200" />
                }
                label="GitHub"
                href="https://github.com/fikertag"
              />
              <ContactItem
                icon={
                  <SiTelegram className="w-5 h-5 mr-2 mt-0.5 text-sky-600 dark:text-sky-400" />
                }
                label="Telegram"
                href="https://t.me/fkrtag"
              />
              <ContactItem
                icon={
                  <SiDiscord className="w-5 h-5 mr-2 mt-0.5 text-indigo-600 dark:text-indigo-400" />
                }
                label="Discord"
                href="https://discordapp.com/users/1314603680049139737"
              />
              <ContactItem
                icon={
                  <Linkedin className="w-5 h-5 mr-2 mt-0.5 text-blue-700 dark:text-blue-500" />
                }
                label="LinkedIn"
                href="https://www.linkedin.com/in/fikiryilkal/"
              />
              <div className="bloack md:hidden text-gray-500 dark:text-gray-400 text-sm">
                <p>© {new Date().getFullYear()} fikiryilkal</p>
                <p className="mt-1">All rights reserved.</p>
              </div>
            </div>
          </div>

          {/* Company Info */}
          <div className="hidden md:block">
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
