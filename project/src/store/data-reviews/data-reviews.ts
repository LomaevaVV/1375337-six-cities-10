import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, FetchStatus } from '../../const';
import { Reviews } from '../../types/review';
import { fetchReviewsAction, postReviewAction } from '../api-actions';

export type DataReviews = {
  reviews: Reviews;
  reviewPostStatus: string
};

const initialState: DataReviews = {
  reviews: [],
  reviewPostStatus: FetchStatus.Idle,
};

export const dataReviews = createSlice({
  name: NameSpace.DataReviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(postReviewAction.pending, (state) => {
        state.reviewPostStatus = FetchStatus.Loading;
      })
      .addCase(postReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.reviewPostStatus = FetchStatus.Success;
      })
      .addCase(postReviewAction.rejected, (state) => {
        state.reviewPostStatus = FetchStatus.Rejected;
      });
  }
});
