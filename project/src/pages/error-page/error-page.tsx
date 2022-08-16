import {Link} from 'react-router-dom';
import styles from './error-page.module.css';
import { AppRoute } from '../../const';
import Header from '../../components/header/header';

export default function ErrorPage(): JSX.Element {
  return (

    <div className={'page page--gray' && styles.page_error}>
      <Header />

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
