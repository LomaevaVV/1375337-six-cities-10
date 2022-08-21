import {Link} from 'react-router-dom';
import styles from './error.module.css';
import { AppRoute } from '../../const';

type ErrorProps = {
  onClick?: () => void;
};

export default function Error({onClick}: ErrorProps): JSX.Element {
  return (
    <section className="cities__places places" >
      <h1 className={styles.title}>Something went wrong</h1>
      <h3>
        <Link className={styles.button} to={AppRoute.Main} onClick={onClick}>Try again</Link>
      </h3>
    </section>

  );
}
