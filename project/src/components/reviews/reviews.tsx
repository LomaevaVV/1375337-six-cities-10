import ReviewCard from '../review-card/review-card';
import ReviewForm from '../review-form/review-form';
import { PageSettings } from '../../const';
import { useAppSelector } from '../../hooks/index';
import { Review } from '../../types/review';
import dayjs from 'dayjs';
import { getReviews } from '../../store/data-reviews/selectors';
import { getIsUserAuth } from '../../store/user-process/selectors';

const dateCompare = (eventA: Review, eventB: Review) => dayjs(eventB.date).diff(eventA.date, 'minute');
const getSortedReviews = (reviews: Review[]) => [...reviews].sort(dateCompare);

type ReviewsProps = {
  offerId: number;
}

export default function Reviews({offerId}: ReviewsProps): JSX.Element {
  const isUserAuth = useAppSelector(getIsUserAuth);

  const reviews = useAppSelector(getReviews);

  const sortedReviews = getSortedReviews(reviews);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
      Reviews &middot;
        <span className="reviews__amount">
          {reviews.length}
        </span>
      </h2>
      <ul className="reviews__list">
        {sortedReviews.slice(0, PageSettings.MAX_REVIEWS_AMOUNT)
          .map((item) => <ReviewCard key={item.id} review={item} />)}
      </ul>
      {isUserAuth && <ReviewForm offerId={offerId}/>}
    </section>
  );
}
