import {Review} from '../../types/review';
import {setRatingStarsPercent, setHostProStatus} from '../../utils';

type ReviewFormProps = {
  review: Review
};

export default function ReviewCard({review}: ReviewFormProps): JSX.Element {
  const {
    comment,
    user
  } = review;

  return (
    <li key={`review-${review.id}`} className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
        {user.isPro ? setHostProStatus() : ''}
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: setRatingStarsPercent(review.rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
      </div>
    </li>
  );
}
