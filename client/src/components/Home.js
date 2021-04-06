//imports
import React from "react";
import Photo from "./assets/photo.jpg"

//Home page
export default function Home() {
  return (
    <div id="text">
      <h1>Hi I'm Nick </h1>
      <img src={Photo} alt="" />
      <h2>Full Stack Web Developer</h2>
    </div>
  );
}
