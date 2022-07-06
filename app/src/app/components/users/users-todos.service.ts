import { UserTodosModel } from './../../models/UserTodos.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersTodosService {

  states = [
    'pending', 'completed'
  ]

  api = environment.SERVER_API_URL;
  id = this.activatedRoute.snapshot.queryParams.id;

  constructor(protected http: HttpClient, protected activatedRoute: ActivatedRoute) { }


 
 getUserTodos(): Observable<Array<UserTodosModel>> {
    return this.http.get<Array<UserTodosModel>>(`${this.api}users/${this.id}/todos`)
  }

  createUserTodos(body: UserTodosModel): Observable<UserTodosModel> {
    return this.http.post<UserTodosModel>(`${this.api}users/${this.id}/todos`, body)
  }
}
