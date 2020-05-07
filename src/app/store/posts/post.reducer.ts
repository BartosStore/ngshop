import { initialPostState, IPostState } from './post.state';
import { PostActions, EPostActions } from './post.action';

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