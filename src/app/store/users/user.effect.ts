import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';

import { IAppState } from '../app.state';
import { UserService } from 'src/app/service/user.service';
import { EUserActions, GetUsers, GetUsersSuccess, GetUser, GetUserSuccess } from './user.action';
import { selectUserList } from './user.selector';
import { SafeRedirect } from '../errors/error.action';
import { AppErrors } from '../errors/error.state';

@Injectable()
export class UserEffects {
  constructor(
    private _store: Store<IAppState>,
    private _actions$: Actions,
    private _userService: UserService,
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
        return of(new SafeRedirect(AppErrors.usersNotAvailable));
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