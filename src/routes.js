import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Repositories from './pages/Repositories';

const Rotas = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/repositories' element={<Repositories />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Rotas
