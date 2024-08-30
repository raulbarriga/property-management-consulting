import Image from "next/image";
import React from "react";
import { Playfair_Display, Open_Sans } from "next/font/google";
import Headshot from "../../../public/images/headshot.jpeg";
import Link from "next/link";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

const aboutUs = () => {
  return (
    <section className="overflow-hidden px-5 pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between -mx-4">
          {/* left side */}
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex items-center -mx-3 sm:-mx-4">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                {/* <div className="py-3 sm:py-4">
                  <Image
                    src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                    alt=""
                    fill
                    className="w-full rounded-2xl"
                  />
                </div>
                <div className="py-3 sm:py-4">
                  <Image
                    src="https://i.ibb.co/rfHFq15/image-2.jpg"
                    alt=""
                    fill
                    className="w-full rounded-2xl"
                  />
                </div> */}
                <div className="relative w-full h-full">
                  <Image
                    src={Headshot}
                    alt="CEO image"
                    // fill rounded-2xl
                    className="w-full "
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="relative z-10 my-4">
                  <Image
                    src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                    alt=""
                    fill
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="mt-10 lg:mt-0">
              <span className="block mb-4 text-lg font-semibold text-blue-600">
                Why Choose Us
              </span>
              <h2 className="mb-5 text-3xl font-bold text-black sm:text-[40px]/[48px]">
                Make your customers happy by giving services.
              </h2>
              <p className="mb-5 text-base text-gray-600">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less.
              </p>
              <p className="mb-8 text-base text-gray-600">
                A domain name is one of the first steps to establishing your
                brand. Secure a consistent brand image with a domain name that
                matches your business.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-blue-600 hover:bg-opacity-90"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default aboutUs;
