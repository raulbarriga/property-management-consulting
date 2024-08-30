import Image from "next/image";
import React from "react";
import { Playfair_Display, Open_Sans } from "next/font/google";
import Headshot from "../../../public/images/headshot.jpeg";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

const aboutUs = () => {
  return (
    // items-center md:flex-row
    <section
      id="about-us"
      className="flex flex-col justify-center relative text-slate-700 bg-beige-100/70 min-h-[61.95rem] custom-about-sm:min-h-[1086px] custom-about-md:max-h-[1306px] custom-about-lg:min-h-[811px] custom-about-xl:min-h-[932px]"
    >
      {/* bottom box  */}
      <div className="relative z-0 w-custom-about-calc w-custom-about-calc-sm h-[16.45rem] custom-about-sm:h-32 custom-about-sm:mt-[60px] custom-about-md:w-custom-about-calc-md custom-about-md:mt-[1082px] custom-about-lg:w-custom-about-calc-lg custom-about-lg:h-[9.25rem] custom-about-lg:mt-[37.7rem] custom-about-xl:w-custom-about-calc-xl custom-about-xl:h-[11.75rem] custom-about-xl:mt-[4.375rem] mt-[3.75rem] mr-0 mb-0 ml-auto bg-forest-green"></div>

      <div className="custom-about-sm:w-[21.25rem] custom-about-sm:-mt-[60.375rem] custom-about-sm:-mb-[45rem] custom-about-md:w-[33.75rem] custom-about-md:-mt-[73.15rem] custom-about-lg:w-[45rem] custom-about-lg:-mt-[43.2rem] custom-about-lg:mb-[3.75rem] custom-about-xl:w-[58.75rem] custom-about-xl:-mt-[50.75rem] flex flex-col w-[71.25rem]  mx-auto -mt-[54.45rem] -mb-[26.75rem]">
        {/*  custom-about-sm:mx-0 */}
        <div className="flex flex-wrap min-h-fit max-w-full">
          {/* had no media queries */}
          {/* left text div */}
          <div className="custom-about-sm:min-h-[30.06rem] custom-about-md:min-h-[28.45rem] custom-about-lg:min-h-[40.125rem] custom-about-xl:min-h-[38.7rem] relative z-2 flex flex-col min-h-[46.95rem] grow-0 shrink-0 basis-[45%] max-w-[45%] max-h-[45%]  ">
            <div className="custom-about-md:px-[0.625rem] custom-about-lg:px-[1.875rem] pt-[1.875rem] pr-[2.82rem] pb-[1.875rem] pl-[1.875rem]">
              <h2
                className={`custom-about-sm:text-5xl custom-about-lg:text-6xl ${playfairDisplay.className} text-[5rem] font-normal m-0`}
              >
                About Us
              </h2>
              <p
                className={`custom-about-lg:mr-0 custom-about-xl:mr-[1.18rem] ${openSans.className} text-lg mt-0 mr-[6.8125rem] mb-0 ml-0`}
              >
                <span className="font-bold">Prime PM Consulting</span> is the
                leading expert in Appfolio solutions, providing a comprehensive
                range of services including day-to-day support, accounting, and
                operations. With{" "}
                <span className="font-bold">
                  over 20 years of combined experience
                </span>
                , our dedicated team of Appfolio experts has a proven track
                record of helping companies like yours increase revenue by
                maximizing productivity to better your business processes,
                enhance efficiency, and drive success.
              </p>
              <p
                className={`custom-about-lg:mr-0 custom-about-xl:mr-[1.18rem] ${openSans.className} text-lg mt-8 mr-[6.8125rem] mb-0 ml-0`}
              >
                <span className="font-bold">Contact us today</span> to learn
                more about taking the next steps and refining your property
                management business.
              </p>
            </div>
          </div>
          {/* right image div */}
          <div
            id="image-outermost-parent"
            className="flex custom-about-sm:min-h-[403px] custom-about-md:min-h-[617px] custom-about-lg:min-h-[642px] custom-about-xl:min-h-[714px] min-h-[751px] grow-0 shrink-0 basis-[55%] max-w-[55%] max-h-[55%]"
          >
            {/* container for top box & image md:w-1/2 relative mt-8 md:mt-0 */}
            <div className="flex flex-col flex-1  ">
              {/* top box [#478ac9] */}
              <div id="top-box" className="custom-about-sm:w-[258px] custom-about-sm:h-[276px] custom-about-lg:w-[354px] relative z-1 w-[428px] h-[378px] my-0 mr-0 ml-auto bg-slate-700"></div>
              {/* 
From 1199px down to 991px viewport width, the image overflows to the right. Need to contain it in its container              

              */}
              <div
                id="image-parent"
                className="custom-about-sm:w-[273px] custom-about-sm:h-[387px] custom-about-sm:-mt-[14.75rem] custom-about-sm:ml-[1.675rem] custom-about-md:w-[414px] custom-about-md:h-[554px] custom-about-md:ml-auto custom-about-lg:w-[333px] custom-about-lg:h-[531px] custom-about-lg:-mt-[19.675rem] custom-about-xl:w-[445px] custom-about-xl:h-[642px] relative -mt-[19.13rem] w-[555px] h-[679px] mr-auto mb-0 ml-0"
              >
                {/* 
                original Image props:
                src={Headshot}
                  alt="About us"
                  className="z-2 drop-shadow-md"
                */}
                <Image
                  src={Headshot}
                  alt="About us"
                  fill
                  // w-full aspect-[1024/1069]
                  className="z-2 drop-shadow-md object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default aboutUs;
