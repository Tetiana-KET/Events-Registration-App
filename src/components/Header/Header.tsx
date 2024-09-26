import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogoWrap}>
          <Link to={'https://www.eliftech.com/'}>
            <img src="/logo-color.svg" alt="logo-color.svg" />
          </Link>
        </div>
        <p>I am Header</p>
      </div>
    </header>
  );
}
export default Header;
