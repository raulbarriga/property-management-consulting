import Image from "next/image";
import React from "react";
import Headshot from "../../../public/images/headshot.jpeg";

const aboutUs = () => {
  // created using chatgpt
  return (
    <section className="flex flex-col md:flex-row items-center justify-center bg-white p-8 relative ">
      <div className="relative z-1 w-[calc(((100% - 1140px) / 2) + 866px)] h-[16.45rem] mt-[3.75rem] mb-0 mr-0 ml-auto bg-[#f1c50e]"></div>
      <div className="w-[71.25rem] md:w-1/2 mx-auto -mt-[54.7rem] -mb-[26.75rem]">
        <div className="flex flex-wrap min-h-fit max-w-full">
          {/* left text div */}
          <div className="flex min-h-[47rem]">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-lg text-gray-600">
              Sample text. Click to select the text box. Click again or double
              click to start editing the text. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          {/* right image div */}
          <div className="flex min-h-[47rem]">
            <div className="flex flex-col flex-1 md:w-1/2 relative mt-8 md:mt-0">
              {/* <div className="absolute -top-4 -left-4 bg-blue-500 w-40 h-40"></div> */}
              {/* absolute -bottom-4 -right-4 */}
              <div className="relative z-1 w-[26.75rem] h-[23.5rem] my-0 mr-0 ml-auto bg-[#478ac9]"></div>
              <Image
                src={Headshot}
                alt="About us"
                //  z-10
                className="relative z-2 object-cover -mt-[19.13rem] mr-auto mb-0 ml-0"
                layout="responsive"
                width={555}
                height={679}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default aboutUs;
