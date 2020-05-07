import { initialErrorState, IErrorState } from './error.state';
import { ErrorActions, EErrorActions } from './error.action';

export const errorReducer = (
  state = initialErrorState,
  action: ErrorActions
): IErrorState => {
  switch (action.type) {
    case EErrorActions.SafeRedirectSuccess: {
      return {
        ...state,
        message: action.payload
      }
    }

    default:
      return state;
  }
};