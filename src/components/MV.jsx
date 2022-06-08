import React from "react";
import mv1 from "../images/mv1.svg";
import mv2 from "../images/mv2.svg";
import mv3 from "../images/mv3.svg";
import target from "../images/target.svg";
import vision from "../images/vision.svg";

const MV = () => {
  return (
    <div className="flex m-auto py-6">
      <div className="w-6/12 m-auto">
        <img src={mv1} alt="mv1" className="w-96" />
        <img src={mv2} alt="mv2" className="w-96 ml-44" />
        <img src={mv3} alt="mv3" className="w-96" />
      </div>
      <div className="w-6/12 m-auto">
        <div className="flex my-10">
          <img src={target} alt="target" className="h-32" />
          <div className="font-['Montserrat'] text-mpurple">
            <h2 className="text-4xl mb-4">Mission</h2>
            <p className="text-2xl">
             Our Mission is to maintain the credibility and vigorously protect the
             reputation we have already gained through diligence, dedication and
             our total commitment to our Clients using the most advance
             technologies in pursuit of continued client satisfaction and
             excellence in the management of properties
            </p>
          </div>
        </div>
        <div className="flex my-10">
          <img src={vision} alt="vision" className="h-32" />
          <div className="font-['Montserrat'] text-mpurple">
            <h2 className="text-4xl mb-4">Vision</h2>
            <p className="text-2xl">
              Our Vision is to achieve our future goals by closely adhering to high
              standards and technicalities that sustain the company's advanced
              position in local and regional markets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MV;
