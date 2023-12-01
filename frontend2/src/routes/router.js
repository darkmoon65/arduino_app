import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Temperatura from '../components/Temperatura'; 
import Home from '../components/Home'; 
import Switches from '../components/Switches';


function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/temperatura" element={< Temperatura />} /> 
                <Route path="/switches" element={< Switches />} /> 

            </Routes>
        </BrowserRouter>
    )
}

export default Router;