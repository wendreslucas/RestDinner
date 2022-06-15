import React from 'react';
import { ReactComponent as NotfoundImage } from 'assets/not_found.svg';
import classNames from 'classnames';
import stylesTema from 'styles/Tema.module.scss';
import styles from './NotFound.module.scss';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div
      className={classNames({
        [styles.container]: true,
        [stylesTema.container]: true,
      })}
    >
      <div className={styles.voltar}>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          {'<- Voltar'}
        </button>
      </div>
      <NotfoundImage />
    </div>
  );
};

export default NotFound;
