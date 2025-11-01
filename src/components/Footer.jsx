import React from 'react'
import { assets, menuLinks } from "../assets/assets";
import { Link, Outlet } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 mt-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo Section */}
          <div className="text-2xl font-bold text-white">
            <a href="/">Car Rentals</a>
          </div>

          {/* Menu Section */}
          <nav className="flex flex-wrap justify-center gap-6">
             <ul className="navbar-nav ms-auto">
                {menuLinks.map((link, index) => (
                          <Link key={index} to={link.path}  className="text-gray-700 hover:text-blue-600 transition-colors p-5" >
                            {link.name}
                          </Link>
                        ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 mb-4"></div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} MyCompany. All rights reserved.
        </div>
      </div>
    </footer>
    )
}

export default Footer