import React from "react";
import team from "../images/team.svg";
import TeamRectangle from "../images/TeamRectangle.svg";

const Team = () => {
  return (
    <div className="bg-black">
       <div className="justify-center"><img src={team} alt="team" className="w-1/2" /></div>
        <img src={TeamRectangle} alt="TeamRectangle" />
      <div className="justify-center items-center">
        <h1>Meet The Team</h1>
        <p>
          We have highly trained personnel who are carefully selected to assure
          the client's satisfaction. Our teamwork allows us to bring together
          the best thinking and advice from our professionals and deliver the
          best and highest solutions in the shortest time possible to our
          clients.
        </p>
      </div>
    </div>
  );
};

export default Team;
