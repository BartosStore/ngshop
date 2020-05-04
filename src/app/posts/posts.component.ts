import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IAppState } from '../store/state/app.state';
import { GetPosts } from '../store/action/post.action';
import { selectPostList } from '../store/selector/post.selector';
import { IPost } from '../model/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts$: Observable<IPost[]>;
  length = 0;

  constructor(private _store: Store<IAppState>) {
    this.posts$ = this._store.pipe(select(selectPostList));
  }

  ngOnInit(): void {  
    this._store.dispatch(new GetPosts());
    this.posts$.subscribe(posts => {
      this.length = posts ? posts.length : 0;
    });
  }
}
