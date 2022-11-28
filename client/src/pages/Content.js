import React from "react";
import { useNavigate } from "react-router-dom";

export default function Content() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Please fill out Criteria</h2>
      <div>
        <h4>title:</h4>
        <input/>
      </div>
      <div>
        <h4>name:</h4>
        <input />
      </div>
      <div>
        <h4>description:</h4>
        <input />
      </div>
      <div>
        <h4>resume:</h4>
        <input />
      </div>
      <div>
        <h4>contact:</h4>
        <input />
      </div>
      <div>
        <h4>image:</h4>
        <input />
      </div>
      <div>
        <h4>background:</h4>
        <input />
      </div>
      <div>
        <h4>projects:</h4>
        <input />
      </div>
      <button onClick={()=>navigate('/finalrender')}>Make Portfolio!</button>
    </div>
  );
}
