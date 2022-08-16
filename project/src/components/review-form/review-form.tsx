import { ChangeEvent, FormEvent, useState } from 'react';
import ReviewFormRating from './review-form-rating';
import { useAppDispatch } from '../../hooks';
import { postReviewAction } from '../../store/api-actions';
import { REVIEW_MAX_LENGTH, REVIEW_MIN_LENGTH } from '../../const';

type ReviewFormProps = {
  OfferId: number;
}

export default function ReviewForm({OfferId}: ReviewFormProps): JSX.Element {
  const [reviewData, setReviewData] = useState({
    comment: '',
    rating: 0
  });

  const [isReviewLengthOk, setIsReviewLengthOk] = useState(false);

  const dispatch = useAppDispatch();

  const resetFormData = () => {
    setReviewData({...reviewData, 'comment': '', 'rating': 0});
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

  const checkReviewLength = (review: string) => {
    if(review.length >= REVIEW_MIN_LENGTH && review.length <= REVIEW_MAX_LENGTH) {
      setIsReviewLengthOk(true);
      return;
    }
    setIsReviewLengthOk(false);
  };

  const isDisabled = () => isReviewLengthOk && reviewData.rating !== 0;

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    evt.preventDefault();
    const {name, value} = evt.target;

    setReviewData({
      ...reviewData,
      [name]: value
    });

    checkReviewLength(reviewData.comment);
    window.console.log(isDisabled);
  };

  const getRatingStars = () => {
    const ratingFields = [];
    for (let i = 5; i > 0; i--) {
      ratingFields.push(<ReviewFormRating key={i} index={i} currentRating={reviewData.rating} onChange={handleInputChange}/>);
    }
    return ratingFields;
  };


  return (
    <form onSubmit={handleFormSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {getRatingStars()}
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
          disabled={!isReviewLengthOk || reviewData.rating === 0}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
