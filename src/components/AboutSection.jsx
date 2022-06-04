import React from "react";
import Group from '../images/Group-78.png'

const AboutSection = () => {
  return (
    <div className="bg-slate-700 basis-4">
      <div className="w-5/12 bg-slate-500">
      <h1 className="text-4xl font-medium">About</h1>
      <p>
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
      <img src={Group} alt="Group" className="w-5/12 justify-end"/>
    </div>
  );
};

export default AboutSection;
