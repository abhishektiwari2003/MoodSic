import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <span className="Heading">Feel The</span>
      <span className="App-heading">MoodSic</span>
      <div className="Image1"></div>
      <div className="Image2"></div>
      <div class="wrap">
        <button
          class="button"
          onClick={() => {
            navigate("/MoodSelection");
          }}
        >
          Join Now
        </button>
      </div>
    </div>
  );
}
