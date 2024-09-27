import { useRouteError } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css';

interface RouteError {
  statusText?: string;
  message?: string;
}

function NotFound(): JSX.Element {
  const error = useRouteError() as RouteError;
  const navigate = useNavigate();
  return (
    <section className={styles.notFoundPage}>
      <div className={styles.errorMessage}>
        <p className={styles.notFoundPageText}>
          OOPS! <br />
          Something went wrong...
        </p>
        <p className={styles.notFoundPageText}>
          <i>{error.statusText || error.message}</i>
        </p>

        <div className={styles.errorImgWrap}>
          <img src="/404-error-page.gif" alt="404-svg-animation.svg" />
        </div>
        <button
          className={`${styles.homeButton} ${'button'}`}
          type="button"
          onClick={() => {
            navigate('/');
          }}
        >
          Home
        </button>
      </div>
    </section>
  );
}
export default NotFound;
