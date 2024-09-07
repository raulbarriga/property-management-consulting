import React from 'react'
import { Playfair_Display, Open_Sans } from "next/font/google";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

const testimonials = () => {
  return (
    <section id="services" className={`${openSans.className} bg-beige-100 text-black`}>
      <h2
        className={`custom-about-lg:mb-5 ${playfairDisplay.className} text-6xl custom-headers-xs:text-[4.5rem] custom-headers:text-[5rem] font-normal text-center pt-20 lg:pt-[120px] pb-12 lg:pb-[90px]`}
        // pb-10 text-3xl sm:text-4xl
      >
        Services
      </h2>
      {/* 1st part/row */}
      <div
        id="outer-wrapper-1"
        className=" mx-auto max-w-screen-xl px-4 pb-8 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16"
      >
        {/* headline with subheadline */}
        <div id="headlines-1" className="mx-auto max-w-lg md:max-w-[44rem] lg:max-w-[44rem] text-center">
          {/* mb-5 text-3xl font-bold  sm:text-[40px]/[48px] */}
          <h2 className="font-bold text-3xl sm:text-4xl">
            Maximize Efficiency and Profits with Expert Appfolio Support
          </h2>
          <p className="mt-4 text-pretty text-body-color">
            Streamline your property management with our expert services
            tailored for Appfolio users. We specialize in:
          </p>
        </div>
        {/* cards content here */}
        <div
          id="card-wrapper"
          className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* card 1 */}
           <div className="rounded-xl p-8 shadow-xl bg-[#efe5dc] ">
            <h2 className="mt-4 text-xl font-bold">
              Monthly Accounting Cycles
            </h2>

            <p className="mt-1 text-base  text-body-color">
              Ensure accurate and timely financial reporting.
            </p>
          </div>

           <div className="rounded-xl p-8 shadow-xl bg-[#efe5dc]">
            <h2 className="mt-4 text-xl font-bold">Bank Reconciliations</h2>

            <p className="mt-1 text-base  text-body-color">
              Keep your accounts in perfect balance.
            </p>
          </div>

           <div className="rounded-xl p-8 shadow-xl bg-[#efe5dc]">
            <h2 className="mt-4 text-xl font-bold">Business Optimization</h2>

            <p className="mt-1 text-base  text-body-color">
              Enhance operational efficiency and drive profitability.
            </p>
          </div>
        </div>
      </div>
      {/* 2nd part */}
      <div
        id="outer-wrapper-2"
        className="mx-auto max-w-screen-xl px-4 pb-8 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16"
      >
        {/* headline with subheadline */}
        <div id="headlines-2" className="mx-auto max-w-lg md:max-w-[38rem] lg:max-w-[44rem] text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Comprehensive Accounting and Bookkeeping Services for Appfolio Users
          </h2>

          <p className="mt-4 text-pretty text-body-color">
            Enhance your property management with our specialized accounting
            solutions:
          </p>
        </div>
        {/* cards content here */}
        <div
          id="card-wrapper"
          className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* card 1 */}
           <div className="rounded-xl p-8 shadow-xl bg-[#efe5dc]">
            <h2 className="mt-4 text-xl font-bold">
              Accounts Payable Management
            </h2>

            <p className="mt-1 text-base  text-body-color">
              Efficiently handle vendor payments and invoices.
            </p>
          </div>
          {/* card 2 */}
           <div className="rounded-xl p-8 shadow-xl bg-[#efe5dc]">
            <h2 className="mt-4 text-xl font-bold">Full-Cycle Accounting</h2>

            <p className="mt-1 text-base  text-body-color">
              Comprehensive financial management from transaction recording to
              financial statement preparation.
            </p>
          </div>
          {/* card 3 */}
           <div className="rounded-xl p-8 shadow-xl bg-[#efe5dc]">
            <h2 className="mt-4 text-xl font-bold">
              Precise Financial Reporting
            </h2>

            <p className="mt-1 text-base  text-body-color">
              Timely and accurate monthly accounting cycles.
            </p>
          </div>
          {/* card 4 */}
           <div className="rounded-xl p-8 shadow-xl bg-[#efe5dc]">
            <h2 className="mt-4 text-xl font-bold">
              Thorough Bank Reconciliations
            </h2>

            <p className="mt-1 text-base  text-body-color">
              Seamless reconciliation to keep your accounts in order.
            </p>
          </div>
          {/* card 5 */}
           <div className="rounded-xl p-8 shadow-xl bg-[#efe5dc]">
            <h2 className="mt-4 text-xl font-bold">
              Enhanced Financial Management
            </h2>

            <p className="mt-1 text-base  text-body-color">
              Strategic insights to optimize your business operations.
            </p>
          </div>
          {/* card 6 */}
           <div className="rounded-xl p-8 shadow-xl bg-[#efe5dc]">
            <h2 className="mt-4 text-xl font-bold">1099 Preparation</h2>

            <p className="mt-1 text-base  text-body-color">
              Accurate and timely preparation of 1099 forms for tax compliance.
            </p>
          </div>
        </div>
      </div>
      {/* 3rd part */}
      <div
        id="outer-wrapper-3"
        className="mx-auto max-w-screen-xl px-4 pb-8 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16"
      >
        {/* headline with subheadline */}
        <div id="headlines-3" className="mx-auto max-w-lg md:max-w-[44rem] lg:max-w-[44rem] text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Optimize Your Appfolio Operations with Expert Business Consultation
          </h2>

          <p className="mt-4 text-pretty text-body-color">
            Transform your property management with a tailored business
            consultation designed to:
          </p>
        </div>
        {/* cards content here */}
        <div
          id="card-wrapper"
          className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* card 1 */}
           <div className="rounded-xl p-8 shadow-xl bg-[#efe5dc]">
            <h2 className="mt-4 text-xl font-bold">Review Current Workflows</h2>

            <p className="mt-1 text-base  text-body-color">
              Assess and refine your existing processes to uncover areas for
              improvement.
            </p>
          </div>

           <div className="rounded-xl p-8 shadow-xl bg-[#efe5dc]">
            <h2 className="mt-4 text-xl font-bold">
              Identify Optimization Opportunities
            </h2>

            <p className="mt-1 text-base  text-body-color">
              Discover strategies to enhance efficiency and streamline
              operations.
            </p>
          </div>
          {/* card 3 */}
           <div className="rounded-xl p-8 shadow-xl bg-[#efe5dc]">
            <h2 className="mt-4 text-xl font-bold">
              Leverage Integrations and Data Automation
            </h2>

            <p className="mt-1 text-base  text-body-color">
              Utilize advanced tools to eliminate manual tasks and automate
              routine processes.
            </p>
          </div>
          {/* card 4 */}
           <div className="rounded-xl p-8 shadow-xl bg-[#efe5dc]">
            <h2 className="mt-4 text-xl font-bold">
              Ongoing Training and Support
            </h2>

            <p className="mt-1 text-base  text-body-color">
              Ensure your team stays proficient with continuous training and
              expert support, keeping you ahead of industry changes and
              maximizing your use of Appfolio.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default testimonials