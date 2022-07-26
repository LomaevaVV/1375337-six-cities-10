import { useState } from 'react';
import Card from '../../components/card/card';
import {Offers} from '../../types/offer';
import {CardClassName} from '../../const';

type CardsListProps = {
  offers: Offers;
  cardClassName: string;
};

export default function CardsList({offers, cardClassName}: CardsListProps): JSX.Element {
  const listClassName =
    cardClassName === CardClassName.Cities
      ? `${cardClassName}__places-list`
      : `${cardClassName}__list`;

  const [, setFocusedCard] = useState(0);

  return (
    <div className={`${listClassName} places__list`}>
      {offers.map((item) => (
        <Card
          key={item.id}
          offer={item}
          cardClassName={cardClassName}
          onMouseOver={() => setFocusedCard(item.id)}
          onMouseLeave={() => setFocusedCard(0)}
        />
      ))}
    </div>
  );
}
