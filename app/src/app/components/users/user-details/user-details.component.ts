import { PostsModel } from './../../../models/Posts.model';
import { UsersModel } from '../../../models/Users.model';
import { UserDetailsService } from './user-details.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators'
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  cancelCreate = false;
  usersCommetns: any  = [];
  form!: FormGroup;
  loading = false;
  userDetails!: UsersModel;
  subject$ = new Subject()
  id = this.router.snapshot.queryParams['id']
  userPosts!: Array<PostsModel>
  message!: string;
  constructor(protected router: ActivatedRoute, public detailsService: UserDetailsService, protected fb: FormBuilder
              ) { }
  ngOnDestroy(): void {
   this.subject$.next(true)
   this.subject$.complete()
  }

  ngOnInit(): void {
    this.getDetails()
  }


  getDetails(): void {
    // @ts-ignore
    this.router.data.pipe(takeUntil(this.subject$)).subscribe((res) => this.userDetails = res.details)
  }

}
