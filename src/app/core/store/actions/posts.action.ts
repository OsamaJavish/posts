import {createAction} from '@ngrx/store';
import {Post} from '../../models';


export enum EPostActions {
  GetPostsList = '[POST] Get Posts',
}

export const getPostsList = createAction(
  EPostActions.GetPostsList,
  (posts: Post[]) => ({posts})
);



