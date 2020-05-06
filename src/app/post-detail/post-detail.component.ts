import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IAppState } from '../store/state/app.state';
import { selectSelectedUser } from '../store/selector/post.selector';
import { GetPost } from '../store/action/post.action';
import { IPost } from '../model/post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post$: Observable<IPost> = this._store.pipe(select(selectSelectedUser));
  post: IPost = this._initializePost();

  constructor(
    private _store: Store<IAppState>,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const postId = this._route.snapshot.params.postId;
    this._store.dispatch(new GetPost(postId));
    this.post$.subscribe(post => {
      this.post = post;
    });
  }

  private _initializePost(): IPost {
    return { id: null, title: "", body: "", userId: null };
  }
}
