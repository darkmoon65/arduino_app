import React, { useState , useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link , useLocation} from 'react-router-dom';

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [seccionActual, setSeccionActual] = useState('');

  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    const seccion = pathname.substring(1).toUpperCase();  
    setSeccionActual(seccion || 'Inicio');  
  }, [location]);

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
    cursor:"pointer"

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

  const handleClickOpcion = (seccion) => {
    setSeccionActual(seccion);
    setMenuVisible(false);
  };

  return (
    <div style={navbarEstilos}>
      <FontAwesomeIcon icon={faBars} style={iconoEstilos} onClick={handleClickIcono} />
      <span style={{ flex: 1 }}>{seccionActual} </span>

      <div style={menuDesplegableEstilos}> 
        <Link to="/juegos" style={{ textDecoration: 'none', color: 'inherit' }}>
          <p onClick={() => handleClickOpcion('JUEGO')}>JUEGO</p>
        </Link>
        <Link to="/temperatura" style={{ textDecoration: 'none', color: 'inherit' }}>
          <p onClick={() => handleClickOpcion('AIRE ACONDICIONADO')}>TEMPERATURA</p>
        </Link>
        <Link to="/switches" style={{ textDecoration: 'none', color: 'inherit' }}>
          <p onClick={() => handleClickOpcion('INTERRUPTORES')}>SWITCHES</p>
        </Link>
      </div>
    </div>
  );
};


export default Navbar;
