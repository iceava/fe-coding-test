import {  PostsModel } from './../../../models/Posts.model';
import { UsersModel } from '../../../models/Users.model';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {CommentModel} from "../../../models/Comment.model";

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  api = environment.SERVER_API_URL
  id = this.router.snapshot.queryParams['id'];

  constructor(protected http: HttpClient,
              protected router: ActivatedRoute) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UsersModel> {
    const id = route.queryParams['id']
    return this.http.get<UsersModel>(`${this.api}users/${id}`)
  }

  getUserPosts(id: number): Observable<Array<PostsModel>> {
    return this.http.get<Array<PostsModel>>(`${this.api}users/${id}/posts`)
  }

  createPost(body: PostsModel, id: number): Observable<PostsModel> {
    return this.http.post<PostsModel>(`${this.api}users/${id}/posts`, body)
  }

  getPostComments(id: number): Observable<Array<CommentModel>>{
    return this.http.get<Array<CommentModel>>(`${this.api}posts/${id}/comments`)

  }

}
