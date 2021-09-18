import {initialPostsState, IPostsState} from './posts.state';

export interface IAppState {
  postsList: IPostsState;
}

export const initialAppState: IAppState = {
  postsList: initialPostsState,
};


export function getInitialState(): IAppState {
  return initialAppState;
}
