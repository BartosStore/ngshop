import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IUser } from '../model/user';

@Injectable()
export class UserService {
  usersUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private _http: HttpClient) {}

  fetchUsers(): Observable<IUser[]> {
    return this._http.get<IUser[]>(this.usersUrl);
  }
}