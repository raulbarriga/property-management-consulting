"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import pagesArr from "@/util/pagesArr";
import { Inter, Bodoni_Moda } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const bodoniModa = Bodoni_Moda({ subsets: ["latin"] });

/*
Note: if new company logo has the name of the company in its image, remove the h3 tag with the company's name
*/
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  /*
  isAnimatingOut controls whether the closing animation should be applied. This ensures that the menu does not immediately disappear before the animation completes.
  */
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const router = useRouter();

  const toggleMobileMenu = () => {
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
    <header>
      <nav
        // text-gray-600 bg-beige-100 
        className={`shadow relative text-base  ${inter.className}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href={"/"} className="">
                  <h3
                    className={`self-center text-[1.375rem] font-medium whitespace-nowrap tracking-[0.031em] ${bodoniModa.className}`}
                  >
                    Prime PM Consulting
                  </h3>
                </Link>
              </div>
            </div>

            {/* Nav Menu */}
            <div className="nav-menu hidden md:flex md:items-center md:space-x-4">
              {pagesArr.map((page) => {
                const isActive =
                  router.pathname ===
                  (page === "Home"
                    ? "/"
                    : `/#${page.toLowerCase().replace(/ /g, "-")}`);

                return (
                  <Link
                    key={page}
                    // replaces any space in between words with a dash
                    href={
                      page === "Home"
                        ? "/"
                        : `/#${page.toLowerCase().replace(/ /g, "-")}`
                    } // handle active link state using next.js since tailwind css won't
                    className={`m-2 mb-0 pb-1 transition-colors duration-300 ease-in-out ${
                      isActive
                        ? "border-b-[1px] border-gray-950"
                        : "hover:border-b-[1px] hover:border-[#637381] hover:text-body-color"
                    }`}
                  >
                    {page}
                  </Link>
                );
              })}
            </div>

            {/* mobile hamburger icon button */}
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 "
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
          id="mobile-nav-menu-wrapper"
            className={`md:hidden absolute top-0 min-h-screen overflow-hidden right-0 w-full bg-beige-100  transform origin-top-left z-30 ${
              isAnimatingOut ? "animate-close-menu" : "animate-open-menu"
            }`}
            aria-label="mobile"
          >
            <div className="flex justify-end h-16 px-6">
              <button
                className="inline-flex items-center justify-center p-2"
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
            <div className=" pt-2 pb-3 ">
              {pagesArr.map((page) => {
                const isActive =
                  router.pathname ===
                  (page === "Home"
                    ? "/"
                    : `/#${page.toLowerCase().replace(/ /g, "-")}`);

                return (
                  <Link
                    key={page}
                    href={
                      page === "Home"
                        ? "/"
                        : `/#${page.toLowerCase().replace(/ /g, "-")}`
                    }
                    className={`text-base leading-6 flex items-center py-2 px-14 text-[22px] mt-1 `}
                  >
                    <span
                      className={`transition-colors duration-300 ease-in-out ${
                        isActive
                          ? "pb-2 border-b-[1px] border-gray-950"
                          : "pb-2 hover:border-b-[1px] hover:border-gray-950"
                      }`}
                    >
                      {page}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
