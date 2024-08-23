import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import pagesArr from "@/util/pagesArr";
// import NavLink from "../NavLink";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  /*
  isAnimatingOut controls whether the closing animation should be applied. This ensures that the menu does not immediately disappear before the animation completes.
  */
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const router = useRouter();

  const isActive = (path) => router.pathname === path;

  const toggleMobileMenu = () => {
    // setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      // Start the closing animation
      setIsAnimatingOut(true);
      // Wait for the animation to finish before hiding the menu
      setTimeout(() => setIsMobileMenuOpen(false), 500); // Match duration of 'animate-close-menu'
    } else {
      setIsMobileMenuOpen(true);
      setIsAnimatingOut(false);
    }
  };

  return (
    <nav className="bg-white shadow relative">
      {/* px-4 sm:px-6 */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* logo */}
          <div className="flex items-center ">
            <div className="flex-shrink-0">
              <Link href={"/"} className="text-black">
                Logo
              </Link>
            </div>
          </div>
          {/* 
          for testing/dev purposes I use:
          - outline: auto; on the nav tag
          - height: 100%; on the parent tag (also added a nav-menu class to it) of the Link tag (added a test class to the Link tag)

          */}

          {/* Nav Menu */}
          <div className="nav-menu hidden md:flex md:items-center md:space-x-4">
            {pagesArr.map((page) => (
              <Link
                key={page}
                // replaces any space in between words with a dash
                href={
                  page === "Home"
                    ? "/"
                    : `/${page.toLowerCase().replace(/ /g, "-")}`
                }
                // active:text-gray-900 text-sm
                // hover:bg-gray-50 hover:text-gray-700
                // font-medium
                className="test text-gray-500 hover:bg-black hover:text-white rounded-lg p-2"
              >
                {page}
              </Link>
            ))}
          </div>

          {/* mobile hamburger icon button */}
          <div className="md:hidden flex items-center">
            <button
              // text-white md:text-white hover:text-white
              // rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-400
              className="text-gray-400 hover:text-gray-400 inline-flex items-center justify-center p-2 "
              onClick={toggleMobileMenu}
            >
              {/* hamburger button state for closed menu */}
              <span className="sr-only">Close main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden absolute top-0 min-h-screen overflow-hidden right-0 w-full bg-gray-800 text-white transform origin-top-left ${
            isAnimatingOut ? "animate-close-menu" : "animate-open-menu"
          }`}
          aria-label="mobile"
        >
          <div className="flex justify-end h-16 px-6">
            <button
              // text-white md:text-white hover:text-white
              // rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-400
              className="text-gray-400 hover:text-gray-400 inline-flex items-center justify-center p-2  "
              onClick={toggleMobileMenu}
            >
              {/* hamburger button state for opened menu */}
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
          {/* sm:px-3 space-y-1 px-2 */}
          <div className=" pt-2 pb-3 ">
            {pages.map((page) => (
              <Link
                key={page}
                href={
                  page === "Home"
                    ? "/"
                    : `/${page.toLowerCase().replace(/ /g, "-")}`
                }
                // p-2
                className="text-black text-base leading-6 font-medium flex items-center hover:bg-black hover:text-white py-2 sm:pl-5 sm:pr-6 mt-1"
              >
                {page}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
