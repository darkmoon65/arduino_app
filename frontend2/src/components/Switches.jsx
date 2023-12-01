import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';
import Lottie from 'lottie-react';
import foco from './../assets/foco.json';
import green from './../assets/green.json';
import red from './../assets/red.json';
import yellow from './../assets/yellow.json';
import sound from './../assets/sound.json';

const Switches = () => {
  const [iconStates, setIconStates] = useState(Array(5).fill(false));

  const handleToggleClick = (index) => {
    const newIconStates = [...iconStates];
    newIconStates[index] = !newIconStates[index];
    setIconStates(newIconStates);
  };

  const fondoEstilos = {
    backgroundColor: "#000",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
  };

  const switchContainerEstilos = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  };

  const lottiesEstilos = {
    background: "#000",
    height: "auto",
    width: "100px",
    marginRight: "10px",  
  };

  return (
    <div>
      <Navbar />
      <div style={fondoEstilos}>
        {iconStates.map((isSwitchOn, index) => (
          <div key={index} style={switchContainerEstilos}>
            <Lottie
              animationData={index === 0 ? foco : index === 1 ? green : index === 2 ? red : index === 3 ? yellow : sound}
              loop={!isSwitchOn}  
              autoplay={true}
              style={lottiesEstilos}
            />
            <FontAwesomeIcon
              icon={isSwitchOn ? faToggleOn : faToggleOff}
              style={{
                fontSize:"40px",
                padding:"20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: isSwitchOn ? "green" : "gray",
              }}
              onClick={() => handleToggleClick(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Switches;
