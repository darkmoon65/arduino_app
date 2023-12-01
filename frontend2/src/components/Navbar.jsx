import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("AIRE ACONDICIONADO");

  const navbarEstilos = {
    backgroundColor: "#000",  
    color: "#fff",
    padding: "20px",
    textAlign: "center",
    display: "flex",
    alignItems: "center", 
  };

  const iconoEstilos = {
    marginRight: "10px", 
    paddingLeft: "2px",    
  };

  const menuDesplegableEstilos = {
    position: 'absolute',
    top: '70px',
    left: '20px',
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    display: menuVisible ? 'block' : 'none',
    zIndex: 1,
  };

  const handleClickIcono = () => {
    setMenuVisible(!menuVisible);
  };

  const handleClickOpcion = (opcion) => {
    setOpcionSeleccionada(opcion);
    setMenuVisible(false);
  };

  return (
    <div style={navbarEstilos}>
      <FontAwesomeIcon icon={faBars} style={iconoEstilos} onClick={handleClickIcono} />
      <span style={{ flex: 1 }}>{opcionSeleccionada} </span>

      <div style={menuDesplegableEstilos}>
        <p onClick={() => handleClickOpcion('JUEGO')}>JUEGO</p>
        <p onClick={() => handleClickOpcion('AIRE ACONDICIONADO')}>TEMPERATURA</p>
      </div>
    </div>
  );
};

export default Navbar;
