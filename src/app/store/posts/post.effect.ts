import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { map, withLatestFrom, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { PostService } from 'src/app/service/post.service';
import { IAppState } from '../state/app.state';
import { EPostActions, GetPost, GetPostSuccess, GetPosts, GetPostsSuccess } from './post.action';
import { selectPostList } from './post.selector';
import { SafeRedirect } from '../errors/error.action';
import { AppErrors } from '../errors/error.state';

@Injectable()
export class PostEffects {
  constructor(
    private _store: Store<IAppState>,
    private _actions$: Actions,
    private _postService: PostService,
  ) { }

  @Effect()
  getPost$ = this._actions$.pipe(
    ofType<GetPost>(EPostActions.GetPost),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectPostList))),
    switchMap(([id, posts]) => {
      if (posts !== null) {
        const selectedPost = posts.filter(post => post.id == +id)[0];
        return of(new GetPostSuccess(selectedPost));
      } else {
        return of(new SafeRedirect(AppErrors.postsNotAvailable));
      }
    }),
  );

  @Effect()
  getPosts$ = this._actions$.pipe(
    // tap((action) => console.log(`Received: ` + action.type)),
    ofType<GetPosts>(EPostActions.GetPosts),
    switchMap(() => this._postService.getPosts()),
    switchMap((posts) => of(new GetPostsSuccess(posts)))
  )
}