import ReviewCard from '../review-card/review-card';
import ReviewForm from '../review-form/review-form';
import { PageSettings, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks/index';
import { Review } from '../../types/review';
import dayjs from 'dayjs';
import { getReviews } from '../../store/data-process/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

const dateCompare = (eventA: Review, eventB: Review) => dayjs(eventB.date).diff(eventA.date, 'minute');
const getSortedReviews = (reviews: Review[]) => [...reviews].sort(dateCompare);

type ReviewsProps = {
  OfferId: number;
}

export default function Reviews({OfferId}: ReviewsProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

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
      {authorizationStatus === AuthorizationStatus.Auth && (
        <ReviewForm OfferId={OfferId}/>
      )}
    </section>
  );
}
