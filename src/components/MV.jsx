import React from "react";
import mv1 from "../images/mv1.svg";
import mv2 from "../images/mv2.svg";
import mv3 from "../images/mv3.svg";
import target from "../images/target.svg";
import vision from "../images/vision.svg";

const MV = () => {
  return (
    <div className="overflow-hidden">
      <div className="bg-slate-400 basis-4">
        <img src={mv1} alt="mv1" className="w-96" />
        <img src={mv2} alt="mv2" className="w-96" />
        <img src={mv3} alt="mv3" className="w-96" />
      </div>
      <div>
        <img src={target} alt="target" className="w-48" />
        <h2>Mission</h2>
        <p>
          Our Mission is to maintain the credibility and vigorously protect the
          reputation we have already gained through diligence, dedication and
          our total commitment to our Clients using the most advance
          technologies in pursuit of continued client satisfaction and
          excellence in the management of properties
        </p>
        <img src={vision} alt="vision" className="w-48" />
        <h2>Vision</h2>
        <p>
          Our Vision is to achieve our future goals by closely adhering to high
          standards and technicalities that sustain the company's advanced
          position in local and regional markets.
        </p>
      </div>
    </div>
  );
};

export default MV;
