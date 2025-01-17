import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import HomeCom_6 from './Components/HomePageComponents/HomeCom_6';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/6" element={<HomeCom_6 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;