import React from "react";
import Group from '../images/Group-78.png'

const AboutSection = () => {
  return (<div class="bg-white overflow-hidden">
  <div class="max-w-7xl mx-auto">
    <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="sm:text-center lg:text-left">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            About Us
          </h1>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Given Al Madar's dedication to providing quality and service in
            all aspects of the company's operations, it intends to bring its
            more than 30 years of expertise to Al Madar Property Management.
            Al Madar Property Management began with internal programs to
            manage Al Madar Holding's diverse portfolio of properties. This
            comprises all sorts of properties, including commercial,
            residential, and industrial. As a result of our expansion, we
            want to provide outstanding service to property owners in the
            local and regional markets.
          </p>
        </div>
      </main>
    </div>
  </div>
  <div class=" lg:inset-y-0 lg:right-0 lg:w-1/2">
    <img src={Group} alt="Group" className="" />
  </div>
</div>
    // <div className="bg-slate-700 basis-4">
    //   <div className="w-5/12 bg-slate-500">
    //   <h1 className="text-4xl font-medium">About</h1>
    //   <p>
    //     Given Al Madar's dedication to providing quality and service in all
    //     aspects of the company's operations, it intends to bring its more than
    //     30 years of expertise to Al Madar Property Management. Al Madar Property
    //     Management began with internal programs to manage Al Madar Holding's
    //     diverse portfolio of properties. This comprises all sorts of properties,
    //     including commercial, residential, and industrial. As a result of our
    //     expansion, we want to provide outstanding service to property owners in
    //     the local and regional markets.
    //   </p>
    //   </div>
    //   <img src={Group} alt="Group" className="w-5/12 justify-end"/>
    // </div>
  );
};

export default AboutSection;