import Footer from 'components/Footer';
import Layout from 'components/Layout';
import Menu from 'components/Menu';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import NotFound from 'pages/NotFound';
import Sobre from 'pages/Sobre';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Root: React.FC = () => {
  return (
    <main className="container">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="/cardapio" element={<Cardapio />} />
            <Route path="/sobre" element={<Sobre />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
};

export default Root;
