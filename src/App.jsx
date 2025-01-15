import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import HomeCom_3 from './Components/HomePageComponents/HomeCom_3';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/3" element={<HomeCom_3 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;