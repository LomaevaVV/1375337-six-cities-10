import ReviewCard from '../../components/review-card/review-card';
import ReviewForm from '../../components/review-form/review-form';
import { MAX_REVIEWS_ON_PAGE, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks/index';
import { Reviews, Review } from '../../types/review';
import dayjs from 'dayjs';

const dateCompare = (eventA: Review, eventB: Review) => dayjs(eventB.date).diff(eventA.date, 'minute');
const getSortedReviews = (reviews: Reviews) => [...reviews].sort(dateCompare);

type ReviewsSectionProps = {
  OfferId: number;
}

export default function ReviewsSection({OfferId}: ReviewsSectionProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const reviews = useAppSelector((state) => state.reviews);

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
        {sortedReviews.slice(0, MAX_REVIEWS_ON_PAGE)
          .map((item) => <ReviewCard key={item.id} review={item} />)}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth && (
        <ReviewForm OfferId={OfferId}/>
      )}
    </section>
  );
}
