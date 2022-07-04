import { UsersModel } from '../models/Users.model';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
api = environment.SERVER_API_URL;
  constructor(
    private http: HttpClient
    ) { }

    getUsers(): Observable<Array<UsersModel>> {
      return this.http.get<Array<UsersModel>>(`${this.api}/users`);
    }
}
