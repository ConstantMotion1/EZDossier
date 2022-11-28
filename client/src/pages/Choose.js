import React from "react";
import { useNavigate } from "react-router-dom";
import layoutmin from "../assets/layouts/minimalist.png";
import layoutela from "../assets/layouts/elaborate.png";

export default function LandingPage() {
  const navigate = useNavigate()
  return (
    <div>
      <h2>Choose a Layout</h2>
      <div className="layout">
        <div>
            <h3>Minimalist</h3>
            <button onClick={()=>navigate('/fillcontent')}><img id="layout" src={layoutmin} alt="layout" /></button>
        </div>
        <div>
            <h3>Elaborate</h3>
            <button><img id="layout" src={layoutela} alt="layout" /></button>
        </div>
      </div>
    </div>
  );
}
