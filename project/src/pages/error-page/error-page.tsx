import {Link} from 'react-router-dom';
import styles from './error-page.module.css';
import Logo from '../../components/logo/logo';
import { AppRoute } from '../../const';

export default function ErrorPage(): JSX.Element {
  return (

    <div className={'page page--gray' && styles.page_error}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
          </div>
        </div>
      </header>

      <main >
        <title></title>

        <div >
          <section className={styles.error}>
            <h1 className={styles.title}>Server connection error</h1>
            <h3>
              <Link className={styles.button} to={AppRoute.Main}>Try again</Link>
            </h3>
          </section>
        </div>
      </main>
    </div>
  );
}
