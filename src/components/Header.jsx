import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import DropdownMenu from "./DropdownMenu";
import LoginModal from "./LoginModal";
import BasketButton from "./BasketButton";


function Header({ dropdowns, cartItems, setIsBasketOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  const [loggedInUser, setLoggedInUser] = useState(() => {
    try {
      const saved = localStorage.getItem("user");
      const parsed = saved ? JSON.parse(saved) : null;
      return typeof parsed === "object" && parsed !== null ? parsed : null;
    } catch {
      return null;
    }
  });

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleMobileDropdown = (slug) =>
    setMobileDropdownOpen(mobileDropdownOpen === slug ? null : slug);

  console.log("Logged in user:", loggedInUser);

  return (
    <>
      {/* Üst Header */}
      <header className="bg-white px-4 md:px-8 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Sol - Hamburger və Links */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-700 hover:text-blue-600"
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            <nav className="hidden md:flex space-x-6 text-base lg:text-lg">
              <Link to="/xidmetler" className="text-gray-700 hover:text-blue-600">
                Xidmətlər
              </Link>
              <Link to="/catdirilma" className="text-gray-700 hover:text-blue-600">
                Çatdırılma və ödəniş
              </Link>
              <Link to="/filiallar" className="text-gray-700 hover:text-blue-600">
                Filiallar
              </Link>
              <Link to="/statuslar" className="text-gray-700 hover:text-blue-600">
                Statuslar
              </Link>
            </nav>
          </div>

          {/* Logo */}
          <div>
            <Link to="/" className="flex items-center justify-center">
              <img
                src="/logo.svg"
                alt="Logo"
                className="w-20 md:w-28 lg:w-40 h-auto ml-[-20px]"
              />
            </Link>
          </div>

          {/* Sağ ikonlar */}
          <div className="flex items-center space-x-4 lg:space-x-6">
            <a
              href="tel:+994553502121"
              className="text-gray-700 hover:text-blue-600 hidden sm:inline"
            >
              +99455 3502121
            </a>

            {loggedInUser && loggedInUser.firstName ? (
              <span className="text-gray-700">{loggedInUser.firstName}</span>
            ) : (
              <button
                aria-label="User"
                onClick={() => setShowLogin(true)}
                className="text-gray-700 hover:text-blue-600"
              >
                <FaUser className="w-6 h-6" />
              </button>
            )}

            {/* Səbət düyməsi */}
            <BasketButton
              itemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              onClick={() => setIsBasketOpen(true)}
            />
          </div>
        </div>

        {/* Mobil menyu */}
        {menuOpen && (
          <nav className="md:hidden bg-white shadow-md mt-4 p-4 rounded-b-lg space-y-4">
            <Link to="/xidmetler" className="block text-gray-700 hover:text-blue-600">Xidmətlər</Link>
            <Link to="/catdirilma" className="block text-gray-700 hover:text-blue-600">Çatdırılma və ödəniş</Link>
            <Link to="/filiallar" className="block text-gray-700 hover:text-blue-600">Filiallar</Link>
            <Link to="/statuslar" className="block text-gray-700 hover:text-blue-600">Statuslar</Link>
            <a href="tel:+994553502121" className="block text-gray-700 hover:text-blue-600">+99455 3502121</a>
          </nav>
        )}
      </header>

      {/* Naviqasiya menyusu */}
      <nav className="bg-cyan-300 text-white py-4">
        <div className="max-w-6xl  mx-auto px-4">
          {/* Desktop menyu */}
          <ul className="hidden md:flex flex-wrap justify-center gap-3 text-[16px] font-medium">
            {dropdowns.map((item) => (
              <li
                key={item.id}
                className="relative group cursor-pointer"
                onMouseEnter={() => setActiveDropdown(item.slug)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
  to={`/${item.slug}`}
  className={`px-4 py-2 rounded hover:bg-cyan-400 hover:border hover:border-cyan-400 ${["buket-yarat", "sifaris-statusu"].includes(item.slug) ? "font-semibold" : ""}`}
>
  {item.name}
</Link>

                {item.children?.length > 0 && (
                  <DropdownMenu
                    categorySlug={item.slug}
                    dropdowns={dropdowns}
                    isActive={activeDropdown === item.slug}
                  />
                )}
              </li>
            ))}
          </ul>

          {/* Mobil menyu alt naviqasiya */}
          {menuOpen && (
            <ul className="md:hidden flex flex-col gap-2 mt-4">
              {dropdowns.map((item) => (
                <li key={item.id} className="border-b border-cyan-400">
                  <button
                    className="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-cyan-800"
                    onClick={() => toggleMobileDropdown(item.slug)}
                  >
                    <span>{item.name}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${mobileDropdownOpen === item.slug ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileDropdownOpen === item.slug && item.children?.length > 0 && (
                    <div className="bg-cyan-700 text-white px-6 py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.id}
                          to={`/${child.slug}`}
                          className="block py-1 hover:text-cyan-300"
                          onClick={() => setMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>

      {/* Login Modal */}
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onLogin={(user) => {
            setLoggedInUser(user);
            localStorage.setItem("user", JSON.stringify(user));
          }}
        />
      )}
    </>
  );
}

export default Header;
