//imports
import React from "react";
import Game from "./assets/game.png"
import Geo from "./assets/geo.png"
import Remock from "./assets/remock.png"
import Tic from "./assets/tic-tac.png"

//Projects page
export default function Projects() {
  return (
    <>
      <div id="pics">
        <div id="remock">
          <img src={Remock} alt="" />

          <a href="https://github.com/BurlingtonCodeAcademy/remock-NickJL524">
            <h5 className="center">Webpage layout and design with photos</h5>
          </a>
        </div>

        <div id="game">
          <img src={Game} alt="" />

          <a href="https://github.com/BurlingtonCodeAcademy/ECHO-Capstone">
            <h5 className="center">
              Bernoulli Blower game designed for the Echo, Leahy Center for Lake Champlain based on their exhibit
            </h5>
          </a>
        </div>

        <div id="tic">
          <img src={Tic} alt="" />

          <a href="https://github.com/BurlingtonCodeAcademy/tic-tac-toe-nick-dalton">
            <h5 className="center">Play Tic-Tac-Toe</h5>
          </a>
        </div>

        <div id="geo">
          <img src={Geo} alt="" />

          <a href="https://github.com/BurlingtonCodeAcademy/geo-vermonter-nick-william">
            <h5 className="center">A GeoGuesser game based in Vermont</h5>
          </a>
        </div>
      </div>
    </>
  );
}
