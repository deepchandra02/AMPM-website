import React from "react";

import hexagons from "../images/hexagons.svg";
import stripes from "../images/heading_stripes.png";
import managers from "../images/property_managers.png";
import legal from "../images/legal_team.png";
import marketing from "../images/marketing_team.png";
import analysts from "../images/property_analysts.png";
import guards from "../images/security_guards.png";
import cleaners from "../images/cleaners.png";
import safety from "../images/safety_managers.png";
import other from "../images/other_staff.png";

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
      <div className="">
        <div className="max-w-[1240px] mx-auto font-montserrat mb-8">
          <div className="flex flex-col">
            <div name="row 1" className="flex flex-row">
              <div className="basis-1/3">
                <span className="mt-8 inline-flex ">
                  <img src={stripes} alt="" className="h-10 lg:h-20 -z-10" />
                  <h2 className="text-3xl text-center font-semibold text-mpurple -ml-7 lg:text-5xl lg:pt-6 lg:text-left ">
                    Our Team
                  </h2>
                </span>
                <div className="w-11/12 h-0.5 bg-mpurple  mx-auto lg:-mt-2 lg:ml-12 lg:w-5/12 lg:h-1"></div>
              </div>

              <p className="basis-2/3 mx-4 py-2 text-md text-mpurple text-justify lg:mx-0 lg:pt-16 lg:text-lg">
                Al Madar is completely devoted to providing quality in all
                aspects of the Company's activities because of qualities such as
                clear vision and dedication to excellence. The company has a
                large staff that includes Engineers, Consultants, Technical and
                Managerial Specialties, as well as a number of Senior Engineers
                and Supervisors with extensive expertise.
              </p>
            </div>
            <div name="row 2" className="flex flex-row mx-auto my-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 gap-y-4 lg:gap-y-8">
                <div class="order-1 grid grid-cols-2 bg-white drop-shadow-lg hover:drop-shadow-2xl transition duration-200 transform hover:-translate-y-2">
                  <img src={managers} alt="" className="h-full" />
                  <div className="">
                    <div className="w-8/12 h-1.5 mx-7 my-6 bg-mpurple"></div>
                    <h3 className="text-2xl font-regular text-mpurple lg:text-4xl lg:ml-7 lg:text-left ">
                      Property <br />
                      Managers
                    </h3>
                  </div>
                </div>
                <div class="order-2 grid grid-cols-2 bg-white drop-shadow-lg hover:drop-shadow-2xl transition duration-200 transform hover:-translate-y-2">
                  <img src={legal} alt="" className="h-full" />
                  <div className="">
                    <div className="w-8/12 h-1.5 mx-7 my-6 bg-mpurple"></div>
                    <h3 className="text-2xl font-regular text-mpurple lg:text-4xl lg:ml-7 lg:text-left ">
                      Legal Team
                    </h3>
                  </div>
                </div>

                <div class="order-3 grid grid-cols-2 bg-white drop-shadow-lg hover:drop-shadow-2xl transition duration-200 transform hover:-translate-y-2">
                  <div className="">
                    <div className="w-8/12 h-1.5 mx-7 my-6 bg-mpurple"></div>
                    <h3 className="text-2xl font-regular text-mpurple lg:text-4xl lg:ml-7 lg:text-left ">
                      Marketing <br />
                      Team
                    </h3>
                  </div>
                  <img src={marketing} alt="" className="h-full" />
                </div>
                <div class="order-4 grid grid-cols-2 bg-white drop-shadow-lg hover:drop-shadow-2xl transition duration-200 transform hover:-translate-y-2">
                  <div className="">
                    <div className="w-8/12 h-1.5 mx-7 my-6 bg-mpurple"></div>
                    <h3 className="text-2xl font-regular text-mpurple lg:text-4xl lg:ml-7 lg:text-left ">
                      Property <br /> Analysts
                    </h3>
                  </div>
                  <img src={analysts} alt="" className="h-full" />
                </div>

                <div class="order-5 grid grid-cols-2 bg-white drop-shadow-lg hover:drop-shadow-2xl transition duration-200 transform hover:-translate-y-2">
                  <img src={guards} alt="" className="h-full" />
                  <div className="">
                    <div className="w-8/12 h-1.5 mx-7 my-6 bg-mpurple"></div>
                    <h3 className="text-2xl font-regular text-mpurple lg:text-4xl lg:ml-7 lg:text-left ">
                      Security <br />
                      Guards
                    </h3>
                  </div>
                </div>
                <div class="order-6 grid grid-cols-2 bg-white drop-shadow-lg hover:drop-shadow-2xl transition duration-200 transform hover:-translate-y-2">
                  <img src={cleaners} alt="" className="h-full" />
                  <div className="">
                    <div className="w-8/12 h-1.5 mx-7 my-6 bg-mpurple"></div>
                    <h3 className="text-2xl font-regular text-mpurple lg:text-4xl lg:ml-7 lg:text-left ">
                      Repairers and <br /> Cleaners
                    </h3>
                  </div>
                </div>

                <div class="order-7 grid grid-cols-2 bg-white drop-shadow-lg hover:drop-shadow-2xl transition duration-200 transform hover:-translate-y-2">
                  <div className="">
                    <div className="w-8/12 h-1.5 mx-7 my-6 bg-mpurple"></div>
                    <h3 className="text-2xl font-regular text-mpurple lg:text-4xl lg:ml-7 lg:text-left ">
                      Safety <br />
                      Managers
                    </h3>
                  </div>
                  <img src={safety} alt="" className="h-full" />
                </div>
                <div class="order-8 grid grid-cols-2 bg-white drop-shadow-lg hover:drop-shadow-2xl transition duration-200 transform hover:-translate-y-2">
                  <div className="">
                    <div className="w-8/12 h-1.5 mx-7 my-6 bg-mpurple"></div>
                    <h3 className="text-2xl font-regular text-mpurple lg:text-4xl lg:ml-7 lg:text-left ">
                      And Many <br /> More...
                    </h3>
                  </div>
                  <img src={other} alt="" className="h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
