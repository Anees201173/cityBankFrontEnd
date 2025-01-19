import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import Footer from './Components/footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/AboutPage/About';

function App() {
    return (
        <BrowserRouter>
            {/* <div className="relative min-h-screen"> 
                <div className='absolute top-0 md:fixed md:top-0 w-full z-50'>
                    <Navbar />
                </div> */}
                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                
                <div className="">
                    {/* <Footer /> */}
                </div>
            {/* </div> */}
        </BrowserRouter>
    );
}

export default App;
