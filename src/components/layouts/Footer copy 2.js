import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../public/images/logo.png";
import pagesArr from "@/util/pagesArr";

const Footer = () => {
  // note: footer looks good for the 3 columns (just needs to be responsive)
  // trying the 3 columns now without the first 2 being together
  return (
    // the column structure looks good from 1277px viewport width & up
    // check the bottom padding/margin for the last footer part under the horizontal line
    // make the rest of the columns responsive now
    <footer className="text-gray-200 bg-white tracking-wide">
      {/* mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32 */}
      {/* xl:grid xl:grid-cols-3 xl:gap-8 */}
      <div className="py-14 px-6 sm:px-10 grid">
        {/* container for all columns */}
        <div className="grid md:grid-cols-4 lg:grid-cols-6 grid-cols-1 gap-7">
          {/* logo & company info */}
          {/* lg:col-span-4 col-span-12 */}
          <div className="mb-6 col-span-2">
            <div className="relative w-80 h-40 mb-4">
              <Link href={"/"} className="">
                <Image
                  src={Logo}
                  className="object-contain"
                  alt="Prime PM Consulting Logo"
                  layout="fill"
                />
              </Link>
            </div>
            <p className="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              cumque culpa. Quibusdam tenetur, fugit error maiores nostrum
              similique cum ea, obcaecati saepe ipsa eveniet aperiam voluptatem
              autem eligendi commodi accusamus?
            </p>
          </div>
          {/* other 3 columns */}
          {/* mt-16  xl:col-span-2 */}
          <div className="grid grid-cols-2 col-span-4 gap-8  xl:mt-0">
            {/* md:grid md:grid-cols-2 md:gap-8 */}
            <div className="grid grid-cols-2 ml-16">
              {/* Company */}
              <div className="">
                {/* space-y-4 */}
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
              <div className="mt-10 md:mt-0">
                <h4 className="font-semibold text-gray-700">Business Hours</h4>
                <ul className="mt-4 space-y-2">
                  <li className="text-sm text-gray-700">
                    Mon - Fri: 8am - 5pm
                  </li>
                </ul>
              </div>
            </div>

            <div className="ml-16">
              {/* Contact Us */}
              <div className="">
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
        </div>
        {/* my-6 lg:my-8 */}
        {/* <hr className="my-6 lg:my-8 border-gray-200 sm:mx-auto " /> */}
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

/*

*/

/*
social accounts 
<div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord community</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fill-rule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Dribbble account</span>
            </a>
          </div>
*/
