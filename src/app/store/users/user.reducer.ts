import { initialUserState, IUserState } from './user.state';
import { UserActions, EUserActions } from './user.action';

export const userReducers = (
  state = initialUserState,
  action: UserActions
): IUserState => {
  switch (action.type) {
    case EUserActions.GetUsersSuccess: {
      return {
        ...state,
        users: action.payload
      }
    }

    case EUserActions.GetUserSuccess: {
      return {
        ...state,
        selectedUser: action.payload
      }
    }

    default:      
      return state;
  }
}