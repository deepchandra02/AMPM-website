import React from "react";
import aboutUsBg from "../images/about_us_bg.svg";
import aboutUsBgMob from "../images/about_us_bg_mobile.svg";
import hexagons from "../images/hexagons.svg";
import stripes from "../images/heading_stripes.png";

const About = () => {
  return (
    <>
      <div className="h-screen w-full">
        <div className="bg-gradient">
          {/* <img
            className="hidden lg:flex lg:w-full lg:h-full lg:object-cover"
            src={aboutUsBg}
            alt="/"
          />
          <img
            className="lg:hidden h-screen w-screen object-cover"
            src={aboutUsBgMob}
            alt="/"
          /> */}
          <div className="max-w-[1240px] mx-auto text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 relative gap-x-16 px-4 pt-32 font-montserrat">
              <div className="mx-auto lg:hidden">
                <img className="pt-2 pb-4 h-50vh pl-8" src={hexagons} alt="/" />
              </div>
              <div>
                <h2 className="text-3xl text-center font-bold lg:text-6xl lg:pt-28 lg:text-left ">
                  About Us
                </h2>
                <div className="w-11/12 h-0.5 bg-white my-2 mx-auto lg:mx-0 lg:w-3/12 lg:h-1"></div>

                <p className="mx-4 py-2 text-md text-white text-justify lg:mx-0 lg:py-24 lg:text-lg">
                  Al Madar Property Management is a Qatari-based real estate and
                  contracting firm that has been in business since 1992 and has
                  a strong reputation for quality and service. <br /> <br />
                  The Company employs cutting-edge architectural design and
                  continues to construct a number of large projects in the
                  region, including commercial office towers, residential
                  apartment towers, hotels, residential compounds, and master
                  plan land developments.
                </p>
              </div>

              <div className="hidden lg:flex lg:pt-10 lg:pl-12">
                <img className="" src={hexagons} alt="/" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen w-full grad-2">
        <div className="max-w-[1240px] mx-auto text-black">
          <div className="grid grid-cols-1 lg:grid-cols-2 relative gap-x-16 px-4 font-montserrat">
            <div>
              <span class="inline-flex ">
                <img src={stripes} alt="" className="h-20 " />
                <h2 className="text-3xl text-center font-bold text-mpurple lg:text-5xl lg:pt-28 lg:text-left ">
                  Our Team
                </h2>
              </span>

              <div className="w-11/12 h-0.5 bg-mpurple my-2 mx-auto lg:mx-0 lg:w-3/12 lg:h-1"></div>

              <p className="mx-4 py-2 text-md text-black text-justify lg:mx-0 lg:py-24 lg:text-lg">
                Al Madar is completely devoted to providing quality in all
                aspects of the Company's activities because of qualities such as
                clear vision and dedication to excellence. The company has a
                large staff that includes Engineers, Consultants, Technical and
                Managerial Specialties, as well as a number of Senior Engineers
                and Supervisors with extensive expertise.
              </p>
            </div>

            <div className="hidden lg:flex lg:pt-10 lg:pl-12">
              <p className="mx-4 py-2 text-md text-black text-justify lg:mx-0 lg:py-24 lg:text-lg">
                Al Madar is completely devoted to providing quality in all
                aspects of the Company's activities because of qualities such as
                clear vision and dedication to excellence. The company has a
                large staff that includes Engineers, Consultants, Technical and
                Managerial Specialties, as well as a number of Senior Engineers
                and Supervisors with extensive expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row">
        <div class="basis-1/4">01</div>
        <div class="basis-1/4">02</div>
        <div class="basis-1/2">03</div>
      </div>
    </>
  );
};

export default About;
