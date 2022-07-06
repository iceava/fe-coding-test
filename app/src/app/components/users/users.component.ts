import { UsersModel } from '../../models/Users.model';
import { UsersService } from './users.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CreateUpdate } from 'src/app/shared/create-update.dialog/create-update.dialog.component';
import { HttpResponse } from '@angular/common/http';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  loading = false;
  displayedColumns: string[] = ['id','name', 'email', 'gender', 'status', 'actions'];
  public pageSize = 20;
  public totalSize = 0;
  pageEvent = {
    pageIndex: 0
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource!: Array<UsersModel> 
 

  constructor(private usersService: UsersService,
              private dialog: MatDialog,
              private route: Router,
              private router: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.handlePage(this.pageEvent)
  }

  getUsers(): void {
    this.loading = true;
    this.usersService.getUsers().pipe(finalize(() => this.loading = false))
    .subscribe((res: HttpResponse<UsersModel[]>) =>{ 
      this.dataSource = res.body!
      this.totalSize = Number(res.headers.get('x-pagination-total'))
    })
  }


  public handlePage(event: any) {
    this.pageEvent.pageIndex = event.pageIndex;
    this.route.navigate(['/users'],{
      queryParams: {
        page: this.pageEvent.pageIndex + 1
      }
    })
    setTimeout(() => this.getUsers())
  }
  

  createUser(data?: UsersModel): void {
      const dialogRef = this.dialog.open(CreateUpdate, 
        {
          width: '250px',
          data
        })
        dialogRef.afterClosed().subscribe(res => {
          if(res === 'result') {
            this.handlePage(this.pageEvent)
          }
      })

  }


  delete(id: number): void {
    this.loading = true
    this.usersService.delete(id).pipe(finalize(() => this.loading = false))
    .subscribe(() => this.handlePage(this.pageEvent))
  }


  userDetails(id: number):void {
    this.route.navigate(['/users/details'], { 
      queryParams: {
      id
    }})
  }

}
