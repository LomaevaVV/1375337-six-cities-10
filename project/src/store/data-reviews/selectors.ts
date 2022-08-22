import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Reviews } from '../../types/review';

export const getReviews = (state: State): Reviews | [] => state[NameSpace.DataReviews].reviews;
export const getReviewPostStatus = (state: State): string => state[NameSpace.DataReviews].reviewPostStatus;
