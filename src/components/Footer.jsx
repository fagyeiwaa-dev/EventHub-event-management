
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#5C1329] text-[#FCEFE6]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              to="/"
              className="text-3xl font-bold text-[#FFF8E7]"
            >
              EventHub
            </Link>

            <p className="mt-4 max-w-md leading-7 text-[#F5D9C8]">
              Discover exciting events, connect with people, and
              create memorable experiences with EventHub.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                to="/"
                className="transition hover:text-[#FFF8E7]"
              >
                Home
              </Link>

              <Link
                to="/events"
                className="transition hover:text-[#FFF8E7]"
              >
                Events
              </Link>

              <Link
                to="/about"
                className="transition hover:text-[#FFF8E7]"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="transition hover:text-[#FFF8E7]"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Event Links */}
          <div>
            <h3 className="text-lg font-bold text-white">
              EventHub
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                to="/favorites"
                className="transition hover:text-[#FFF8E7]"
              >
                Favorites
              </Link>

              <Link
                to="/my-events"
                className="transition hover:text-[#FFF8E7]"
              >
                My Events
              </Link>

              <Link
                to="/create-event"
                className="transition hover:text-[#FFF8E7]"
              >
                Create Event
              </Link>

              <Link
                to="/signup"
                className="transition hover:text-[#FFF8E7]"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#7F1D3A] pt-6 text-center text-sm text-[#F5D9C8]">
          <p>
            © {new Date().getFullYear()} EventHub. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;