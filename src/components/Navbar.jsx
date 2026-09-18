import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          EventHub
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-4">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>

          <Link to="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>

          <Link to="/contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>

          <Link to="/favorites" className="text-gray-700 hover:text-blue-600">
            Favorites
          </Link>

          <Link to="/my-events" className="text-gray-700 hover:text-blue-600">
            My Events
          </Link>

          <Link to="/login" className="text-gray-700 hover:text-blue-600">
            Login
          </Link>

          <Link
            to="/signup"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;