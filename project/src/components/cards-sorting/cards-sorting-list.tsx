import cn from 'classnames';
import {OffersSortTypes} from '../../const';

type CardsSortingListProps = {
  isSortingOpened: boolean;
  selectedSortType: string
  onChangeSortType: (currentCity: string) => void;
}

export default function CardsSortingList({isSortingOpened, selectedSortType, onChangeSortType}: CardsSortingListProps): JSX.Element {
  const formSortingClassName = cn('places__options places__options--custom', {
    'places__options--opened': isSortingOpened,
    'places__options': !isSortingOpened
  });

  const getSortItemClassName = (sortType: string) => (cn('places__option', {'places__option--active': sortType === selectedSortType}));

  return(
    <ul className={formSortingClassName}>
      {
        Object.values(OffersSortTypes).map((sortType) => (
          <li
            key={sortType}
            className={getSortItemClassName(sortType)}
            tabIndex={0}
            onClick={() => onChangeSortType(sortType)}
          >
            {sortType}
          </li>
        ))
      }

    </ul>
  );
}
