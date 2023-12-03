import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

const Temperatura = () => {
  const [temperatura, setTemperatura] = useState(25);
  const [temperaturaActual, setTemperaturaActual] = useState('none');

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

  useEffect( () => {

    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8002/temperatura')
        const result = await response.json();
        setTemperaturaActual(result.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
    const intervalId = setInterval(fetchData, 1000);
    
    return () => clearInterval(intervalId);
  },[]);

  return (
    <div>
    <div style={fondoEstilos}>
      <div>Controle la temperatura</div>

      <div style={temperaturaEstilos}>
        <FontAwesomeIcon icon={faChevronUp} style={iconoEstilos} onClick={handleIncrementarTemperatura} />
        <div>
          <span style={{ marginLeft: "20px" }}>{temperatura}ºC</span>
          <FontAwesomeIcon icon={faChevronCircleRight} style={{ marginLeft: "10px" , color: "#008000", cursor : "pointer"}} />
        </div>
        <FontAwesomeIcon icon={faChevronDown} style={iconoEstilos} onClick={handleDecrementarTemperatura} />
      </div>
      <div>
        <span> Temperatura Actual</span>
        <h1>{temperaturaActual} ºC</h1>
      </div>
    </div>
    </div>
    
  );
};

export default Temperatura;
