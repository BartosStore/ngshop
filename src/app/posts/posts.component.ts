import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IAppState } from '../store/app.state';
import { GetPosts } from '../store/posts/post.action';
import { GetUsers } from '../store/users/user.action';
import { IPost } from '../model/post';
import { IUser } from '../model/user';
import { selectPostList } from '../store/posts/post.selector';
import { selectUserList } from '../store/users/user.selector';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts$: Observable<IPost[]>;
  postsLength = 0;
  users$: Observable<IUser[]> = this._store.pipe(select(selectUserList));
  usersLength = 0;

  constructor(private _store: Store<IAppState>) {
    this.posts$ = this._store.pipe(select(selectPostList));
  }

  ngOnInit(): void {
    this._store.dispatch(new GetPosts());
    this.posts$.subscribe(posts => {
      this.postsLength = posts ? posts.length : 0;
    });

    this._store.dispatch(new GetUsers());
    this.users$.subscribe(users => {
      this.usersLength = users ? users.length : 0;
    });
  }
}
