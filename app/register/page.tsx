"use client";

import { useState } from "react";
import { Mail, Lock, User, Eye, EyeOff, ShieldCheck, ScanLine, RefreshCw, Globe } from "lucide-react";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Left side: feature highlights */}
      <div className="hidden md:flex w-1/2 flex-col justify-center gap-6 bg-gray-50 px-12 py-10">
        <div>
          <h1 className="text-3xl font-bold mb-3">
            Deploy multi-hub inventory & fast POS in minutes.
          </h1>
          <p className="text-gray-500">
            Consolidate operations across warehouses, checkout, and automated
            vendor replenishment with zero latency.
          </p>
        </div>

        <FeatureItem
          icon={<ShieldCheck size={20} className="text-indigo-600" />}
          title="14-Day Full Feature Trial"
          description="Instant deployment, zero commitment, no credit card required."
        />
        <FeatureItem
          icon={<ScanLine size={20} className="text-indigo-600" />}
          title="Seamless Barcode & Thermal Printing"
          description="Native drivers, handheld scanners, and instant SKU labeling."
        />
        <FeatureItem
          icon={<RefreshCw size={20} className="text-indigo-600" />}
          title="Multi-Hub Real-Time Stock Sync"
          description="Automate reorder thresholds across cross-docks and stores."
        />
        <FeatureItem
          icon={<Globe size={20} className="text-indigo-600" />}
          title="Bilingual & Multi-Currency POS"
          description="Full localization, tax automation, and offline resilience."
        />
      </div>

      {/* Right side: signup form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-8 py-10">
        <div className="w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-1">Create your account</h2>
          <p className="text-gray-500 mb-6">
            Start your 14-day unrestricted trial.
          </p>

          <form action="/api/signup" method="POST">
            {/* First / Last name */}
            <div className="flex gap-4 mb-4">
              <div className="w-1/2">
                <label htmlFor="firstName" className="font-bold text-sm">
                  First Name
                </label>
                <div className="relative flex items-center mt-1">
                  <User size={18} className="absolute left-3.5 text-gray-400 pointer-events-none" />
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    placeholder="Alex"
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div className="w-1/2">
                <label htmlFor="lastName" className="font-bold text-sm">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  placeholder="Mercer"
                  className="w-full mt-1 px-3 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Email */}
            <label htmlFor="email" className="font-bold text-sm">
              Business Email
            </label>
            <div className="relative flex items-center mt-1 mb-4">
              <Mail size={18} className="absolute left-3.5 text-gray-400 pointer-events-none" />
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="alex@retailer.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Password */}
            <label htmlFor="password" className="font-bold text-sm">
              Password
            </label>
            <div className="relative flex items-center mt-1 mb-4">
              <Lock size={18} className="absolute left-3.5 text-gray-400 pointer-events-none" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                required
                minLength={8}
                placeholder="Min 8 characters"
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

            {/* Terms */}
            <div className="flex items-start gap-2 mb-6">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                required
                className="mt-1 accent-indigo-600"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{" "}
                <a href="/terms" className="text-indigo-600 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-indigo-600 hover:underline">
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2"
            >
              Get Started — Free Trial →
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-600 font-semibold hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm">
      <div className="mt-0.5">{icon}</div>
      <div>
        <p className="font-semibold text-sm">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}