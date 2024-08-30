import Image from "next/image";
import React from "react";
import { Playfair_Display, Open_Sans } from "next/font/google";
import Headshot from "../../../public/images/headshot.jpeg";
import Link from "next/link";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

const aboutUs = () => {
  // from: https://tailgrids.com/components/about
  return (
    // bg-white bg-beige-100/70 pt-20 pt-10
    <section id="about-us" className="overflow-hidden px-5 pt-0 pb-12 lg:pb-[90px] text-body-color bg-white">
      <h2
        className={`text-black custom-about-lg:text-6xl custom-about-lg:mb-5 ${playfairDisplay.className} text-[5rem] font-normal text-center pt-20 lg:pt-[120px] pb-12 lg:pb-[90px]`}
        // pb-10
      >
        About Us
      </h2>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between -mx-4">
          {/* left side */}
          {/* lg:w-6/12 ////  lg:w-5/12 or lg:w-4/12 */}
          <div
            id="outside-image-parent"
            className="w-full px-4 lg:w-5/12 max-w-[514px] max-h-[537px] mx-auto"
          >
            <div className="relative w-full after:content-[''] after:absolute after:block after:top-0 after:left-0 after:w-full after:h-full after:shadow-faded-all">
              <Image
                src={Headshot}
                alt="CEO image"
                // fill drop-shadow-2xl
                className="w-full rounded-lg"
              />
            </div>
          </div>
          {/* right side */}
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12 mx-auto">
            <div className="mt-10 lg:mt-0">
              {/* <span className="block mb-4 text-lg font-semibold text-blue-600">
                Why Choose Us
              </span> */}
              {/* mb-5 text-3xl font-bold text-black sm:text-[40px]/[48px] */}
              <span className="block mb-4 text-xl font-bold text-forest-green">
                Why Choose Us
              </span>
              <h2 className="mb-5 text-3xl font-bold text-black sm:text-[40px]/[48px]">
                Partner with the Property Management Experts
                {/* Optimize Operations and Boost Profits with Tailored Solutions */}
              </h2>
              {/* mb-5 text-base text-gray-600 */}
              <p
                className={`${openSans.className} text-lg  text-pretty`}
              >
                <span className="font-bold text-pretty">
                  Prime PM Consulting
                </span>{" "}
                is the leading expert in Appfolio solutions, providing a
                comprehensive range of services including day-to-day support,
                accounting, and operations. With{" "}
                <span className="font-bold text-pretty">
                  over 20 years of combined experience
                </span>
                , our dedicated team of Appfolio experts has a proven track
                record of helping companies like yours increase revenue by
                maximizing productivity to better your business processes,
                enhance efficiency, and drive success.
              </p>
              {/* "mb-8 text-base text-gray-600" */}
              <p
                className={`${openSans.className} text-lg   py-5 text-pretty`}
              >
                <span className="font-bold">Contact us today</span> to learn
                more about taking the next steps and refining your property
                management business.
              </p>
              <Link
                href="/#contact-us"
                className={`${openSans.className} inline-flex items-center justify-center text-base font-medium text-center text-white border border-transparent rounded-md py-3 px-7 bg-forest-green hover:bg-opacity-90`}
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
