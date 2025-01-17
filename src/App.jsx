import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import HomeCom_10 from './Components/HomePageComponents/HomeCom_8';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/10" element={<HomeCom_10 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;