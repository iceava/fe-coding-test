import { UsersModel } from '../../models/Users.model';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateUpdateService } from './create-update.dialog.service';
import {finalize, delay} from 'rxjs/operators'

@Component({
  selector: 'app-create-update.dialog',
  templateUrl: './create-update.dialog.component.html',
  styleUrls: ['./create-update.dialog.component.scss']
})
export class CreateUpdate implements OnInit {

  form!: FormGroup;
  
  loading = false;
  constructor(public fb: FormBuilder,
              public dialogRef: MatDialogRef<CreateUpdate>,
              public createUpdateService: CreateUpdateService,
              @Inject(MAT_DIALOG_DATA) public data: UsersModel 
    ) { }

  ngOnInit(): void {
    this.initForm()
    console.warn(this.data)
  }


  cancel(): void {
      this.dialogRef.close()
  }


  initForm(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      gender: [null, [Validators.required]],
      status: [null, [Validators.required]]
    })
      this.data !== undefined ? this.form.patchValue({
        name: this.data.name,
        email: this.data.email,
        gender: this.data.gender,
        status: this.data.status
      }) : null
  }



  onSubmit(): void {
    this.loading = true
    this.data === undefined ?
    this.createUpdateService.create(this.form.value).pipe(finalize(() => this.loading = false )).subscribe(() => this.dialogRef.close('result')) :
    this.createUpdateService.update(this.form.value, this.data.id).pipe(finalize(() => this.loading = false )).subscribe(() => this.dialogRef.close('result'))
  }

}
