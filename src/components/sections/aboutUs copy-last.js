import Image from "next/image";
import React from "react";
import Headshot from "../../../public/images/headshot.jpeg";

const aboutUs = () => {
  return (
    <section
      className="u-clearfix u-valign-middle-lg u-valign-middle-xl u-valign-middle-xs u-section-1"
      id="carousel_b11e"
    >
      <div className="u-palette-3-base u-shape u-shape-rectangle u-shape-1"></div>
      <div className="data-layout-selected u-clearfix u-layout-wrap u-layout-wrap-1">
        <div className="u-layout">
          <div className="u-layout-row">
            <div className="u-align-left u-container-align-left u-container-style u-layout-cell u-left-cell u-size-27 u-layout-cell-1">
              {/* u-container-layout u-valign-top-sm u-valign-top-xs u-container-layout-1 */}
              <div className="pt-[9.7rem] pr-[2.8rem] pb-[1.875rem] pl-[1.875rem] flex-1 ">
                {/* u-custom-font u-font-oswald u-text u-text-1 */}
                <h1 className="text-[5rem] break-words leading-none">
                  About Us
                </h1>
                {/* u-text u-text-2 */}
                <p className="text-[1.125rem] mt-8 mr-[6.75rem] leading-normal break-words">
                  Sample text. Click to select the text box. Click again or
                  double click to start editing the text.&nbsp;Duis aute irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur.&nbsp;
                </p>
                {/* <a
                  href="#"
                  className="u-border-4 u-border-active-palette-1-base u-border-hover-palette-1-base u-border-palette-3-base u-btn u-button-style u-text-palette-1-base u-btn-1"
                >
                  learn more
                </a> */}
              </div>
            </div>
            <div className="u-container-style u-layout-cell u-right-cell u-size-33 u-layout-cell-2">
              <div className="u-container-layout u-valign-bottom-lg u-valign-bottom-sm u-valign-top-xl u-container-layout-2">
                <div className="u-palette-1-base u-shape u-shape-rectangle u-shape-2"></div>
                <Image
                  src={Headshot}
                  alt=""
                  className="u-image u-image-default u-image-1"
                  data-image-width="973"
                  data-image-height="1300"
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
