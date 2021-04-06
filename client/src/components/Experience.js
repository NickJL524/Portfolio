//imports
import React from "react";
import Resume from "./assets/resume.png";

//Experience page
export default function Experience() {
  return (
    <div id="exp">
      <h1>Resume</h1>

      <a href={Resume} download>
        <img src={Resume} alt="My Personal Resume Screenshot"></img>
      </a>
    </div>
  );
}
