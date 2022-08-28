import {Link} from 'react-router-dom';
import {AppRoute, CitiesList} from '../../const';
import cn from 'classnames';

type CitiesFilterListProps = {
  selectedCity: string;
  onChangeCity: (currentCity: string) => void;
}

export default function CitiesFilterList({selectedCity, onChangeCity}: CitiesFilterListProps): JSX.Element {
  const getCityClassName = (city: string) => cn('locations__item-link tabs__item', {'tabs__item--active': selectedCity === city});

  return(
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CitiesList.map((city) =>
            (
              <li key={city.name} className="locations__item">
                <Link
                  className={getCityClassName(city.name)}
                  onClick={() => onChangeCity(city.name)}
                  to={AppRoute.Main}
                >
                  <span>{city.name}</span>
                </Link>
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
}
