import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-gray-50 px-6 py-16">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-lg">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Create an Account
          </h1>

          <p className="mt-2 text-gray-600">
            Join EventHub and start discovering amazing events.
          </p>
        </div>

        {/* Sign Up Form */}
        <form className="mt-8 space-y-5">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>

            <input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-20 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Terms */}
          <label className="flex items-start gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-gray-300"
            />

            <span>
              I agree to the{" "}
              <span className="font-medium text-blue-600">
                Terms and Conditions
              </span>
            </span>
          </label>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Create Account
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-blue-600 hover:text-blue-700"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;