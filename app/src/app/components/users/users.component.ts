import { UsersModel } from '../models/Users.model';
import { UsersService } from './users.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CreateUpdate } from 'src/app/shared/create-update.dialog/create-update.dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['id','name', 'email', 'gender', 'status', 'actions'];
  dataSource!: Array<UsersModel> 

  constructor(private usersService: UsersService,
              private dialog: MatDialog
    ) { }

  ngOnInit(): void {
   this.getUsers()
  }

  getUsers(): void {
    this.usersService.getUsers().subscribe(res => this.dataSource = res)
  }

  createUser(): void {
      const dialogRef = this.dialog.open(CreateUpdate, 
        {
          width: '250px'
        })
  }

}
