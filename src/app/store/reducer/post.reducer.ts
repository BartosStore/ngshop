import { initialPostState, IPostState } from '../state/post.state';
import { PostActions, EPostActions } from '../action/post.action';

export const postReducers = (
  state = initialPostState,
  action: PostActions
): IPostState => {
  // console.log('userReducers: ' + action.type);
  // console.log('compare: ' + EPostActions.GetPostsSuccess);
  

  // if (action.type == EPostActions.GetPostsSuccess) {
  //   console.log('SUCCESS');
  // }
  
  switch (action.type) {
    case EPostActions.GetPostsSuccess: {
      // console.log('GetPostsSuccess');
      console.log('payload'+action.payload);
      
      return {
        ...state,
        posts: action.payload
      }
    }

    case EPostActions.GetPostSuccess: {
      // console.log('GetPostSuccess');
      return {
        ...state,
        selectedPost: action.payload
      }
    }

    default:
      // console.log('ERROR');
      return state;
  }
}