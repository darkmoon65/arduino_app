import React, { useState, useEffect } from 'react';
import '../index.css'; 

const Juegos = () => {
  const [tablero, setTablero] = useState(Array(9).fill(null));
  const [turno, setTurno] = useState('X');
  const [ganador, setGanador] = useState(null);

  useEffect(() => {
    const resultado = calcularGanador(tablero);
    if (resultado) {
      setGanador(resultado);
    }
  }, [tablero]);

  const manejarClic = (index) => {
    if (tablero[index] || ganador) {
      return;
    }

    const nuevoTablero = tablero.slice();
    nuevoTablero[index] = turno;
    setTablero(nuevoTablero);
    setTurno(turno === 'X' ? 'O' : 'X');
  };

  const reiniciarJuego = () => {
    setTablero(Array(9).fill(null));
    setTurno('X');
    setGanador(null);
  };

  const renderizarCelda = (index) => (
    <div
      className={`celda ${tablero[index] ? 'ocupada' : ''} ${ganador && ganador.linea.includes(index) ? 'ganadora' : ''}`}
      key={index}
      onClick={() => manejarClic(index)}
    >
      {tablero[index]}
    </div>
  );

  const calcularGanador = (tablero) => {
    const lineasGanadoras = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lineasGanadoras.length; i++) {
      const [a, b, c] = lineasGanadoras[i];
      if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
        return { jugador: tablero[a], linea: [a, b, c] };
      }
    }

    return null;
  };

  const hayEmpate = !tablero.includes(null) && !ganador;
 

  return (
    <div>
      <div className="tres-en-linea">
        <h1 className = "titulo">Tres en raya</h1>
        <div className="tablero">
          {tablero.map((_, index) => renderizarCelda(index))}
        </div>
        <div className="info">
          {ganador ? (
            <p className="mensaje-ganador">¡El jugador {ganador.jugador} ha ganado!</p>
          ) : hayEmpate ? (
            <p className="mensaje-empate">¡Empate!</p>
          ) : (
            <p className="mensaje-turno">Turno del jugador: {turno}</p>
          )}
          <button className="boton-reiniciar" onClick={reiniciarJuego}>
            Reiniciar Juego
          </button>
        </div>
      </div> 
    </div>
    
  );
};

export default Juegos;
