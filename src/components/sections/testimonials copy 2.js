import React from "react";
import { Playfair_Display, Open_Sans } from "next/font/google";
import Image from "next/image";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

const testimonials = () => {
  return (
    <section
      id="services"
      className={`${openSans.className} bg-beige-100 text-black`}
    >
      <h2
        className={`custom-about-lg:mb-5 ${playfairDisplay.className} text-6xl custom-headers-xs:text-[4.5rem] custom-headers:text-[5rem] font-normal text-center pt-20 lg:pt-[120px] pb-12 lg:pb-[90px]`}
      >
        {/* What Our Client Say */}
        Trusted Expertise:
      </h2>
      {/* second heading */}
      <div className="mx-auto max-w-lg md:max-w-[44rem] lg:max-w-[44rem] text-center mb-6">
        <h2 className="font-bold text-3xl sm:text-4xl px-4">
          Don&#39;t just take our word for it...
        </h2>
        <p className="mt-4 text-pretty text-body-color px-4">
          Hear from Our Clients After 20+ Years of Property Management Success
        </p>
      </div>
      {/* testimonial wrapper */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div id="testimonial-inner-wrap" className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* testimonial 1 */}
          <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
            <div className="relative h-12 w-[105px] self-start">
              <Image
                alt=""
                src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg"
                fill
                className="object-contain"
              />
            </div>
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-gray-900">
                <p>
                  “Amet amet eget scelerisque tellus sit neque faucibus non
                  eleifend. Integer eu praesent at a. Ornare arcu gravida
                  natoque erat et cursus tortor consequat at. Vulputate gravida
                  sociis enim nullam ultricies habitant malesuada lorem ac.
                  Tincidunt urna dui pellentesque sagittis.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <div className="relative h-14 w-14">
                  <Image
                    alt=""
                    fill
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                    className="object-cover rounded-full bg-gray-50"
                  />
                </div>
                <div className="text-base">
                  <div className="font-semibold text-gray-900">
                    Judith Black
                  </div>
                  <div className="mt-1 text-gray-500">CEO of Tuple</div>
                </div>
              </figcaption>
            </figure>
          </div>
          {/* testimonial 2 */}
          <div className="flex flex-col border-t-[1px] border-black pt-10 sm:pt-16 lg:border-l-[1px] lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
            <div className="relative h-12 w-[104px] self-start">
              <Image
                alt=""
                fill
                src="https://tailwindui.com/img/logos/reform-logo-gray-900.svg"
                className="object-contain"
              />
            </div>
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-gray-900">
                <p>
                  “Excepteur veniam labore ullamco eiusmod. Pariatur consequat
                  proident duis dolore nulla veniam reprehenderit nisi officia
                  voluptate incididunt exercitation exercitation elit. Nostrud
                  veniam sint dolor nisi ullamco.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <div className="relative h-14 w-14">
                  <Image
                    alt=""
                    fill
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                    className="object-cover rounded-full bg-gray-50"
                  />
                </div>
                <div className="text-base">
                  <div className="font-semibold text-gray-900">
                    Joseph Rodriguez
                  </div>
                  <div className="mt-1 text-gray-500">CEO of Reform</div>
                </div>
              </figcaption>
            </figure>
          </div>
          {/* testimonial 3 */}
          <div className="flex flex-col border-t-[1px] border-black pt-10 sm:pt-16 lg:border-l-[1px] lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
            <div className="relative h-12 w-[104px] self-start">
              <Image
                alt=""
                fill
                src="https://tailwindui.com/img/logos/reform-logo-gray-900.svg"
                className="object-contain"
              />
            </div>
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-gray-900">
                <p>
                  “Excepteur veniam labore ullamco eiusmod. Pariatur consequat
                  proident duis dolore nulla veniam reprehenderit nisi officia
                  voluptate incididunt exercitation exercitation elit. Nostrud
                  veniam sint dolor nisi ullamco.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <div className="relative h-14 w-14">
                  <Image
                    alt=""
                    fill
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                    className="object-cover rounded-full bg-gray-50"
                  />
                </div>
                <div className="text-base">
                  <div className="font-semibold text-gray-900">
                    Joseph Rodriguez
                  </div>
                  <div className="mt-1 text-gray-500">CEO of Reform</div>
                </div>
              </figcaption>
            </figure>
          </div>
          {/* testimonial 4 */}
          <div className="flex flex-col border-t-[1px] border-black pt-10 sm:pt-16 lg:border-l-[1px] lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
            <div className="relative h-12 w-[104px] self-start">
              <Image
                alt=""
                fill
                src="https://tailwindui.com/img/logos/reform-logo-gray-900.svg"
                className="object-contain"
              />
            </div>
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-gray-900">
                <p>
                  “Excepteur veniam labore ullamco eiusmod. Pariatur consequat
                  proident duis dolore nulla veniam reprehenderit nisi officia
                  voluptate incididunt exercitation exercitation elit. Nostrud
                  veniam sint dolor nisi ullamco.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <div className="relative h-14 w-14">
                  <Image
                    alt=""
                    fill
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                    className="object-cover rounded-full bg-gray-50"
                  />
                </div>
                <div className="text-base">
                  <div className="font-semibold text-gray-900">
                    Joseph Rodriguez
                  </div>
                  <div className="mt-1 text-gray-500">CEO of Reform</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default testimonials;
