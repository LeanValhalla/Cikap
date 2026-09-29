"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Left side: your image */}
      <div className="hidden md:block w-1/2 relative bg-gray-100">
        <Image
          src="/screenshot.png"
          alt="App preview"
          fill
          className="object-cover"
        />
      </div>

      {/* Right side: login form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-8">
        <div className="w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-1">Welcome back</h2>
          <p className="text-gray-500 mb-6">Enter your details to login.</p>

          <form action="/api/login" method="POST">
            <label htmlFor="email" className="font-bold text-sm">
              Work Email Address
            </label>
            <div className="relative flex items-center mt-1 mb-4">
              <Mail size={18} className="absolute left-3.5 text-gray-400 pointer-events-none" />
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@company.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex items-center justify-between mb-1">
              <label htmlFor="password" className="font-bold text-sm">
                Password
              </label>
              <a href="/forgot-password" className="text-sm text-indigo-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="relative flex items-center mb-4">
              <Lock size={18} className="absolute left-3.5 text-gray-400 pointer-events-none" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                required
                autoComplete="current-password"
                placeholder="Enter password"
                className="w-full pl-10 pr-11 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="button"
                aria-label="Toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-gray-400 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="flex items-center mb-6">
              <input type="checkbox" id="remember" name="remember" className="mr-2 accent-indigo-600" />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Remember device for 30 days
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2"
            >
              Sign In →
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-4">
            Don&apos;t have an account yet?{" "}
            <a href="/register" className="text-indigo-600 font-semibold hover:underline">
              Create an account →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}