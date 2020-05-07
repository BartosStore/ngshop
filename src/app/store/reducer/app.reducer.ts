import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { userReducers } from '../users/user.reducer';
import { postReducers } from '../posts/post.reducer';

// todo: counterReducers
export const appReducers: ActionReducerMap<IAppState, any> = {
  users: userReducers,
  posts: postReducers
}