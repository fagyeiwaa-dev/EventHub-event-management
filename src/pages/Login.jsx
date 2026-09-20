import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7] px-6 py-12">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-2xl bg-white shadow-lg md:grid-cols-2">
        <div className="hidden bg-[#7F1D3A] p-10 text-white md:flex md:flex-col md:justify-center">
          <p className="font-semibold uppercase tracking-wider text-[#F5D9C8]">
            Welcome to EventHub
          </p>

          <h1 className="mt-4 text-4xl font-bold">
            Welcome Back
          </h1>

          <p className="mt-5 leading-7 text-[#FCEFE6]">
            Sign in to discover exciting events, manage your
            registrations, and keep track of your favorite experiences.
          </p>

          <div className="mt-8 rounded-xl bg-[#5C1329] p-5">
            <p className="text-sm text-[#FCEFE6]">
              Your next experience could be just one login away.
            </p>
          </div>
        </div>

        <div className="p-8 md:p-10">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-wider text-[#7F1D3A]">
              EventHub
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#5C1329]">
              Login
            </h2>

            <p className="mt-2 text-gray-600">
              Login to your EventHub account
            </p>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-lg border border-[#E8D5C4] px-4 py-3 outline-none transition focus:border-[#7F1D3A] focus:ring-2 focus:ring-[#F5D9C8]"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full rounded-lg border border-[#E8D5C4] px-4 py-3 pr-20 outline-none transition focus:border-[#7F1D3A] focus:ring-2 focus:ring-[#F5D9C8]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-[#7F1D3A] hover:text-[#5C1329]"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 accent-[#7F1D3A]"
                />
                Remember me
              </label>

              <button
                type="button"
                className="text-sm font-medium text-[#7F1D3A] hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#7F1D3A] px-4 py-3 font-semibold text-white transition hover:bg-[#5C1329]"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-[#7F1D3A] hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;