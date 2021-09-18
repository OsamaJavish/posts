import {Action, createReducer, on} from '@ngrx/store';
import {initialPostsState, IPostsState} from '../state/posts.state';
import * as PostsActions from '../actions/posts.action';




export const reducer = createReducer(
  initialPostsState,
  on(PostsActions.getPostsList,
    (state: IPostsState, {posts}) =>
      ({...state, posts}))
);

export function postsReducer(state: IPostsState | undefined, action: Action): any {
  return reducer(state, action);
}
