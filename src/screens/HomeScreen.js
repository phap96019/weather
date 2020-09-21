import React from "react";
import naviIcon from "../img/NavigatorIcon.png";

function HomeScreen() {
  return (
    <div className="Home-background">
      <div className="Home-background2">
        <div className="Home-container">
          <div className="Home-top">
            <button className="Home-button-search">Search for places</button>
            <img className="Home-NavigatorIcon" src={naviIcon} alt="N/A" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
