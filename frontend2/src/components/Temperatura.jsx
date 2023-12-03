import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

const Temperatura = () => {
  const [temperatura, setTemperatura] = useState(25);

  const fondoEstilos = {
    background: "linear-gradient(to bottom, #800080 10%, #000 70%)",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height:"100vh"
  };

  const temperaturaEstilos = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "10px",
  };

  const iconoEstilos = {
    margin: "10px 0",
    cursor: "pointer",
  };

  const handleIncrementarTemperatura = () => {
    if (temperatura < 27) {
      setTemperatura(temperatura + 1);
    }
  };

  const handleDecrementarTemperatura = () => {
    if (temperatura > 16) {
      setTemperatura(temperatura - 1);
    }
  };

  return (
    <div>
    <div style={fondoEstilos}>
      <div>Controle la temperatura</div>

      <div style={temperaturaEstilos}>
        <FontAwesomeIcon icon={faChevronUp} style={iconoEstilos} onClick={handleIncrementarTemperatura} />
        <div>
          <span style={{ marginLeft: "20px" }}>{temperatura}ºC</span>
          <FontAwesomeIcon icon={faChevronCircleRight} style={{ marginLeft: "10px" , color: "#FFE15A", cursor : "pointer"}} />
        </div>
        <FontAwesomeIcon icon={faChevronDown} style={iconoEstilos} onClick={handleDecrementarTemperatura} />
      </div>
      <div>
        <span> Temperatura Actual</span>
        <h1>{temperatura} ºC</h1>
      </div>
    </div>
    </div>
    
  );
};

export default Temperatura;
