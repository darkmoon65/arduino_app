import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';
import Temperatura from './Temperatura';
import Switches from './Switches';



const Home = () => {
  

  return (
    <div>
      <Navbar></Navbar>
      <Temperatura></Temperatura>
      <Switches></Switches>
    </div>
  );
};

export default Home;
