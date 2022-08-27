import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import ReviewFormRating from './review-form-rating';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postReviewAction } from '../../store/api-actions';
import { ReviewLenght, FetchStatus } from '../../const';
import { getReviewPostStatus } from '../../store/data-reviews/selectors';

const RatingStarsTitles = [
  {title: 'perfect', value:'5'},
  {title: 'good', value: '4'},
  {title: 'not bad', value: '3'},
  {title: 'badly', value: '2'},
  {title: 'terribly', value: '1'}
];

type ReviewFormProps = {
  offerId: number;
}

export default function ReviewForm({offerId}: ReviewFormProps): JSX.Element {
  const [reviewData, setReviewData] = useState({
    comment: '',
    rating: '0'
  });

  const dispatch = useAppDispatch();
  const reviewPostStatus = useAppSelector(getReviewPostStatus);

  const resetFormData = () => {
    setReviewData({...reviewData, comment: '', rating: '0'});
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const reviewComment = {
      ...reviewData,
      offerId: offerId,
      resetData: resetFormData
    };
    dispatch(postReviewAction(reviewComment));
  };

  const isPostSubmiting = reviewPostStatus === FetchStatus.Loading;

  const isDisabled = reviewData.rating === '0'
  || reviewData.comment.length <= ReviewLenght.MIN
  || reviewData.comment.length >= ReviewLenght.MAX;

  const handleInputChange = useCallback((evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    evt.preventDefault();
    const {name, value} = evt.target;

    setReviewData(() => ({
      ...reviewData,
      [name]: value
    }));
  }, [reviewData]);

  return (
    <form onSubmit={handleFormSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RatingStarsTitles.map(({title, value}) => (
          <ReviewFormRating
            key={value}
            value={value}
            title={title}
            currentRating={reviewData.rating}
            onChange={handleInputChange}
            isDisabled={isPostSubmiting}
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
          disabled={isDisabled || isPostSubmiting}
        >
          {isPostSubmiting ? 'Submiting' : 'Submit'}
        </button>
      </div>
    </form>
  );
}
