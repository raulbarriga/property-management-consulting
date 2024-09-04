import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Playfair_Display, Open_Sans } from "next/font/google";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

const hero = () => {
  return (
    <section
      id="hero"
      className="relative h-[calc(100vh-64px)] flex items-center justify-start"
    >
      {/* background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
          alt="Background Image"
          fill
          priority
          // object-center
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 via-60% to-transparent"></div>
      </div>
      {/* hero text */}
      {/* absolute inset-0 */}
      <div className="hero-text-wrap   text-white z-10 flex flex-col justify-center items-start h-full text-center sm:text-left">
        <h1
          // font-bold leading-tight
          // sm:text-5xl
          //mb-2 min-945px:
          className={`text-3xl sm:text-[2.5rem] min-945px:text-5xl ${playfairDisplay.className} font-semibold min-945px:font-bold mb-4 px-6 min-945px:pl-12 text-left max-w-4xl`}
        >
          {/* Unlock Your Property Management Potential with Expert Appfolio
          Solutions */}
          Enhance Your Property Management with Appfolio Expertise
        </h1>
        {/* <p
          // text-gray-300
          //  text-lg text-left
          // max-w-lg
          // mb-8
          className={`${openSans.className} sm:text-lg/relaxed mb-4 px-6 min-945px:pl-12 max-w-4xl `}
        >
          With over 20 years of combined experience, we offer specialized
          support and consulting to enhance your property management efficiency
          and profitability.
        </p> */}
        <p
          // text-gray-300
          //  text-lg text-left
          // max-w-lg
          className={`${openSans.className} sm:text-lg/relaxed mb-8 px-6 min-945px:pl-12 max-w-4xl `}
        >
          {/* From accounting and bookkeeping to operations and workflow
          optimization, our dedicated team of experts is here to help you
          succeed. */}
          With 20+ years of experience, we streamline your operations&nbsp;—&nbsp;from
          bookkeeping and accounting to workflow optimization. Our team is here
          to boost your efficiency and profitability.
        </p>
        <Link
          href="#contact-us"
          className={`${openSans.className} ml-6 min-945px:ml-12 text-base font-medium border border-transparent rounded-md py-3 px-7 bg-forest-green hover:bg-opacity-90`}
        >
          Get Started Today
        </Link>
      </div>
    </section>
  );
};

export default hero;

/*
<section id="hero">
      <div className="relative bg-gradient-to-r from-black to-white h-[calc(100vh-64px)] text-white overflow-hidden">
        <div className="absolute">
          <Image
            src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Background Image"
            fill
            className="object-cover object-center w-full h-full"
          />
          // /* bg-black opacity-50 bg-gradient-to-r from-black to-white inset-0 */
// <div className="absolute bg-white bg-gradient-to-b from-blue-50 to-transparent"></div>
//</div>

// /* text */
// <div className="relative z-10 flex flex-col justify-center items-start h-full text-center">
//   <h1
// className={`text-5xl ${playfairDisplay.className} font-bold leading-tight mb-4 pl-12 text-left max-w-4xl`}
//   >
//     Unlock Your Property Management Potential with Expert Appfolio
//     Solutions
//   </h1>
// <p
//   className={`${openSans.className} text-lg text-gray-300 mb-8 pl-12 text-left max-w-4xl`}
// >
//   With over 20 years of combined experience, Prime PM Consulting
//   offers specialized support and consulting to enhance your property
//   management efficiency and profitability. From accounting and
//   bookkeeping to operations and workflow optimization, our dedicated
//   team of experts is here to help you succeed.
// </p>
/* <Link
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
    </section> */
/* //</div> */

// hero 2
{
  /* <div className="relative w-full h-screen"> */
}
{
  /* Background Image */
}
{
  /* <Image
        src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
        alt="Hero Image"
        fill
        quality={100}
        className="z-0 object-cover"
      /> */
}

{
  /* Gradient Overlay */
}
{
  /* opacity-60 opacity-90 */
}
{
  /* <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent  z-10"></div> */
}

{
  /* Text on top */
}
{
  /* <div className="absolute inset-0 flex flex-col items-start justify-center z-20"> */
}
{
  /* <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
          Your Hero Text Here
        </h1> */
}
{
  /* <h1
          className={`text-5xl ${playfairDisplay.className} text-white font-bold leading-tight mb-4 pl-12 text-left max-w-4xl`}
        >
          Unlock Your Property Management Potential with Expert Appfolio
          Solutions
        </h1>
        <p
          className={`${openSans.className} text-lg text-gray-300 mb-8 pl-12 text-left max-w-4xl`}
        >
          With over 20 years of combined experience, Prime PM Consulting offers
          specialized support and consulting to enhance your property management
          efficiency and profitability. From accounting and bookkeeping to
          operations and workflow optimization, our dedicated team of experts is
          here to help you succeed.
        </p>
      </div>
    </div> */
}
