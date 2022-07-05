import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from './../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserDetailsComponent } from './../components/users/user-details/user-details.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';  
import { MatPaginatorModule } from '@angular/material/paginator';




@NgModule({
  declarations: [UsersComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDialogModule,
    FlexLayoutModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule
  ],

  providers:[
   
  ],

  exports: [
    UsersComponent, UserDetailsComponent
  ]
})
export class ComponentsModule { }
