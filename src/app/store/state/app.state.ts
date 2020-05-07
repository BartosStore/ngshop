import { IUserState, initialUserState } from './user.state';
import { IPostState, initialPostState } from '../posts/post.state';

export interface IAppState {
  users: IUserState,
  posts: IPostState
}

export const initialAppState: IAppState = {
  users: initialUserState,
  posts: initialPostState
}

export function getInitialAppState(): IAppState {
  return initialAppState;
}