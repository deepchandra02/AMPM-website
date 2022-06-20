import React from "react";
import Group from '../images/Group-78.png'

const AboutSection = () => {
  return (
    <div className="flex m-auto">
      <div className="w-6/12 float-left m-auto">
      <h1 className="text-8xl mb-10 font-['Montserrat'] text-mpurple">About</h1>
      <p className="text-2xl leading-relaxed font-['Montserrat'] text-mpurple">
        Given Al Madar's dedication to providing quality and service in all
        aspects of the company's operations, it intends to bring its more than
        30 years of expertise to Al Madar Property Management. Al Madar Property
        Management began with internal programs to manage Al Madar Holding's
        diverse portfolio of properties. This comprises all sorts of properties,
        including commercial, residential, and industrial. As a result of our
        expansion, we want to provide outstanding service to property owners in
        the local and regional markets.
      </p>
      </div>
      <div className=" float-right">
        <img src={Group} alt="Group" className="h-[43.4rem]"/>
      </div>
      
    </div>
  );
};

export default AboutSection;
