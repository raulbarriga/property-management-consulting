import React from "react";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

const AboutForm = () => {
  return (
    <>
      <form>
        <ContactInputBox
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
        />
        <ContactInputBox
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
        />
        <ContactInputBox
          type="tel"
          name="phone"
          id="phone"
          placeholder="Your Phone"
        />
        <ContactTextArea
          row="6"
          placeholder="Your Message"
          name="message"
          id="message"
          defaultValue=""
        />
        <div>
          <button
            type="submit"
            // p-3 removed w-full to keep button small & not too wide
            className={`${openSans.className} rounded-md border border-forest-green bg-forest-green py-3 px-7 text-white transition hover:bg-opacity-90`}
          >
            Send Message
          </button>
        </div>
      </form>
    </>
  );
};

export default AboutForm;

const ContactTextArea = ({ row, placeholder, name, defaultValue, id }) => {
  return (
    <>
      <label
        for={id}
        className="mb-[10px] block capitalize text-base font-medium text-black"
      >
        {name}
      </label>
      <div className="mb-6">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-forest-green"
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

const ContactInputBox = ({ type, placeholder, name, id }) => {
  return (
    <>
      <label
        for={id}
        className="mb-[10px] block capitalize text-base font-medium text-black"
      >
        {name}
      </label>
      <div className="relative mb-6">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          name={name}
          className="w-full bg-transparent rounded-md border border-stroke px-[14px] py-3  text-dark-6 outline-none transition focus:border-primary active:border-primary"
        //   py-[10px] pr-3 pl-12
        //   disabled:cursor-default disabled:bg-gray-2
        />
      </div>
    </>
  );
};
