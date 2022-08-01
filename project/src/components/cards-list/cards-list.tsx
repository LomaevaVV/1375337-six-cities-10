import Card from '../../components/card/card';
import {Offers} from '../../types/offer';
import {CardClassName} from '../../const';

type CardsListProps = {
  offers: Offers;
  cardClassName: string;
  onListItemHover?: (listItemName: number) => void;
};

export default function CardsList({offers, cardClassName, onListItemHover}: CardsListProps): JSX.Element {
  const listClassName =
    cardClassName === CardClassName.Cities
      ? `${cardClassName}__places-list`
      : `${cardClassName}__list`;

  return (
    <div className={`${listClassName} places__list`}>
      {offers.map((item) => (
        <Card
          key={item.id}
          offer={item}
          cardClassName={cardClassName}
          onMouseOver={onListItemHover ? () => onListItemHover(item.id) : undefined}
          onMouseLeave={onListItemHover ? () => onListItemHover(0) : undefined}
        />
      ))}
    </div>
  );
}
