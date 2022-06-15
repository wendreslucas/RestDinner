import React from 'react';
import styles from './Prato.module.scss';
import { useLocation } from 'react-router-dom';

const Prato: React.FC = () => {
  console.log(useLocation());
  return <h1>PRATO</h1>;
};

export default Prato;
