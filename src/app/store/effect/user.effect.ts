import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';

import { UserService } from 'src/app/service/user.service';
import { IAppState } from '../state/app.state';
import { EUserActions, GetUsers, GetUsersSuccess, GetUser, GetUserSuccess } from '../action/user.action';
import { selectUserList } from '../selector/user.selector';

@Injectable()
export class UserEffects {
  constructor(
    private _store: Store<IAppState>,
    private _actions$: Actions,
    private _userService: UserService,
    private _router: Router
  ) { }

  @Effect()
  getUser$ = this._actions$.pipe(
    ofType<GetUser>(EUserActions.GetUser),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectUserList))),
    switchMap(([id, users]) => {
      if (users !== null) {
        const user = users.find(user => user.id === id);
        return of(new GetUserSuccess(user));
      } else {
        // todo: show error to user
        // todo: create reusable FailAction and do redirect inside
        this._router.navigate(['']);
      }
    })
  );

  @Effect()
  getUsers$ = this._actions$.pipe(
    // tap((action) => console.log(`Received: ` + action.type)),
    ofType<GetUsers>(EUserActions.GetUsers),
    switchMap(() => this._userService.fetchUsers()),
    switchMap((users) => of(new GetUsersSuccess(users)))
  )
}