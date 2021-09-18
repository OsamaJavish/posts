import {Post} from '../../models';


export interface IPostsState {
  posts: Post[];
}

export const initialPostsState: IPostsState = {
  posts: []
};
