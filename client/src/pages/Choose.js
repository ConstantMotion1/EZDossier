import React from "react";
import { useNavigate } from "react-router-dom";
import './ChooseElements.css';
import layoutmin from "../assets/layouts/minimalistic.JPG";
import layoutela from "../assets/layouts/elaborate.JPG";

export default function LandingPage() {
  const navigate = useNavigate()
  return (
    <div className="body">
      <h2>Choose a Layout</h2>
      <div className="layout">
        <div>
            <h3>Minimalist</h3>
            <button onClick={()=>navigate('/fillcontent')}><img id="layout" src={layoutmin} alt="layout" /></button>
        </div>
        <div className="layout2">
        <div>
            <h3>Elaborate</h3>
            <button onClick={()=>navigate('/fillcontent')}><img id="layout2" src={layoutela} alt="layout2" /></button>
            
            </div>
        </div>
      </div>
    </div>
  );
}
