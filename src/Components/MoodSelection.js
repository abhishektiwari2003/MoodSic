import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

export function MoodSelection() {
  const navigate1 = useNavigate();
  return (
    <div className="music-page">
      <span className="discover-your-mood-si"> Discover Your MoodSic</span>
      <div className="flex-container">
        <div
          className="chill"
          onClick={() => {
            navigate1("/MoodSelection/Chill");
          }}
        >
          <span className="chill-1">CHILL</span>
        </div>
        <div
          className="dance"
          onClick={() => {
            navigate1("/MoodSelection/Dance");
          }}
        >
          DANCE
        </div>
      </div>
      <div className="flex-container-1">
        <div
          className="sing-along-1"
          onClick={() => {
            navigate1("/MoodSelection/Party");
          }}
        >
          <span className="party">PARTY</span>
        </div>
        <div
          className="heartbroken"
          onClick={() => {
            navigate1("/MoodSelection/HeartBroken");
          }}
        >
          <span className="sad">SAD</span>
        </div>
      </div>
    </div>
  );
}
