import React from "react";

const googleMaps = () => {
  return (
    // from : https://tailwindflex.com/@kofi-osei/google-map-iframe-with-tailwind
    <section className="relative w-full h-96 bg-beige-100">
      <iframe
        className="absolute top-0 left-0 w-full h-full bottom-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d203134.07159281167!2d-121.98090565410124!3d37.29584794239259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcae48af93ff5%3A0xb99d8c0aca9f717b!2sSan%20Jose%2C%20CA!5e0!3m2!1sen!2sus!4v1726251620080!5m2!1sen!2sus"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default googleMaps;
