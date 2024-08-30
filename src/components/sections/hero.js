import Image from "next/image";
import React from "react";

const hero = () => {
  // I also like this hero example: https://tailwindui.com/components/marketing/sections/heroes
  return (
    <section>
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Background Image"
            fill
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Unlock Your Property Management Potential with Expert Appfolio
            Solutions
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            With over 20 years of combined experience, Prime PM Consulting
            offers specialized support and consulting to enhance your property
            management efficiency and profitability. From accounting and
            bookkeeping to operations and workflow optimization, our dedicated
            team of experts is here to help you succeed.
          </p>
          <a
            href="#contact-us"
            className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default hero;
