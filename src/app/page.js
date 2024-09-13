import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import AboutUs from "@/components/sections/aboutUs";
import Testimonials from "@/components/sections/testimonials";
import GoogleMaps from "@/components/sections/googleMaps";
import ContactUs from "@/components/sections/contactUs";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      {/* Services Section */}
      <Services />
      {/* About Us Section */}
      <AboutUs />
      {/* Testimonials Section */}
      <Testimonials />
      {/* Google Maps Section */}
      <GoogleMaps />
      {/* Contact Us Section */}
      <ContactUs />
    </>
  );
};

export default Home;
