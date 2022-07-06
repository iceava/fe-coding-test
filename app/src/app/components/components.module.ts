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
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersPostsComponent } from './users/users-posts/users-posts.component';
import { UsersTodosComponent } from './users/users-todos/users-todos.component';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import {MatSelectModule} from '@angular/material/select'; 







@NgModule({
  declarations: [UsersComponent, UserDetailsComponent, UsersPostsComponent, UsersTodosComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDialogModule,
    FlexLayoutModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    RouterModule,
    MatTabsModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule
    
  ],

  providers:[
   
  ],

  exports: [
    UsersComponent, UserDetailsComponent
  ]
})
export class ComponentsModule { }
