import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { Router } from '@angular/router';
import { switchMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { SafeRedirect, EErrorActions, SafeRedirectSuccess } from './error.action';
import { AppErrors } from './error.state';

@Injectable()
export class ErrorEffects {
  constructor(
    private _actions$: Actions,
    private _router: Router
  ) { }

  @Effect()
  safeRedirect$ = this._actions$.pipe(
    ofType<SafeRedirect>(EErrorActions.SafeRedirect),
    map(action => action.payload),
    switchMap((error: AppErrors) => {
      let message: string = "";
      if (error === AppErrors.postsNotAvailable) {
        message = "Posts were not available";
        this._router.navigate(['']);
      } else if (error === AppErrors.usersNotAvailable) {
        message = "Users were not available";
        this._router.navigate(['']);
      }
      return of(new SafeRedirectSuccess(message));
    })
  )
}