import {Link} from 'react-router-dom';
import Logo from '../../components/logo/logo';

export default function NotFoundPage(): JSX.Element {
  return (

    <div className="page page--gray">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
          </div>
        </div>
      </header>

      <main className="page__main page__main--not-found">
        <title>Page not found</title>

        <div className="page__not-found-container container">
          <section>
            <h1>Page not found</h1>
            <h2>404</h2>
            <span>{'The link you followed may be broken, or the page have been removed or it\'s temporarily unavailable.'}</span>
            <Link className="" to="/#">Вернуться на главную страницу</Link>
          </section>
        </div>
      </main>
    </div>
  );
}
