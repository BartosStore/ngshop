import { IPost } from 'src/app/model/post';

export interface IPostState {
  posts: IPost[];
  selectedPost: IPost;
}

export const initialPostState: IPostState = {
  posts: null,
  selectedPost: null
}