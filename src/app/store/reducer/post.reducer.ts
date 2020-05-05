import { initialPostState, IPostState } from '../state/post.state';
import { PostActions, EPostActions } from '../action/post.action';

export const postReducers = (
  state = initialPostState,
  action: PostActions
): IPostState => {
  switch (action.type) {
    case EPostActions.GetPostsSuccess: {
      return {
        ...state,
        posts: action.payload
      }
    }

    case EPostActions.GetPostSuccess: {
      return {
        ...state,
        selectedPost: action.payload
      }
    }

    default:
      return state;
  }
}