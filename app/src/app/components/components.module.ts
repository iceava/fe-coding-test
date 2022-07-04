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




@NgModule({
  declarations: [UsersComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
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
