import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Inter } from "next/font/google";

import pagesArr from "@/util/pagesArr";

const inter = Inter({ subsets: ["latin"] });

const Footer = () => {
  // if/when the client gives you a new logo, come back & use that here
  // then adjust the columns & breakpoints as needed to fit the content with the new logo
  return (
    <footer
      className={`text-slate-700 text-base bg-white tracking-wide ${inter.className}`}
    >
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
                  src="/images/logo.png"
                  className="w-full h-full top-0 left-0 object-cover"
                  alt="Prime PM Consulting Logo"
                  fill
                />
              </Link>
            </div>
            <p className="max-w-[30rem] text-balance">
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
            <div
              id="company"
              className="md:col-span-1 lg:col-span-3 xl:col-span-1"
            >
              <h4 className=" font-semibold ">Company</h4>
              <ul className="list-none mt-4 space-y-2">
                {pagesArr.map((page) => (
                  <li key={page}>
                    <Link
                      // replaces any space in between words with a dash
                      href={
                        page === "Home"
                          ? "/"
                          : `/#${page.toLowerCase().replace(/ /g, "-")}`
                      }
                      className="leading-6"
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
              className="md:col-span-1 lg:col-span-4 xl:col-span-1"
            >
              <h4 className="font-semibold ">Business Hours</h4>
              <ul className="mt-4 space-y-2">
                <li className="">Mon - Fri: 8am - 5pm</li>
              </ul>
            </div>

            {/* Contact Us */}
            <div
              id="contact"
              className="md:col-span-2 lg:col-span-4 xl:col-span-1 "
            >
              <h4 className="font-semibold ">Contact Us</h4>
              <ul className="mt-4 space-y-2">
                <li className="">012-345-6789</li>
                <li className="">
                  <Link href={"mailto:amanda@primepmconsulting.com"}>
                    amanda@primepmconsulting.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* //  bottom portion of the footer */}
        <div className="border-t-[1px] border-gray-200 mt-16 pt-8 sm:mt-20 lg:mt-24">
          <span className=" sm:text-center ">
            © 2023{" "}
            <a href="https://flowbite.com/" className="">
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
