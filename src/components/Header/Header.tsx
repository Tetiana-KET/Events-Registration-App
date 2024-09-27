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
        <Link to={'/'} className="button">
          Home
        </Link>
      </div>
    </header>
  );
}
export default Header;
