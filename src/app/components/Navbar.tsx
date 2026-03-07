import { useState } from "react";
import { Search, PenSquare, Menu, X, User } from "lucide-react";
import { Link, useLocation } from "react-router";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Explore", to: "/explore" },
  { label: "Article", to: "/article" },
  { label: "Profile", to: "/profile" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-xs" style={{ fontWeight: 700 }}>B</span>
            </div>
            <span className="text-xl tracking-tight text-gray-900" style={{ fontWeight: 700, letterSpacing: "-0.03em" }}>
              Blogify
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.to}
                className={`text-sm px-3.5 py-2 rounded-full transition-all duration-200 ${
                  isActive(link.to)
                    ? "text-gray-900 bg-gray-100"
                    : "text-gray-500 hover:text-black hover:bg-gray-50"
                }`}
                style={{ fontWeight: isActive(link.to) ? 600 : 400 }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-2">
            {/* Search */}
            <div className="relative">
              {searchOpen ? (
                <div className="flex items-center gap-2 bg-gray-50 border border-gray-300 rounded-full px-4 py-1.5">
                  <Search size={15} className="text-gray-400" />
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search articles..."
                    className="bg-transparent text-sm text-gray-700 outline-none w-44 placeholder-gray-400"
                    onBlur={() => setSearchOpen(false)}
                    onKeyDown={e => {
                      if (e.key === "Enter") {
                        window.location.href = "/explore";
                      }
                    }}
                  />
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 text-gray-500 hover:text-black"
                >
                  <Search size={18} />
                </button>
              )}
            </div>

            {/* Write */}
            <Link
              to="/create"
              className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-black transition-colors duration-200 px-3 py-1.5 rounded-full hover:bg-gray-100"
            >
              <PenSquare size={16} />
              Write
            </Link>

            {/* Profile */}
            <Link
              to="/profile"
              className="p-1.5 rounded-full hover:bg-gray-100 transition-colors duration-200 text-gray-500 hover:text-black"
            >
              <User size={18} />
            </Link>

            {/* Sign In */}
            <Link
              to="/signin"
              className="text-sm bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200"
              style={{ fontWeight: 600 }}
            >
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 mt-2 pt-4">
            <div className="flex flex-col gap-1 mb-4">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm py-2 px-3 rounded-xl transition-colors ${
                    isActive(link.to)
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:text-black hover:bg-gray-50"
                  }`}
                  style={{ fontWeight: isActive(link.to) ? 600 : 400 }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/create"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-1.5 text-sm text-gray-600 py-2 px-3 rounded-xl hover:bg-gray-50 hover:text-black transition-colors"
              >
                <PenSquare size={15} />
                Write a story
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 flex-1">
                <Search size={15} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent text-sm text-gray-700 outline-none flex-1 placeholder-gray-400"
                />
              </div>
              <Link
                to="/signin"
                className="text-sm bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
                style={{ fontWeight: 600 }}
              >
                Sign In
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
