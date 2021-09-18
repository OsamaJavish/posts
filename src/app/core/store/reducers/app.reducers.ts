import {ActionReducerMap} from '@ngrx/store';
import {IAppState} from '../state/app.state';
import {postsReducer} from './posts.reducer';

export const appReducers: ActionReducerMap<IAppState, any> = {
  postsList: postsReducer,
};
