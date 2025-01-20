import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import Footer from './Components/footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/AboutPage/About';
import Contact from './Pages/Contact/Contact';

function App() {
    return (
        <BrowserRouter>
            <div className="relative min-h-screen flex flex-col"> 
                <div className="absolute top-0 md:fixed md:top-[570px] w-full z-50">
                    <Navbar />
                </div>
                
                <div className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>

                <div className="mt-auto">
                    {/* <Footer /> */}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
