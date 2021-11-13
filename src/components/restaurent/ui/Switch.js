import React from "react";
import "./Switch.css";

const Switch = ({ isOn, handleToggle, onColor }) => {
  return (
    <label style={{ background: isOn ? onColor:"rgb(196, 13, 13)" }} className="react-switch">
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        type="checkbox"
      />
      <div className="react-switch-button" />
      <div className="react-switch-labels">
        {isOn?<span className="open">Open</span>
        :<span className="closed">Closed</span>}
      </div>
    </label>
  );
};

export default Switch;
