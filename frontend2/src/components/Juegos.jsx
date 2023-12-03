import React from 'react'; 

const Juegos = () => { 

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


  return (
    <div>
        <div style={fondoEstilos}>
            <p>HOLA ESTA ES LA ZONA DE JUEGOS</p>
        </div>
    </div>
    
  );
};
 
export default Juegos;
