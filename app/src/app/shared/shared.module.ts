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






@NgModule({
  declarations: [HeaderComponent, FooterComponent, CreateUpdate],
  imports: [
    CommonModule,
    MatIconModule,
    HttpClientModule,
    RouterModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule
  ],
  exports: [
    HeaderComponent, FooterComponent
  ]
})
export class SharedModule { }
