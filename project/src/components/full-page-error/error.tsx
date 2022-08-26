import {Link} from 'react-router-dom';
import styles from './error.module.css';
import { AppRoute } from '../../const';
import { store } from '../../store';
import { fetchOffersAction } from '../../store/api-actions';


export default function Error(): JSX.Element {
  const onErrorButtonHover = () => {
    store.dispatch(fetchOffersAction());
  };

  return (
    <section className="cities__places places" >
      <h1 className={styles.title}>Something went wrong</h1>
      <h3>
        <Link className={styles.button} to={AppRoute.Main} onClick={onErrorButtonHover}>Try again</Link>
      </h3>
    </section>

  );
}
