import { Injectable } from '@angular/core';
import { Store, select, Action } from '@ngrx/store';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of, Observable } from 'rxjs';
import { map, withLatestFrom, switchMap, every, tap } from 'rxjs/operators';

import { PostService } from 'src/app/service/post.service';
import { IAppState } from '../state/app.state';
import { EPostActions, GetPost, GetPostSuccess, GetPosts, GetPostsSuccess } from '../action/post.action';
import { selectPostList } from '../selector/post.selector';

@Injectable()
export class PostEffects {
  constructor(
    private _store: Store<IAppState>,
    private _actions$: Actions,
    private _postService: PostService
  ) { }

  @Effect()
  getPost$ = this._actions$.pipe(
    ofType<GetPost>(EPostActions.GetPost),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectPostList))),
    switchMap(([id, posts]) => {
      const selectedPost = posts.filter(post => post.id === +id)[0];
      return of(new GetPostSuccess(selectedPost));
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