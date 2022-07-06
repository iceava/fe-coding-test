import { PostsModel } from './../../../models/Posts.model';
import { UsersModel } from '../../../models/Users.model';
import { UserDetailsService } from './user-details.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { finalize } from 'rxjs/operators'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  cancelCreate = false;
  usersCommetns: any  = [];
  form!: FormGroup;
  loading = false;
  userDetails!: UsersModel;
  id = this.router.snapshot.queryParams.id
  userPosts!: Array<PostsModel>
  message!: string;
  constructor(protected router: ActivatedRoute, public detailsService: UserDetailsService, protected fb: FormBuilder
              ) { }

  ngOnInit(): void {
    this.getDetails()
  }


  getDetails(): void {
    this.router.data.subscribe((res) => this.userDetails = res.details)
  }

}
