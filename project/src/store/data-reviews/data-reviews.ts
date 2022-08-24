import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, FetchStatus } from '../../const';
import { fetchReviewsAction, postReviewAction } from '../api-actions';
import { DataReviews } from '../../types/state';

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
        state.reviewPostStatus = FetchStatus.Succecc;
      })
      .addCase(postReviewAction.rejected, (state) => {
        state.reviewPostStatus = FetchStatus.Rejected;
      });
  }
});
