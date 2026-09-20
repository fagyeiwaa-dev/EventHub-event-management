import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");

    setIsLoggedIn(false);
    setIsMenuOpen(false);

    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md">
      {/* Main Navbar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          EventHub
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-4 md:flex">

          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-600"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="text-gray-700 hover:text-blue-600"
          >
            Contact
          </Link>

          <Link
            to="/favorites"
            className="text-gray-700 hover:text-blue-600"
          >
            Favorites
          </Link>

          <Link
            to="/my-events"
            className="text-gray-700 hover:text-blue-600"
          >
            My Events
          </Link>

          {/* Desktop Authentication */}
          {!isLoggedIn && (
            <>
              <Link
                to="/login"
                className="text-gray-700 hover:text-blue-600"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </>
          )}

          {isLoggedIn && (
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">

            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600"
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600"
            >
              Contact
            </Link>

            <Link
              to="/favorites"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600"
            >
              Favorites
            </Link>

            <Link
              to="/my-events"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600"
            >
              My Events
            </Link>

            {/* Mobile Authentication */}
            {!isLoggedIn && (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-700"
                >
                  Sign Up
                </Link>
              </>
            )}

            {isLoggedIn && (
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-lg bg-red-500 px-4 py-2 text-center text-white hover:bg-red-600"
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