import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostsModel } from 'src/app/models/Posts.model';
import { UsersModel } from 'src/app/models/Users.model';
import { UserDetailsService } from '../user-details/user-details.service';
import { finalize } from 'rxjs/operators'
import { MatDialog } from '@angular/material/dialog';
import { UsersPostsDialogComponent } from 'src/app/shared/users-posts-dialog/users-posts-dialog.component';

@Component({
  selector: 'app-users-posts',
  templateUrl: './users-posts.component.html',
  styleUrls: ['./users-posts.component.scss']
})
export class UsersPostsComponent implements OnInit {

  cancelCreate = false;
  usersComments: any  = [];
  showing  = false;
  form!: FormGroup;
  loading = false;
  userDetails!: UsersModel;
  id = this.router.snapshot.queryParams.id
  userPosts!: Array<PostsModel>
  message!: string;
  constructor(
    protected router: ActivatedRoute, 
    public detailsService: UserDetailsService, 
    protected fb: FormBuilder,
    private dialog: MatDialog,
              ) { }

  ngOnInit(): void {
    this.getDetails()
    this.getUserPost()
    this.initFrom()
  }


    initFrom(): void {
      this.form = this.fb.group({
        title: [null, []],
        body: [null, []]
      })
    }
  
    getDetails(): void {
      this.router.data.subscribe((res) => this.userDetails = res.details)
    }
  
    getUserPost(): void {
      this.detailsService.getUserPosts(this.id).subscribe(res => this.userPosts = res)
    }
  
    cancel(): void {
      this.cancelCreate = !this.cancelCreate
    }
  
    create(): void {
        this.loading = true;
        this.detailsService.createPost(this.form.value, this.id).pipe(finalize(() => this.loading = false)).subscribe(() => {
          this.getUserPost()
          this.cancel()
          this.form.reset()
        }, err => {
          this.message = 'erorr message'
          setTimeout(() => this.message = '', 1000)
        })
    }

    addComment(id: number): void {
      const data = {
        id
      }
        const dialogRef = this.dialog.open( UsersPostsDialogComponent, 
          {
            width: '250px',
            data
          })
          dialogRef.afterClosed().subscribe(res => {
            if(res === 'result') {
              this.getComments(data.id)
            }
        })
  
    }
  
  
    getComments(id: number) {
      this.detailsService.getPostComments(id).subscribe(res => this.usersComments = res);
    }
  }


