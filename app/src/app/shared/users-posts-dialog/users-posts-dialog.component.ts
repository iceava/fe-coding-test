import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommentModel } from 'src/app/models/Comment.model';
import { CreateUpdateService } from '../create-update.dialog/create-update.dialog.service';
import { finalize } from 'rxjs/operators'
import { UsersPostsDialogService } from '../users-posts-dialog.service';

@Component({
  selector: 'app-users-posts-dialog',
  templateUrl: './users-posts-dialog.component.html',
  styleUrls: ['./users-posts-dialog.component.scss']
})
export class UsersPostsDialogComponent implements OnInit {

  form!: FormGroup;
  loading = false;

  constructor(public fb: FormBuilder,
    public dialogRef: MatDialogRef<UsersPostsDialogComponent>,
    public createCommetService: UsersPostsDialogService,
    @Inject(MAT_DIALOG_DATA) public  data: {
      id: number
    } 
) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      body: [null, [Validators.required, Validators.maxLength(80)]],
    })
  }

  cancel(): void {
    this.dialogRef.close()
}


  onSubmit(): void {
    this.loading = true
    this.createCommetService.create(this.form.value, this.data.id).pipe(finalize(() => this.loading = false )).subscribe(() => this.dialogRef.close('result'));
  }

}
