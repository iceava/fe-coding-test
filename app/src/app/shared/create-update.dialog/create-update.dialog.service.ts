import { UsersModel } from '../../models/Users.model';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateUpdateService {

  url = environment.SERVER_API_URL
  genders = ['male', 'female']
  states = ['active', 'inactive']

  constructor(protected http: HttpClient) { }

  create(body: UsersModel): Observable<UsersModel> {
    return this.http.post<UsersModel>(this.url + 'users', body)
  }

  update(body: UsersModel, id: number): Observable<UsersModel> {
    return this.http.put<UsersModel>(`${this.url}/users/${id}`, body)
  }
}
