import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Playfair_Display, Open_Sans } from "next/font/google";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

const hero = () => {
  // I also like this hero example: https://tailwindui.com/components/marketing/sections/heroes
  return (
    <section id="hero">
      <div className="relative bg-gradient-to-r from-black to-white h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Background Image"
            fill
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50 bg-gradient-to-r from-black to-white"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-start h-full text-center">
          <h1 className={`text-5xl ${playfairDisplay.className} font-bold leading-tight mb-4 pl-12 text-left max-w-4xl`}>
            Unlock Your Property Management Potential with Expert Appfolio
            Solutions
          </h1>
          <p className={`${openSans.className} text-lg text-gray-300 mb-8 pl-12 text-left max-w-4xl`}>
            With over 20 years of combined experience, Prime PM Consulting
            offers specialized support and consulting to enhance your property
            management efficiency and profitability. From accounting and
            bookkeeping to operations and workflow optimization, our dedicated
            team of experts is here to help you succeed.
          </p>
          <Link
            href="#contact-us"
            // transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-yellow-300
            // "bg-yellow-400 text-gray-900  py-2 px-6 rounded-full text-lg font-semibold "
            // inline-flex items-center justify-center text-center
            className={`${openSans.className} ml-12 text-base font-medium text-white border border-transparent rounded-md py-3 px-7 bg-forest-green hover:bg-opacity-90`}
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default hero;
