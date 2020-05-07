import { Action } from '@ngrx/store';

import { AppErrors } from '../state/error.state';

export enum EErrorActions {
  SafeRedirect = '[App] Safe Redirect',
  SafeRedirectSuccess = '[App] Safe Redirect Success'
}

export class SafeRedirect implements Action {
  public readonly type = EErrorActions.SafeRedirect;
  constructor(public payload: AppErrors) { }
}

export class SafeRedirectSuccess implements Action {
  public readonly type = EErrorActions.SafeRedirectSuccess;
  constructor(public payload: string) { }
}

export type ErrorActions = SafeRedirect | SafeRedirectSuccess;