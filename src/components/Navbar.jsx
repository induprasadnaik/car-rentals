import React, { useState, useEffect } from "react";
import { assets, menuLinks } from "../assets/assets";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ setShowLogin }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser"))
  );

  // ✅ Handle user login status changes
  useEffect(() => {
    const handleStorageChange = () => {
      const user = JSON.parse(localStorage.getItem("loggedInUser"));
      setLoggedInUser(user);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setShowMenu(false);
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    window.dispatchEvent(new Event("storage"));
    setShowMenu(false);
    navigate("/");
  };

  const isSignInPage = location.pathname === "/signin";

  return (
    <div
      className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600 border-b border-borderColor relative transition-all ${
        location.pathname === "/" ? "bg-light" : "bg-white"
      }`}
    >
      <Link to={"/"}>
        <h1
          className="text-2xl font-bold leading-none tracking-tight md:text-3xl lg:text-4xl"
          style={{ color: "stone" }}
        >
          Naik's Car Rental
        </h1>
      </Link>

      <div
        className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t border-borderColor right-0 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50 ${
          location.pathname === "/" ? "bg-light" : "bg-white"
        } ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}
      >
        {menuLinks.map((link, index) => (
          <Link key={index} to={link.path}>
            {link.name}
          </Link>
        ))}

        

        <div className="flex max-sm:flex-col items-start sm:items-center gap-6">
          <ThemeToggle />
          

          {!isSignInPage && (
            loggedInUser ? (
              <div className="flex items-center gap-4 relative">
                <span className="font-medium">{loggedInUser.username}</span>
                <div className="relative">
                  <img
                    src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80"
                    alt="Profile"
                    className="w-8 h-8 rounded-full cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowMenu((prev) => !prev);
                    }}
                  />

                  {showMenu && (
                    <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 z-50">
                      {/* <button
                        onClick={() => navigate("/profile")}
                        className="bg-stone-600 hover:bg-stone-700 text-white font-semibold py-3 px-6 rounded-full transition"
                      >
                        View Profile
                      </button> */}
                      <button
                        onClick={handleLogout}
                        className="bg-stone-600 hover:bg-stone-700 text-white font-semibold py-3 px-6 rounded-full transition mt-3 mb-3 ms-2 "
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <button
                onClick={() => navigate("/signin")}
                className="bg-stone-600 hover:bg-stone-700 text-white font-semibold py-3 px-6 rounded-full transition"
              >
                Sign In
              </button>
            )
          )}
        </div>
      </div>

      <button
        className="sm:hidden cursor-pointer"
        aria-label="Menu"
        onClick={() => setOpen(!open)}
      >
        <img
          src={open ? assets.close_icon : assets.menu_icon}
          alt="menu"
        />
      </button>
    </div>
  );
};

export default Navbar;
