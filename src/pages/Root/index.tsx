import Layout from 'components/Layout';
import Menu from 'components/Menu';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import Sobre from 'pages/Sobre';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Root: React.FC = () => {
  return (
    <main>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="/cardapio" element={<Cardapio />} />
            <Route path="/sobre" element={<Sobre />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default Root;
