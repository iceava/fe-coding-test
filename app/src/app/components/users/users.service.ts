import { UsersModel } from '../../models/Users.model';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
api = environment.SERVER_API_URL;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
    ) { }

    getUsers(): Observable<HttpResponse<UsersModel[]>> {
      const page = this.route.snapshot.queryParams.page
      let params: HttpParams = new HttpParams;
      params = params.append('page', page.toString())
      return this.http.get<Array<UsersModel>>(`${this.api}/users`, {observe: 'response', params});
    }

    delete(id: number): Observable<UsersModel> {
     return this.http.delete<UsersModel>(`${this.api}/users/${id}`)
    }
} 
