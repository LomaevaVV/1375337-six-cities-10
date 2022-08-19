import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { dataProcess } from './data-process/data-process';
import { useCaseProcess } from './usecase-process/usecase-process';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: dataProcess.reducer,
  [NameSpace.UseCase]: useCaseProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
