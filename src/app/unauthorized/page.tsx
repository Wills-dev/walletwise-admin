"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { ArrowLeft, AlertCircle, Shield, Lock } from "lucide-react";

import Logo from "@/components/atoms/Logo/Logo";

const UnAuthorisedPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const router = useRouter();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const goBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 transition-all duration-1000 bg-indigo-500"
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
          }}
        />
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full blur-3xl bg-purple-500/10 dark:bg-purple-500/20 animate-pulse" />
        <div
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl bg-blue-500/10 dark:bg-blue-500/20 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="fixed top-6 left-6 z-50">
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/80 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-200 dark:border-gray-800 shadow-lg">
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <Logo url="/overview" />
          </div>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-2xl w-full text-center">
          <div className="bg-white/80 dark:bg-gray-900/50 backdrop-blur-xl rounded-3xl p-12 border border-gray-200 dark:border-gray-800 shadow-2xl mb-8 transform hover:scale-105 transition-transform duration-500">
            <div className="relative">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Shield
                    className="w-32 h-32 text-indigo-500 dark:text-indigo-400"
                    strokeWidth={1.5}
                  />
                  <Lock className="w-16 h-16 text-red-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
              </div>
              <h1 className="text-7xl font-black text-gray-900 dark:text-white mb-4 tracking-tighter">
                401
              </h1>
            </div>

            <div className="flex items-center justify-center gap-2 mb-4">
              <AlertCircle className="w-6 h-6 text-indigo-500" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Unauthorized Access
              </h2>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-md mx-auto">
              You don&apos;t have permission to access this page. Please sign in
              with an authorized account or contact your administrator.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="group flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-indigo-500/50 transform hover:-translate-y-1 transition-all duration-300"
              >
                <Lock className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Sign In
              </Link>

              <button
                onClick={goBack}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white/80 dark:bg-gray-900/50 backdrop-blur-xl border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white rounded-xl font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>
            </div>
          </div>

          <div className="bg-white/80 dark:bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-xl">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
              Need help accessing this resource?
            </p>
            <button className="w-full px-6 py-3 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300">
              Contact Administrator
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-indigo-500 to-transparent opacity-50" />
    </div>
  );
};

export default UnAuthorisedPage;
