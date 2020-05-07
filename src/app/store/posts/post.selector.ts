import { createSelector } from '@ngrx/store';

import { IAppState } from '../app.state';
import { IPostState } from './post.state';

const selectPosts = (state: IAppState) => state.posts;

export const selectPostList = createSelector(
  selectPosts,
  (state: IPostState) => state.posts
)

export const selectSelectedPost = createSelector(
  selectPosts,
  (state: IPostState) => state.selectedPost
)