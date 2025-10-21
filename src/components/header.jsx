import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icon library (already included in shadcn setups)
import { Link, Outlet } from "react-router-dom";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "about" },
    { name: "Cars", href: "/cars" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <a href="/">Car Rentals</a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
            <ul className="navbar-nav ms-auto">
                <Link key="home" to="/" className="text-gray-700 hover:text-blue-600 transition-colors p-5" >Home  </Link>
                <Link key="about" to="/about" className="text-gray-700 hover:text-blue-600 transition-colors p-5" >About Us  </Link>
                <Link key="cars" to="/cars" className="text-gray-700 hover:text-blue-600 transition-colors p-5" >Cars  </Link>
                <Link key="contact" to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors p-5" >Contact Us  </Link>
                
            </ul>
          
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <nav className="flex flex-col space-y-2 p-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
