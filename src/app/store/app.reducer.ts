import { ActionReducerMap } from '@ngrx/store';

import { IAppState } from './app.state';
import { userReducers } from './users/user.reducer';
import { postReducers } from './posts/post.reducer';

export const appReducers: ActionReducerMap<IAppState, any> = {
  users: userReducers,
  posts: postReducers
}