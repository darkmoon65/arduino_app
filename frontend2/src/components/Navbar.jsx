import React, { useState , useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars , faHome, faPlay, faTemperature0, faToggleOn} from '@fortawesome/free-solid-svg-icons';
import { Link , useLocation} from 'react-router-dom';

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [seccionActual, setSeccionActual] = useState('');

  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    const seccion = pathname.substring(1).toUpperCase();  
    setSeccionActual(seccion || 'INICIO');  
  }, [location]);

  const navbarEstilos = {
    backgroundColor: "#000",
    color: "#fff",
    padding: "20px",
    display: "flex",
    fontSize:"30px",
  };

  const iconoEstilos = {
    marginRight: "10px",
    paddingLeft: "2px",
    cursor:"pointer"

  };
  const menuDesplegableEstilos = {
    position: 'absolute',
    top: '75px',
    left: menuVisible ? '0px' : '-200px',   
    backgroundColor: '#000',
    color: '#fff',
    padding: '10px',
    zIndex: 1,
    fontSize: '20px',
    width: '180px',
    height: '290px',
    lineHeight: '30px',
    flexDirection: 'column',
    alignItems: 'start',
    opacity: '80%',
    borderBottomRightRadius: '5%',
    transition: 'left 0.5s ease',  
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
      <span style={{ flex: 1 ,     textAlign: "center",}}>{seccionActual} </span>

      <div style={menuDesplegableEstilos}> 
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        
          <p onClick={() => handleClickOpcion('HOME')}> <FontAwesomeIcon icon ={faHome} style= {{paddingLeft:"10px", paddingRight:"10px"}}/>HOME</p>
        </Link>
        <Link to="/juegos" style={{ textDecoration: 'none', color: 'inherit' }}>
          <p onClick={() => handleClickOpcion('JUEGO')}>  <FontAwesomeIcon icon ={faPlay} style= {{paddingLeft:"10px", paddingRight:"10px"}}/> JUEGO</p>
        </Link>
        <Link to="/temperatura" style={{ textDecoration: 'none', color: 'inherit' }}>
          <p onClick={() => handleClickOpcion('AIRE ACONDICIONADO')}> <FontAwesomeIcon icon ={faTemperature0} style= {{paddingLeft:"10px", paddingRight:"10px"}}/>TEMPERATURA</p>
        </Link>
        <Link to="/switches" style={{ textDecoration: 'none', color: 'inherit' }}>
          <p onClick={() => handleClickOpcion('INTERRUPTORES')}> <FontAwesomeIcon icon ={faToggleOn} style= {{paddingLeft:"10px", paddingRight:"10px"}}/> SWITCHES</p>
        </Link>
      </div>
    </div>
  );
};


export default Navbar;
