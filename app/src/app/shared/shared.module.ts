import { AppRoutingModule } from './../app-routing.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { CreateUpdate } from './create-update.dialog/create-update.dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersPostsDialogComponent } from './users-posts-dialog/users-posts-dialog.component';






@NgModule({
  declarations: [HeaderComponent, FooterComponent, CreateUpdate, UsersPostsDialogComponent],
  imports: [
    CommonModule,
    MatIconModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  exports: [
    HeaderComponent, FooterComponent, MatInputModule
  ]
})
export class SharedModule { }
