"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiHome, FiUser, FiFileText, FiBriefcase, FiServer, FiMail } from "react-icons/fi";
import { BsSun, BsMoon } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
    const [darkmode, setdarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleDarkMode = ( ) => {
      setdarkMode(!darkmode);
      document.documentElement.classList.toggle("dark");
    };

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
        if (!document.getElementById("mobile-menu")?.contains(event.target as Node) && menuOpen) {
            setMenuOpen(false);
        }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
}, [menuOpen]);


    const menuItems = [
      {name: "Home", icon: <FiHome  size={35}/>, href:"#home"},
      {name: "About", icon: <FiUser size={35}/>, href: "#about"},
      {name:"Resume", icon: <FiFileText size={35}/>, href: "#resume"},
      {name: "Portfolio", icon: <FiBriefcase size={35}/>, href: "#portfolio"},
      {name: "Services", icon: <FiServer size={35}/>, href: "#services"},
      {name: "Contact", icon: <FiMail size={35}/>, href: "#contact"},
    ];
    return (
      <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-50 dark:bg-gray-900 text-white z-50 px-4 py-3 flex justify-between items-center md:h-full md:w-16 md:flex-col">
            <div className="text-2xl font-bold md:mb-10">RT</div>

        {/* Hamburger Menu for Mobile */}
            <button onClick={toggleMenu} className="md:hidden text-2xl">
                <GiHamburgerMenu />
            </button>
            
            {/* Mobile Menu */}
            <div 
                id="mobile-menu"
                className={`fixed top-0 left-0 h-full w-64 bg-black bg-opacity-90 transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 md:hidden flex flex-col items-center space-y-4 pt-16`}
            >
                {menuItems.map((item, index) => (
                    <Link key={index} href={item.href} className="w-full text-center py-3 hover:bg-gray-700">
                        {item.name}
                    </Link>
                ))}
            </div>

            {/* Sidebar for Desktop */}
            <div className="hidden md:flex md:flex-col md:items-center md:space-y-4">
                {menuItems.map((item, index) => (
                    <Link key={index} href={item.href} className="relative group my-2 md:my-4">
                        <div className="flex flex-col items-center cursor-pointer">
                            {item.icon}
                            <span className="absolute left-14 bg-gray-800 dark:bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
                                {item.name}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
            
            <button onClick={toggleDarkMode} className="p-2 md:mt-auto">
                {darkmode ? <BsSun /> : <BsMoon />}
            </button>
        </nav>
    );
};

export default Navbar;
