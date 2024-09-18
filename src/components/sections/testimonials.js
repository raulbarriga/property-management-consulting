import React from "react";
import { Playfair_Display, Open_Sans } from "next/font/google";
import Image from "next/image";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

const testimonials = () => {
  return (
    <section
      id="services"
      className={`${openSans.className} bg-beige-100 text-black pb-12 lg:pb-[90px]`}
    >
      {/* */}
      <h2
        className={`custom-about-lg:mb-5 ${playfairDisplay.className} text-6xl custom-headers-xs:text-[4.5rem] custom-headers:text-[5rem] font-normal text-center pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] px-4 sm:px-6 lg:px-8`}
      >
        {/* What Our Client Say */}
        Trusted Expertise:
      </h2>
      {/* second heading */}
      <div className="mx-auto max-w-lg md:max-w-[44rem] lg:max-w-[44rem] text-center pb-8 sm:pb-12 lg:pb-16">
        {/* mb-6 */}
        <h2 className="font-bold text-3xl sm:text-4xl px-4 ">
          Don&#39;t just take our word for it...
        </h2>
        <p className="mt-4 text-pretty text-body-color px-4">
          Hear from Our Clients After 20+ Years of Property Management Success
        </p>
      </div>
      {/* testimonial wrapper */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          id="testimonial-inner-wrap"
          className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-8 xl:gap-12"
        >
          {/* testimonial 1 */}
          <div className="flex flex-col relative lg:after:absolute lg:after:-right-[1rem] xl:after:-right-[1.55rem] lg:after:top-0 lg:after:w-[1px] lg:after:bg-black lg:after:h-[90%] pb-10 lg:pr-8 xl:pr-20 border-solid border-black border-b-[1px] lg:border-none">
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-gray-900">
                <p>
                  “Working with Prime PM Consulting has been an absolute
                  game-changer for our property management process. Their
                  insights and recommendations streamlined our operations and
                  helped us reduce costs significantly. We now manage our
                  properties more efficiently and with greater confidence. I
                  highly recommend their consulting services!”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <div className="relative h-14 w-14">
                  <Image
                    alt=""
                    fill
                    // src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"

                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&h=256&auto=format&fit=facearea&facepad=2&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="object-cover rounded-full bg-gray-50"
                  />
                </div>
                <div className="text-base">
                  <div className="font-semibold text-gray-900">
                    Judith Black
                  </div>
                  <div className="mt-1 text-gray-500">Property Owner</div>
                </div>
              </figcaption>
            </figure>
          </div>
          {/* testimonial 2 */}
          <div className="flex flex-col relative lg:after:absolute lg:after:-right-0 lg:after:-bottom-[1rem] xl:after:-bottom-[1.55rem] lg:after:w-[90%] lg:after:bg-black lg:after:h-[1px] lg:pl-8 py-10 lg:pb-10 lg:pt-0 xl:pl-20 border-solid border-black border-b-[1px] lg:border-none">
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-gray-900">
                <p>
                  “We were struggling with tenant turnover and maintenance
                  issues until we consulted Prime PM Consulting. Their team
                  quickly identified key areas for improvement and provided
                  actionable strategies that have increased tenant retention and
                  improved property maintenance. Their expertise has made a real
                  difference in our business.”
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
                  <div className="mt-1 text-gray-500">Property Manager</div>
                </div>
              </figcaption>
            </figure>
          </div>
          {/* testimonial 3 */}
          <div className="flex flex-col py-10 lg:pb-0 lg:pr-8 xl:pr-20 relative lg:after:absolute lg:after:-left-0 lg:after:-top-[1rem] xl:after:-top-[1.55rem] lg:after:w-[90%] lg:after:bg-black lg:after:h-[1px] border-solid border-black border-b-[1px] lg:border-none">
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-gray-900">
                <p>
                  “Prime PM Consulting helped us implement better financial
                  management systems for our portfolio of rental properties.
                  Their attention to detail and industry knowledge have boosted
                  our profitability and improved the transparency of our
                  operations. We couldn&#39;t be happier with the results!”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <div className="relative h-14 w-14">
                  <Image
                    alt=""
                    fill
                    // src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"

                    src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=256&h=256&auto=format&fit=facearea&facepad=2&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="object-cover rounded-full bg-gray-50"
                  />
                </div>
                <div className="text-base">
                  <div className="font-semibold text-gray-900">Lisa M.</div>
                  <div className="mt-1 text-gray-500">Real Estate Investor</div>
                </div>
              </figcaption>
            </figure>
          </div>
          {/* testimonial 4 */}
          <div className="flex flex-col relative lg:before:absolute lg:before:-left-[1rem] xl:before:-left-[1.55rem] lg:before:bottom-0 lg:before:w-[1px] lg:before:bg-black lg:before:h-[90%] pt-10 lg:pl-8 xl:pl-20">
            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-gray-900">
                <p>
                  “As a first-time property owner, I was overwhelmed by the
                  complexities of managing multiple units. The consultants at
                  Prime PM Consulting walked me through every step of the
                  process, from tenant screening to lease agreements. Their
                  support has been invaluable, and I feel much more confident in
                  handling my properties now.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-x-6">
                <div className="relative h-14 w-14">
                  <Image
                    alt=""
                    fill
                    // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"

                    src="https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?q=80&w=256&h=256&auto=format&fit=facearea&facepad=2&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="object-cover rounded-full bg-gray-50"
                  />
                </div>
                <div className="text-base">
                  <div className="font-semibold text-gray-900">David R.</div>
                  <div className="mt-1 text-gray-500">New Property Owner</div>
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
