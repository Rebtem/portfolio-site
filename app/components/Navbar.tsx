"use client"
import Link from "next/link";
import { useState } from "react";
import { FiHome, FiUser, FiFileText, FiBriefcase, FiServer, FiMail } from "react-icons/fi";
import { BsSun, BsMoon } from "react-icons/bs";


const Navbar = () => {
    const [darkmode, setdarkMode] = useState(false);

    const toggleDarkMode = ( ) => {
      setdarkMode(!darkmode);

      document.documentElement.classList.toggle("dark");
    };

    const menuItems = [
      {name: "Home", icon: <FiHome  size={35}/>, href:"#home"},
      {name: "About", icon: <FiUser size={35}/>, href: "#about"},
      {name:"Resume", icon: <FiFileText size={35}/>, href: "#resume"},
      {name: "Portfolio", icon: <FiBriefcase size={35}/>, href: "#portfolio"},
      {name: "Services", icon: <FiServer size={35}/>, href: "#services"},
      {name: "Contact", icon: <FiMail size={35}/>, href: "#contact"},
    ];
    return (
      <nav className="fixed left-0 top-0 h-full w-16 flex flex-col bg-black bg-opacity-50 dark:bg-gray-900 z-50 text-white items-center py-5">
        <div className="mb-10 text-4xl font-bold">RT</div>
        {menuItems.map((item, index) => (
          <Link key={index} href={item.href} className="relative group my-4">
            <div className="flex flex-col items-center cursor-pointer" >
              {item.icon}
              <span className="absolute left-14 bg-gray-800 dark:bg-gray-700 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100
              transition">{item.name}
              </span>
            </div>
          </Link>
        ))}
        <button onClick={toggleDarkMode} className="mt-auto p-2">
          {darkmode ? <BsSun /> : <BsMoon />}
        </button>
      </nav>
    
    );
    };
  
export default Navbar;