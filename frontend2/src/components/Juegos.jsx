import React from 'react'; 
import Navbar from './Navbar';

const Juegos = () => {
  
    const fondoEstilos={
        background : "#000",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff"
      }

  return (
    <div>
        <Navbar></Navbar>
        <div style={fondoEstilos}>
            <p>HOLA ESTA ES LA ZONA DE JUEGOS</p>
        </div>
    </div>
    
  );
};
 
export default Juegos;
