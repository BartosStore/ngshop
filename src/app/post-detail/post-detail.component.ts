import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IAppState } from '../store/app.state';
import { GetPost } from '../store/posts/post.action';
import { GetUser } from '../store/users/user.action';
import { IPost } from '../model/post';
import { IUser } from '../model/user';
import { selectSelectedPost } from '../store/posts/post.selector';
import { selectSelectedUser } from '../store/users/user.selector';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post$: Observable<IPost> = this._store.pipe(select(selectSelectedPost));
  post: IPost = this._initializePost();

  user$: Observable<IUser> = this._store.pipe(select(selectSelectedUser));
  user: IUser = this._initializeUser();

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

    this._store.dispatch(new GetUser(this.post.id));
    this.user$.subscribe(user => {
      this.user = user;
    });
  }

  private _initializePost(): IPost {
    return { id: null, title: "", body: "", userId: null };
  }

  private _initializeUser(): IUser {
    return { id: null, name: "", email: "" };
  }
}
