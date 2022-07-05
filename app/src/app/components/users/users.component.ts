import { UsersModel } from '../models/Users.model';
import { UsersService } from './users.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CreateUpdate } from 'src/app/shared/create-update.dialog/create-update.dialog.component';
import { HttpResponse } from '@angular/common/http';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

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
              private route: Router
    ) { }

  ngOnInit(): void {
    this.handlePage(this.pageEvent)
  }

  getUsers(): void {
    this.usersService.getUsers().subscribe((res: HttpResponse<UsersModel[]>) =>{ 
      this.dataSource = res.body!
      this.totalSize = Number(res.headers.get('x-pagination-total'))
      console.log()

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
  

  createUser(): void {
      const dialogRef = this.dialog.open(CreateUpdate, 
        {
          width: '250px'
        })
  }

}
