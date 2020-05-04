import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IPost } from '../model/post';

@Injectable()
export class PostService {
  postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private _http: HttpClient) {}

  getPosts(): Observable<IPost[]> {
    return this._http.get<IPost[]>(this.postsUrl);
  }
}