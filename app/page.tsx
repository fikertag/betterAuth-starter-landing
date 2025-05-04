"use client";
import Link from "next/link";
import {
  ShieldCheck,
  LockKeyhole,
  Zap,
  Mail,
  Fingerprint,
  Key,
  UserCircle2,
  MoonStar,
  MessageSquare,
  LayoutDashboard,
} from "lucide-react";
import {
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiPusher,
  SiResend,
  SiCloudinary,
  SiShadcnui,
  SiAuth0,
} from "react-icons/si";

export default function Home() {
  return (
    <main className="min-h-screen pt-16 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 px-4 sm:px-6 relative overflow-hidden">
      {/* Main content */}
      <div className="text-center space-y-12 z-10 max-w-6xl mx-auto py-12">
        {/* Hero Section */}
        <div className="animate-fade-in space-y-8">
          <div className="inline-flex items-center justify-center my-4 px-4 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 text-sm font-medium">
            <Zap className="w-4 h-4 mr-1.5" />
            Powered by Better Auth
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Complete Authentication Solution
            </span>
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need for secure user authentication with MongoDB.
            Production-ready with all essential features included.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 space-y-6">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="https://betterauth-mongodb-starter.vercel.app"
                target="_blank"
                className="relative overflow-hidden px-8 py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 group inline-block text-center"
              >
                <span className="relative z-10">Live Demo</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
              <Link
                href="https://github.com/fikertag/betterauth-mongodb-starter"
                className="relative overflow-hidden px-8 py-3.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 group inline-block text-center border border-gray-200 dark:border-gray-700"
              >
                <span className="relative z-10">Source code</span>
              </Link>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              <LockKeyhole className="inline w-3 h-3 mr-1" />
              All data encrypted in transit and at rest. Open-source and
              transparent.
            </p>
          </div>
        </div>

        {/* Screenshot Placeholder */}
        <div className="mt-12 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-xl">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>

          <div className="relative bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
            <picture>
              <source media="(min-width: 640px)" srcSet="/admin-mobile.png" />
              <source media="(max-width: 1280px)" srcSet="/admin-tablet.png" />
              <img
                src="/admin-desktop.png"
                alt="Admin Dashboard"
                className="object-contain w-full h-full"
              />
            </picture>
          </div>
        </div>

        {/* Key Features Section */}
        <section id="features" className="mt-16 space-y-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Key Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={
                <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              }
              title="Email Login"
              description="Secure email/password authentication with validation"
            />
            <FeatureCard
              icon={
                <Fingerprint className="w-8 h-8 text-red-600 dark:text-red-400" />
              }
              title="Google Login"
              description="OAuth integration with Google for easy sign-in"
            />
            <FeatureCard
              icon={
                <ShieldCheck className="w-8 h-8 text-green-600 dark:text-green-400" />
              }
              title="Email Verification"
              description="Secure account verification with email links"
            />
            <FeatureCard
              icon={
                <Key className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              }
              title="Reset Password"
              description="Secure password reset flow with tokens"
            />
            <FeatureCard
              icon={
                <UserCircle2 className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
              }
              title="Profile Management"
              description="Update name, password, and profile picture"
            />
            <FeatureCard
              icon={
                <LockKeyhole className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              }
              title="Route Protection"
              description="Protected routes for authenticated users only"
            />
            <FeatureCard
              icon={
                <LayoutDashboard className="w-8 h-8 text-pink-600 dark:text-pink-400" />
              }
              title="Admin Dashboard"
              description="User management for administrators"
            />
            <FeatureCard
              icon={
                <MessageSquare className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              }
              title="Real-time Chat"
              description="WebSocket-powered chat with instant updates"
            />
            <FeatureCard
              icon={
                <MoonStar className="w-8 h-8 text-gray-600 dark:text-gray-300" />
              }
              title="Dark/Light Mode"
              description="Fully responsive navbar with theme switching"
            />
          </div>
        </section>

        {/* Additional Screenshot Section */}
        <div className="mt-16 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            See It In Action
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg">
              <div className="bg-gray-100 dark:bg-gray-800 p-3 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>

              <div className="relative bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                <picture>
                  <source
                    media="(max-width: 640px)"
                    srcSet="/signup-deskto.png"
                  />
                  <source
                    media="(max-width: 1000px)"
                    srcSet="/signup-deskto.png"
                  />
                  <img
                    src="/signup-deskto.png"
                    alt="Signup Page"
                    className="object-contain w-full h-full"
                  />
                </picture>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg">
              <div className="bg-gray-100 dark:bg-gray-800 p-3 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>

              <div className="relative bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                <picture>
                  <source
                    media="(max-width: 640px)"
                    srcSet="/chat-desktop.png"
                  />
                  <source
                    media="(max-width: 1000px)"
                    srcSet="/chat-desktop.png"
                  />
                  <img
                    src="/chat-desktop.png"
                    alt="Signup Page"
                    className="object-contain w-full h-full"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div
          id="tech"
          className="mt-20 py-12 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 text-center mb-8">
              POWERED BY
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
              <TechIcon
                name="Next.js"
                icon={
                  <SiNextdotjs className="w-10 h-10 text-black dark:text-white" />
                }
              />
              <TechIcon
                name="Better Auth"
                icon={
                  <svg
                    width="60"
                    height="45"
                    viewBox="0 0 60 45"
                    fill="none"
                    className="w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 0H15V15H30V30H15V45H0V30V15V0ZM45 30V15H30V0H45H60V15V30V45H45H30V30H45Z"
                      className="dark:fill-white"
                    ></path>
                  </svg>
                }
              />
              <TechIcon
                name="MongoDB"
                icon={
                  <SiMongodb className="w-10 h-10 text-green-600 dark:text-green-400" />
                }
              />
              <TechIcon
                name="TypeScript"
                icon={
                  <SiTypescript className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                }
              />
              <TechIcon
                name="Tailwind CSS"
                icon={
                  <SiTailwindcss className="w-10 h-10 text-sky-500 dark:text-sky-300" />
                }
              />
              <TechIcon
                name="Resend"
                icon={
                  <SiResend className="w-10 h-10 text-red-600 dark:text-red-400" />
                }
              />
              <TechIcon
                name="shadcn/ui"
                icon={<SiShadcnui className="w-10 h-10 text-white" />}
              />
              <TechIcon
                name="Pusher"
                icon={
                  <SiPusher className="w-10 h-10 text-cyan-600 dark:text-cyan-400" />
                }
              />

              <TechIcon
                name="Cloudinary"
                icon={
                  <SiCloudinary className="w-10 h-10 text-blue-500 dark:text-blue-300" />
                }
              />
              <TechIcon
                name="OAuth"
                icon={<SiAuth0 className="w-10 h-10 text-white " />}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center">
      <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 mb-4">
        {icon}
      </div>
      <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
        {title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
        {description}
      </p>
    </div>
  );
}

function TechIcon({ name, icon }: { name: string; icon: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center group">
      <div className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-md group-hover:shadow-lg transition-shadow duration-300">
        {icon}
      </div>
      <span className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
        {name}
      </span>
    </div>
  );
}
