import Image from "next/image";
// import { Inter, Nutino } from "next/font/google";
// import { Inter } from "next/font/google";
import Services from "../components/sections/services";
import AboutUs from "../components/sections/aboutUs";
import Testimonials from "../components/sections/testimonials";
import ContactUs from "../components/sections/contactUs";
import Hero from "../components/sections/hero";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
    // className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {/* Hero Section */}
      <Hero />
      {/* Services Section */}
      <Services />
      {/* About Us Section */}
      <AboutUs />
      {/* Testimonials Section */}
      <Testimonials />
      {/* Contact Us Section */}
      <ContactUs />
    </main>
  );
}
