import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const navigate = useNavigate();
  const location = useLocation();

  
useEffect(() => {
  const loggedIn = localStorage.getItem("isLoggedIn") === "true";
  setIsLoggedIn(loggedIn);
}, [location]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");

    setIsLoggedIn(false);
    setIsMenuOpen(false);

    navigate("/");
  };

  return (
    <nav className="bg-[#FFF8E7] shadow-md">
      {/* Main Navbar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-[#7F1D3A]"
        >
          EventHub
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-4 md:flex">

          <Link
            to="/"
            className="text-gray-700 transition hover:text-[#7F1D3A]"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-gray-700 transition hover:text-[#7F1D3A]"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="text-gray-700 transition hover:text-[#7F1D3A]"
          >
            Contact
          </Link>

          <Link
            to="/favorites"
            className="text-gray-700 transition hover:text-[#7F1D3A]"
          >
            Favorites
          </Link>

          <Link
            to="/my-events"
            className="text-gray-700 transition hover:text-[#7F1D3A]"
          >
            My Events
          </Link>

          {/* Logged Out */}
          {!isLoggedIn && (
            <>
              <Link
                to="/login"
                className="text-gray-700 transition hover:text-[#7F1D3A]"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="rounded-lg bg-[#7F1D3A] px-4 py-2 text-white transition hover:bg-[#5C1329]"
              >
                Sign Up
              </Link>
            </>
          )}

          {/* Logged In */}
          {isLoggedIn && (
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-lg bg-[#7F1D3A] px-4 py-2 text-white transition hover:bg-[#5C1329]"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-[#7F1D3A] hover:bg-[#F5E6D3] md:hidden"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-[#E8D5C4] bg-[#FFF8E7] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">

            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 transition hover:text-[#7F1D3A]"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 transition hover:text-[#7F1D3A]"
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 transition hover:text-[#7F1D3A]"
            >
              Contact
            </Link>

            <Link
              to="/favorites"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 transition hover:text-[#7F1D3A]"
            >
              Favorites
            </Link>

            <Link
              to="/my-events"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 transition hover:text-[#7F1D3A]"
            >
              My Events
            </Link>

            {/* Mobile Logged Out */}
            {!isLoggedIn && (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 transition hover:text-[#7F1D3A]"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-lg bg-[#7F1D3A] px-4 py-2 text-center text-white transition hover:bg-[#5C1329]"
                >
                  Sign Up
                </Link>
              </>
            )}

            {/* Mobile Logged In */}
            {isLoggedIn && (
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-lg bg-[#7F1D3A] px-4 py-2 text-center text-white transition hover:bg-[#5C1329]"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;