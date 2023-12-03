import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Temperatura from '../components/Temperatura'; 
import Home from '../components/Home'; 
import Switches from '../components/Switches';
import Juegos from '../components/Juegos';
import Navbar from '../components/Navbar';

function Router() {

    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/temperatura" element={< Temperatura />} /> 
                <Route path="/switches" element={< Switches />} /> 
                <Route path="/juegos" element={< Juegos />} /> 
            </Routes>
        </BrowserRouter>
    )
}

export default Router;