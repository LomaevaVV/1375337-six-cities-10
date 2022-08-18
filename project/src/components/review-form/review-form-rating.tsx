import React from 'react';

type FormRatingProps = {
  currentRating: string;
  value: string;
  title: string;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function ReviewFormRating({currentRating, value, title, onChange}: FormRatingProps): JSX.Element {
  return (
    <React.Fragment>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}-stars`}
        type="radio"
        onChange={onChange}
        checked={currentRating === value}
      />
      <label
        htmlFor={`${value}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </React.Fragment>
  );
}
