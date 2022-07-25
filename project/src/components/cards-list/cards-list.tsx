import { useState } from 'react';
import Card from '../../components/card/card';
import {Offer} from '../../types/offer';
import {Offers} from '../../types/offer';
import {CardClassName} from '../../const';

type CardsListProps = {
  offers: Offers;
  cardClassName: string;
};

export default function CardsList({offers, cardClassName}: CardsListProps): JSX.Element {
  const listClassName = () => cardClassName === CardClassName.MainPage ? `${cardClassName}__places-list` : 'near-places__list';
  const [, setFocusedCard] = useState({} as Offer);

  return (
    <div className={`${listClassName()} places__list tabs__content`}>
      {offers.map((item) => (
        <Card
          key={item.id}
          offer={item}
          cardClassName={cardClassName}
          onMouseOver={() => setFocusedCard(item)}
          onMouseOut={() => setFocusedCard({} as Offer)}
        />
      ))}
    </div>
  );
}