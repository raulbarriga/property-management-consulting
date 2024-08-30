import Image from "next/image";
import React from "react";
import Headshot from "../../../public/images/headshot.jpeg";

const aboutUs = () => {
  return (
    <section
      class="u-clearfix u-valign-middle-lg u-valign-middle-xl u-valign-middle-xs u-section-1"
      id="carousel_b11e"
    >
      <div class="u-palette-3-base u-shape u-shape-rectangle u-shape-1"></div>
      <div class="data-layout-selected u-clearfix u-layout-wrap u-layout-wrap-1">
        <div class="u-layout">
          <div class="u-layout-row">
            <div class="u-align-left u-container-align-left u-container-style u-layout-cell u-left-cell u-size-27 u-layout-cell-1">
              <div class="u-container-layout u-valign-top-sm u-valign-top-xs u-container-layout-1">
                <h1 class="u-custom-font u-font-oswald u-text u-text-1">
                  About Us
                </h1>
                <p class="u-text u-text-2">
                  Sample text. Click to select the text box. Click again or
                  double click to start editing the text.&nbsp;Duis aute irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur.&nbsp;
                </p>
                <a
                  href="#"
                  class="u-border-4 u-border-active-palette-1-base u-border-hover-palette-1-base u-border-palette-3-base u-btn u-button-style u-text-palette-1-base u-btn-1"
                >
                  learn more
                </a>
                <p class="u-text u-text-3">
                  Image from
                  <a
                    href="https://www.freepik.com/photos/people"
                    class="u-border-1 u-border-black u-border-no-left u-border-no-right u-border-no-top u-btn u-button-link u-button-style u-none u-text-body-color u-btn-2"
                  >
                    Freepik
                  </a>
                </p>
              </div>
            </div>
            <div class="u-container-style u-layout-cell u-right-cell u-size-33 u-layout-cell-2">
              <div class="u-container-layout u-valign-bottom-lg u-valign-bottom-sm u-valign-top-xl u-container-layout-2">
                <div class="u-palette-1-base u-shape u-shape-rectangle u-shape-2"></div>
                <Image
                  src={Headshot}
                  alt=""
                  class="u-image u-image-default u-image-1"
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
