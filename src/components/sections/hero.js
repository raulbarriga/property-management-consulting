import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Playfair_Display, Open_Sans } from "next/font/google";
import Img from "../../../public/video/poster-img.png"

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

const hero = () => {
  return (
    <section
      id="hero"
      className="relative h-[calc(100vh-64px)] flex items-center justify-start"
    >
      {/* background image */}
      {/* md:hidden will hide the image on viewport widths of 768px & higher */}
      <div className="md:hidden absolute inset-0 w-full h-full">
        <Image
        // "/public/video/poster-img.png"
          src={Img}
          alt="Background Image"
          fill
          priority
          // object-center
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#efe5dc] via-[#efe5dc]/30 via-70% to-transparent"></div>
      </div>
      {/* video background */}
      {/* hidden by default, md:block shows the video only on viewport widths of 768px & higher */}
      <div className="hidden md:block absolute inset-0 w-full h-full">
        <video
          muted
          playsInline
          poster="../../../public/video/poster-img.png"
          loop
          autoPlay
          className="w-full h-full object-cover"
        >
          {/* video height needs fixing */}
          <source src="/video/San Francisco Bay.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#efe5dc] via-[#efe5dc]/30 via-70% to-transparent"></div>
      </div>
      {/* hero text */}
      <div className="hero-text-wrap text-white z-10 flex flex-col justify-center items-start h-full text-center sm:text-left">
        <h1
          className={`text-3xl sm:text-[2.5rem] min-945px:text-5xl ${playfairDisplay.className} font-semibold min-945px:font-bold mb-4 px-6 min-945px:pl-12 text-left max-w-4xl text-black`}
        >
          Enhance Your Property Management with Appfolio Expertise
        </h1>
        <p
          className={`${openSans.className} sm:text-lg/relaxed mb-8 px-6 min-945px:pl-12 max-w-4xl text-black`}
        >
          With 20+ years of combined experience, we streamline your
          operations&nbsp;—&nbsp;from bookkeeping and accounting to workflow
          optimization. Our team is here to boost your efficiency and
          profitability.
        </p>
        <Link
          href="#contact-us"
          className={`${openSans.className} ml-6 min-945px:ml-12 text-base font-medium border border-transparent rounded-md py-3 px-7 bg-black hover:bg-transparent hover:border hover:border-black hover:text-black`}
        >
          Get Started Today
        </Link>
      </div>
    </section>
  );
};

export default hero;
