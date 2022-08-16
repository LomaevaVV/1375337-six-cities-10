import React from 'react';

const RatingStarsTitles: {
  [key: number]: string
} = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect'
};


type FormRatingProps = {
  index: number;
  currentRating: number;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function ReviewFormRating({index, currentRating, onChange}: FormRatingProps): JSX.Element {
  return (
    <React.Fragment>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={index}
        id={`${index}-stars`}
        type="radio"
        onChange={onChange}
        checked={currentRating === index}
      />
      <label
        htmlFor={`${index}-stars`}
        className="reviews__rating-label form__rating-label"
        title={RatingStarsTitles[index]}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </React.Fragment>
  );
}
