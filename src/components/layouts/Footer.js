import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { Nunito } from "next/font/google";
// import { Inter } from "next/font/google";

import Logo from "../../../public/images/logo.png";
import pagesArr from "@/util/pagesArr";

const Footer = () => {
  // const nunito = Nunito({ subsets: ["latin"] });

  // note: footer looks good for the 3 columns (just needs to be responsive)
  // trying the 3 columns now without the first 2 being together
  return (
    // the column structure looks good from 1277px viewport width & up
    // check the bottom padding/margin for the last footer part under the horizontal line
    // make the rest of the columns responsive now
    <footer className="text-gray-200 font-nunito bg-white tracking-wide">
      <div className="pt-14 pb-8 px-6 sm:px-10">
        {/* container for all columns */}
        <div
          id="grid-parent"
          className="grid md:grid-cols-4 lg:grid-cols-6 grid-cols-1 gap-7"
        >
          {/* logo & company info */}
          <div className="mb-6 col-span-2">
            <div className="relative lg:w-full max-w-80 h-40 mb-4">
              <Link href={"/"} className="">
                <Image
                  src={Logo}
                  className="w-full h-full top-0 left-0 object-cover"
                  alt="Prime PM Consulting Logo"
                  objectFit="cover"
                  fill
                />
              </Link>
            </div>
            <p className="text-gray-700 text-sm max-w-[30rem] text-balance">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              cumque culpa. Quibusdam tenetur, fugit error maiores nostrum
              similique cum ea, obcaecati saepe ipsa eveniet aperiam voluptatem
              autem eligendi commodi accusamus?
            </p>
          </div>

          {/* other 3 columns */}
          <div
            id="second-grid-parent"
            className="grid custom-footer:con-span-1 custom-footer:grid-cols-1 col-span-2 grid-cols-2 md:col-span-2 md:grid-cols-2 lg:col-span-4 gap-8 lg:grid-cols-12 xl:grid-cols-3 xl:mt-0"
          >
            {/* Company */}
            <div id="company" className="md:col-span-1 lg:col-span-3 xl:col-span-1">
              <h4 className=" font-semibold text-gray-700">Company</h4>
              <ul className="list-none mt-4 space-y-2">
                {pagesArr.map((page) => (
                  <li
                    key={page}
                    className="text-gray-700 hover:text-white text-sm transition-colors duration-500 ease-in-out"
                  >
                    <Link
                      // replaces any space in between words with a dash
                      href={
                        page === "Home"
                          ? "/"
                          : `/${page.toLowerCase().replace(/ /g, "-")}`
                      }
                      className="text-sm leading-6 text-gray-700"
                    >
                      {page}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Business Hours */}
            <div
              id="business"
              className=" md:col-span-1 lg:col-span-4 xl:col-span-1 "
            >
              <h4 className="font-semibold text-gray-700">Business Hours</h4>
              <ul className="mt-4 space-y-2">
                <li className="text-sm text-gray-700">Mon - Fri: 8am - 5pm</li>
              </ul>
            </div>

            {/* Contact Us */}
            <div id="contact" className="md:col-span-2 lg:col-span-4 xl:col-span-1 ">
              <h4 className="font-semibold text-gray-700">Contact Us</h4>
              <ul className="mt-4 space-y-2">
                <li className="text-sm text-gray-700">012-345-6789</li>
                <li className="text-sm text-gray-700">
                  amanda@primepmconsulting.com
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* //  bottom portion of the footer */}
        <div className="border-t-[1px] border-gray-200 mt-16 pt-8 sm:mt-20 lg:mt-24">
          <span className="text-sm text-gray-700 sm:text-center ">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
          {/* // social accounts were here  */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
