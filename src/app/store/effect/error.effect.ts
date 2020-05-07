import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { Router } from '@angular/router';
import { switchMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { SafeRedirect, EErrorActions, SafeRedirectSuccess } from '../action/error.action';
import { AppErrors } from '../state/error.state';

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
    tap((input) => console.log(input)),
    switchMap((error: AppErrors) => {
      let message: string = "";
      if (error === AppErrors.postsNotAvailable) {
        message = "Posts were not available";
        this._router.navigate(['']);
      }
      return of(new SafeRedirectSuccess(message));
    })
  )
}