import React from 'react';
import { Link } from 'react-router-dom';
import temperaturaImagen from './../assets/temperatura.png';
import juegoImagen from './../assets/juego.png';
import switchesImagen from './../assets/switches.png';



const fondoEstilos = {
    background: "linear-gradient(to bottom, #800080 10%, #000 70%)",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
    height: "100vh",
  };

const contenidoEstilos = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding:"20px",
};

const columnaEstilos = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const imagenEstilos = {
  marginRight: "10px",
};

const titulo = {
  color: "#fff",
};

const Menu = () => {
  return (
    <div style={fondoEstilos}>
      <div style={contenidoEstilos}>
        <Link to="/temperatura" style={columnaEstilos}>
          <img
            src={temperaturaImagen}
            alt="Temperatura"
            width="50"
            height="50"
            style={imagenEstilos}
          />
        </Link>
        <Link to="/temperatura" style={columnaEstilos}>
          <h3 style={titulo}>Temperatura</h3>
        </Link>
      </div>

      <div style={contenidoEstilos}>
        <Link to="/juegos" style={columnaEstilos}>
          <img
            src={juegoImagen}
            alt="juegos"
            width="50"
            height="50"
            style={imagenEstilos}
          />
        </Link>
        <Link to="/juegos" style={columnaEstilos}>
          <h3 style={titulo}>Juego</h3>
        </Link>
      </div>

      <div style={contenidoEstilos}>
        <Link to="/switches" style={columnaEstilos}>
          <img
            src={switchesImagen}
            alt="switches"
            width="50"
            height="50"
            style={imagenEstilos}
          />
        </Link>
        <Link to="/switches" style={columnaEstilos}>
          <h3 style={titulo}>Switches</h3>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
