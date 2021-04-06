//imports
import React from "react";
import Golf from "./assets/golf.JPG"

//About page
export default function About() {
  return (
    <>
    <div id="main-container">
      <div id="about">
        <img src={Golf} alt="" />
        <h1>Full Stack Web Developer</h1>
      </div>
     
      <div id="container-personal">
        <h3>
          <p>
            Weather I am enjoying hobbies like building and working on
            computers, Golf, Soccer, Biking, Hiking, my main focus always comes
            back to family. Playing and exploring with my little boy is a joy,
            and to see things through his eyes everyday keeps me grounded and
            humble.
          </p>
          <p>
            I got into programming because I didn't like what I was doing at the
            time and decided to do a hard pivot on life and try my hand at
            something new. 
          </p>
        </h3>
      
      <div id="info">
        <h4>
          <p>Name: Nick LaMothe </p>
          <p>Age: 35 Years </p>
          <p>Email: nicklamothe524@gmail.com </p>
          <p>Phone: (802) 338-1111 </p>
          <p>Address: Winooski, VT </p>
          <p><a href="https://www.linkedin.com/in/nick-lamothe-835732142/">linkedin.com</a></p>
        </h4>
      </div>
      </div>
      </div>
    </>
  );
}
