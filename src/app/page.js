import Services from "@/components/sections/services";
import AboutUs from "@/components/sections/aboutUs";
import Testimonials from "@/components/sections/testimonials";
import ContactUs from "@/components/sections/contactUs";
import Hero from "@/components/sections/hero";

const Home = () => {
  return (
    <main>
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
};

export default Home;
