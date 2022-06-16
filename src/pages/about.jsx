import React from "react";
import aboutUsBg from "../images/about_us_bg.svg";
import hexagons from "../images/hexagons.svg";

const About = () => {
  return (
    <div name="support" className="w-full">
      <div className="w-full h-screen absolute">
        <img className="w-full h-full object-cover" src={aboutUsBg} alt="/" />
      </div>

      <div className="max-w-[1240px] mx-auto text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 relative gap-x-16 px-4 py-32 font-montserrat">
          <div>
            <h2 className="text-6xl font-bold pt-28 text-left ">
              <span class="inline-flex items-baseline underline underline-offset-20 ">
                <span>Abou</span>
              </span>
              <span class="inline-flex items-baseline">
                <span>t Us</span>
              </span>
            </h2>

            <p className="py-24 text-lg text-white text-justify">
              Al Madar Property Management is a Qatari-based real estate and
              contracting firm that has been in business since 1992 and has a
              strong reputation for quality and service. The Company employs
              cutting-edge architectural design and continues to construct a
              number of large projects in the region, including commercial
              office towers, residential apartment towers, hotels, residential
              compounds, and master plan land developments.
            </p>
          </div>
          <div className="bg-transparent text-white">
            <div className="pt-10 md:pl-12">
              <img className="" src={hexagons} alt="/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
