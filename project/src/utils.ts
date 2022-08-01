import dayjs from 'dayjs';

const STARS_MAX = 5;

const formatRatingToStars = (rating: number): string => `${Math.round((rating * 100 / STARS_MAX))}%`;

const ucFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

const humanizeEventDate = (date: string, format: string) => dayjs(date).format(format);

export {formatRatingToStars, ucFirstLetter, humanizeEventDate};
