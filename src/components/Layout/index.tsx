import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';
import stylesTema from 'styles/Tema.module.scss';

const Layout: React.FC = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <div className={stylesTema.container}>
        <Outlet />
        {children}
      </div>
    </>
  );
};

export default Layout;
