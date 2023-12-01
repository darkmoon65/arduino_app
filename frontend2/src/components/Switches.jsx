import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';

const Switches = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const toggleIcon = isSwitchOn ? faToggleOn : faToggleOff;

  const switchStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "10px",
    color: isSwitchOn ? "green" : "gray"
  };

  const handleToggleClick = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  return (
    <div>
      <p>HOLA</p>
      <FontAwesomeIcon icon={toggleIcon} style={switchStyle} onClick={handleToggleClick} />
      <p>JA</p>
    </div>
  );
};

export default Switches;
