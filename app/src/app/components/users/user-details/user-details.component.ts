import { PostsModel } from './../../../models/Posts.model';
import { UsersModel } from '../../../models/Users.model';
import { UserDetailsService } from './user-details.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userDetails!: UsersModel;
  id = this.router.snapshot.queryParams.id
  userPosts!: Array<PostsModel>
  constructor(protected router: ActivatedRoute, public detailsService: UserDetailsService
              ) { }

  ngOnInit(): void {
    this.getDetails()
    this.getUserPost()
  }

  getDetails(): void {
    this.router.data.subscribe((res) => this.userDetails = res.details)
  }

  getUserPost(): void {
    console.log('res')
    this.detailsService.getUserPosts(this.id).subscribe(res => this.userPosts = res)
  }

}
