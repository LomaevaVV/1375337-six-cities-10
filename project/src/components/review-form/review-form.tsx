import { ChangeEvent, FormEvent, useState } from 'react';
import ReviewFormRating from './review-form-rating';
import { useAppDispatch } from '../../hooks';
import { postReviewAction } from '../../store/api-actions';
import { REVIEW_MAX_LENGTH, REVIEW_MIN_LENGTH } from '../../const';

const RatingStarsTitles: {
  [key: number]: string
} = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect'
};

type ReviewFormProps = {
  OfferId: number;
}

export default function ReviewForm({OfferId}: ReviewFormProps): JSX.Element {
  const [reviewData, setReviewData] = useState({
    comment: '',
    rating: '0'
  });

  const dispatch = useAppDispatch();

  const resetFormData = () => {
    setReviewData({...reviewData, comment: '', rating: '0'});
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const reviewComment = {
      ...reviewData,
      offerId: OfferId,
      resetData: resetFormData
    };
    dispatch(postReviewAction(reviewComment));
  };

  const isDisabled = reviewData.rating === '0'
  || reviewData.comment.length <= REVIEW_MIN_LENGTH
  || reviewData.comment.length >= REVIEW_MAX_LENGTH;

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    evt.preventDefault();
    const {name, value} = evt.target;

    setReviewData({
      ...reviewData,
      [name]: value
    });
  };

  return (
    <form onSubmit={handleFormSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(RatingStarsTitles).map(([value, title]) => (
          <ReviewFormRating
            key={title}
            value={value}
            title={title}
            currentRating={reviewData.rating}
            onChange={handleInputChange}
          />
        ))}
      </div>
      <textarea
        value={reviewData.comment}
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleInputChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
