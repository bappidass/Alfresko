import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navigation = [
  { label: "Daily Cruises", href: "/daily-cruises" },
  { label: "Private Charter", href: "/private-charters" },
  { label: "About Us", href: "/about-us" },
  { label: "Blog", href: "#blog" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQs", href: "#faqs" },
  { label: "Terms & Policies", href: "#terms" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSidebarOpen && !event.target.closest('.sidebar') && !event.target.closest('.menu-button')) {
        closeSidebar();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSidebarOpen]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled
            ? "bg-white opacity-2 text-black shadow-md "
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-3 py-3">
          <div className="flex items-center justify-between">
            <div
              className={`text-white  ${
                isScrolled ? "text-black " : "bg-transparent"
              }`}
            >
              <h1
                className={`text-3xl font-serif font-light tracking-wide ${
                  isScrolled ? "text-black" : "bg-transparent"
                }`}
              >
                <Link to="/" className="">
                  Alfresco Grand
                </Link>
              </h1>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`   hover:text-orange-300 transition-colors duration-300 text-sm font-light tracking-wide  ${
                    isScrolled ? "text-black " : "text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <button
              className={`lg:hidden menu-button p-2 rounded-md hover:bg-black/10 transition-colors duration-200 ${
                isScrolled ? "text-black " : "text-white"
              }`}
              onClick={toggleSidebar}
              aria-label="Toggle navigation menu"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-200 ${
                  isSidebarOpen ? "rotate-90" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isSidebarOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeSidebar}
      />

      {/* Sidebar */}
      <aside
        className={`sidebar fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-2xl font-serif font-light tracking-wide text-gray-900">
              Menu
            </h2>
            <button
              onClick={closeSidebar}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto">
            <div className="px-6 py-8">
              <ul className="space-y-4">
                {navigation.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      onClick={closeSidebar}
                      className="block py-3 px-4 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-orange-500 transition-all duration-200 font-light tracking-wide border-l-4 border-transparent hover:border-orange-500"
                    >
                      <span className="text-base">{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Sidebar Footer */}
          <div className="p-6 border-t border-gray-200">
            <div className="text-center">
              <h3 className="text-lg font-serif font-light text-gray-900 mb-2">
                Alfresco Grand
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Experience luxury cruising at its finest
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;