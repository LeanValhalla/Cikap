"use client";

import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-sm">
        <h2 className="text-lg font-bold mb-1">Work Email Address</h2>

        <form action="/api/login" method="POST">
          {/* Email */}
          <div className="relative flex items-center mb-4">
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

          {/* Password */}
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

          {/* Remember me */}
          <div className="flex items-center mb-6">
            <input type="checkbox" id="remember" name="remember" className="mr-2 accent-indigo-600" />
            <label htmlFor="remember" className="text-sm text-gray-600">
              Remember device for 30 days
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2"
          >
            Sign In →
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Don&apos;t have an account yet?{" "}
          <a href="/signup" className="text-indigo-600 font-semibold hover:underline">
            Create an account →
          </a>
        </p>
      </div>
    </div>
  );
}