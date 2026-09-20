import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

 const handleSignup = async (event) => {
  event.preventDefault();

  if (!name || !email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/auth/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      alert(data.error || "Failed to create account.");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", data.user.email);

    alert("Account created successfully!");

    navigate("/");
  } catch (error) {
    console.error("Signup error:", error);
    alert("Unable to connect to the server.");
  }
};

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7] px-6 py-12">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-2xl bg-white shadow-lg md:grid-cols-2">
        <div className="hidden bg-[#7F1D3A] p-10 text-white md:flex md:flex-col md:justify-center">
          <p className="font-semibold uppercase tracking-wider text-[#F5D9C8]">
            Join EventHub
          </p>

          <h1 className="mt-4 text-4xl font-bold">
            Create Your Account
          </h1>

          <p className="mt-5 leading-7 text-[#FCEFE6]">
            Join EventHub to discover events, save your favorites,
            register for experiences, and connect with your community.
          </p>

          <div className="mt-8 rounded-xl bg-[#5C1329] p-5">
            <p className="text-sm text-[#FCEFE6]">
              Discover. Connect. Experience.
            </p>
          </div>
        </div>

        <div className="p-8 md:p-10">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-wider text-[#7F1D3A]">
              EventHub
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#5C1329]">
              Sign Up
            </h2>

            <p className="mt-2 text-gray-600">
              Create your EventHub account
            </p>
          </div>

          <form onSubmit={handleSignup} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Full Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full rounded-lg border border-[#E8D5C4] px-4 py-3 outline-none transition focus:border-[#7F1D3A] focus:ring-2 focus:ring-[#F5D9C8]"
              />
            </div>

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
                  placeholder="Create a password"
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

            <button
              type="submit"
              className="w-full rounded-lg bg-[#7F1D3A] px-4 py-3 font-semibold text-white transition hover:bg-[#5C1329]"
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-[#7F1D3A] hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );

export default Signup;