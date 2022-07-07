import { environment } from '../../../environments/environment';
import { CommentModel } from '../../models/Comment.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersPostsDialogService {

  api = environment.SERVER_API_URL

  constructor(protected http: HttpClient) { }

  create(body: CommentModel, id: number): Observable<CommentModel> {
    return this.http.post<CommentModel>(`${this.api}posts/${id}/comments`, body)
  }
}
