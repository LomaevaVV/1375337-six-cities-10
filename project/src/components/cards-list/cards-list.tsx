import Card from '../../components/card/card';
import {Offers} from '../../types/offer';
import {CardClassName} from '../../const';
import { useAppDispatch } from '../../hooks';
import { setFocusedCardId } from '../../store/app-process/app-process';
import { useCallback } from 'react';

type CardsListProps = {
  offers: Offers;
  cardClassName: string;
};

export default function CardsList({offers, cardClassName}: CardsListProps): JSX.Element {
  const dispatch = useAppDispatch();

  const listClassName =
    cardClassName === CardClassName.Cities
      ? `${cardClassName}__places-list`
      : `${cardClassName}__list`;

  const onListItemHover = useCallback((listItemId?: number) => {
    if (cardClassName === CardClassName.Cities) {
      dispatch(setFocusedCardId(listItemId));
    }
  }, [cardClassName, dispatch]);

  return (
    <div className={`${listClassName} places__list`}>
      {offers.map((item) => (
        <Card
          key={item.id}
          offer={item}
          cardClassName={cardClassName}
          onListItemHover={onListItemHover}
        />
      ))}
    </div>
  );
}
