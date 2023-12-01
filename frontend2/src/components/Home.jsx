import React from 'react'; 
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
