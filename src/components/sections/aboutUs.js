import Image from "next/image";
import React from "react";
import { Playfair_Display, Open_Sans } from "next/font/google";
import Headshot from "../../../public/images/headshot.jpeg";
import Link from "next/link";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

const aboutUs = () => {
  return (
    // bg-white bg-beige-100/70
    <section className="overflow-hidden px-5 pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between -mx-4">
          {/* left side */}
          {/* lg:w-6/12 ////  lg:w-5/12 or lg:w-4/12 */}
          <div
            id="outside-image-parent"
            className="w-full px-4 lg:w-5/12 max-w-[514px] max-h-[537px] mx-auto"
          >
            <div className="relative w-full h-full">
              <Image
                src={Headshot}
                alt="CEO image"
                // fill rounded-2xl
                className="w-full rounded-2xl drop-shadow-2xl"
              />
            </div>
          </div>
          {/* 
At a viewport of 1280×720 the image was displayed 604 pixels wide, but the closest provided image has a width of 1024 which is 41% (0.71 megapixels) off. The affected viewports are 300×169–3000×4000.

Try using the following image sizes in <img srcset="…"> instead:
624×651, 768×802, 1024×1069, 1248×1303, 1400×1462, 1536×1604

Loading a large image and display it much smaller should be avoided to save bandwidth. Loading a small image and display it much larger should be avoided to prevent pixelated artifacts.

<img
	alt="CEO image"
	loading="lazy"
	width="1024"
	height="1069"
	decoding="async"
	data-nimg="1"
	class="w-full "
	style="color:transparent"
	srcset="
		/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheadshot.f4d03f98.jpeg&w=1080&q=75 1x,
		/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheadshot.f4d03f98.jpeg&w=2048&q=75 2x
	"
	src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheadshot.f4d03f98.jpeg&w=2048&q=75"
>

*/}
          {/* right side */}
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12 mx-auto">
            <div className="mt-10 lg:mt-0">
              {/* <span className="block mb-4 text-lg font-semibold text-blue-600">
                Why Choose Us
              </span> */}
              {/* mb-5 text-3xl font-bold text-black sm:text-[40px]/[48px] */}
              <h2
                className={`custom-about-sm:text-5xl custom-about-lg:text-6xl custom-about-lg:mb-5 ${playfairDisplay.className} text-[5rem] font-normal`}
              >
                About Us
              </h2>
              {/* mb-5 text-base text-gray-600 */}
              <p
                className={`${openSans.className} text-lg text-gray-600 text-pretty`}
              >
                <span className="font-bold text-pretty">
                  Prime PM Consulting
                </span>{" "}
                is the leading expert in Appfolio solutions, providing a
                comprehensive range of services including day-to-day support,
                accounting, and operations. With{" "}
                <span className="font-bold text-pretty">
                  over 20 years of combined experience
                </span>
                , our dedicated team of Appfolio experts has a proven track
                record of helping companies like yours increase revenue by
                maximizing productivity to better your business processes,
                enhance efficiency, and drive success.
              </p>
              {/* "mb-8 text-base text-gray-600" */}
              <p
                className={`${openSans.className} text-lg  text-gray-600 py-5 text-pretty`}
              >
                <span className="font-bold">Contact us today</span> to learn
                more about taking the next steps and refining your property
                management business.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-forest-green hover:bg-opacity-90"
                //
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default aboutUs;
