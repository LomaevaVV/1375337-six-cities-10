const STARS_MAX = 5;

const setRatingStarsPercent = (rating: number): string => `${Math.round((rating * 100 / STARS_MAX))}%`;

const setHostProStatus = (): JSX.Element => (
  <span className="property__user-status">
    Pro
  </span>
);

export {setRatingStarsPercent, setHostProStatus};
