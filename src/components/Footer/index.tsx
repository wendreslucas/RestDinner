import styles from './Footer.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';

// import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
    </footer>
  );
};

export default Footer;
