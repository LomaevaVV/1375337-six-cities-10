import { useState } from 'react';
import CardsSortingList from './cards-sorting-list';
import {useAppSelector, useAppDispatch} from '../../hooks/index';
import { setSortType } from '../../store/action';

export default function CardsSortingForm(): JSX.Element {
  const [isSortingOpened, setSortingOpenedMarker] = useState(false);
  const dispatch = useAppDispatch();

  const selectedSortType = useAppSelector((state) => state.sortType);

  const handleSelectSortingClick = () => {
    setSortingOpenedMarker(!isSortingOpened);
  };

  const handleSortTypeChange = (sortType: string) => {
    setSortingOpenedMarker(false);
    dispatch(setSortType(sortType));
  };

  return(
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSelectSortingClick}>
        {selectedSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <CardsSortingList
        isSortingOpened={isSortingOpened}
        selectedSortType={selectedSortType}
        onChangeSortType={handleSortTypeChange}
      />
    </form>
  );
}
