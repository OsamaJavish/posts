import {createSelector} from '@ngrx/store';
import {IPostsState} from '../state/posts.state';
import {IAppState} from '../state/app.state';


const selectPosts = (state: IAppState) => state.postsList;


export const selectPostsList = createSelector(selectPosts,
  (state: IPostsState) => state.posts);
