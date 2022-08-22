import { Link } from 'react-router-dom';
import LoginForm from './login-form';
import { AppRoute, CitiesList } from '../../const';
import { useAppDispatch } from '../../hooks';
import Header from '../../components/header/header';
import { changeCity } from '../../store/app-process/app-process';

export default function LoginPage(): JSX.Element {
  const cityRandom = CitiesList[Math.floor(Math.random() * CitiesList.length)];
  const dispatch = useAppDispatch();

  return (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <LoginForm />
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Main} onClick={() => dispatch(changeCity(cityRandom.name))}>
                <span>{cityRandom.name}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
