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
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
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
            className={`lg:hidden   ${
              isScrolled ? "text-black " : "text-white"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
