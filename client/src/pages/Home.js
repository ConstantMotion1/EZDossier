import React from "react";
import layoutmin from "../assets/layouts/minimalist.png";
import layoutela from "../assets/layouts/elaborate.png";

export default function LandingPage() {
  return (
    <div>
      <h2>Choose a Layout</h2>
      <div className="layout">
        <div>
            <h3>Minimalist</h3>
          <img id="layout" src={layoutmin} alt="layout" />
        </div>
        <div>
            <h3>Elaborate</h3>
          <img id="layout" src={layoutela} alt="layout" />
        </div>
      </div>
    </div>
  );
}
