import { UserTodosModel } from './../../../models/UserTodos.model';
import { Component, OnInit } from '@angular/core';
import { UsersTodosService } from '../users-todos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators'

@Component({
  selector: 'app-users-todos',
  templateUrl: './users-todos.component.html',
  styleUrls: ['./users-todos.component.scss']
})
export class UsersTodosComponent implements OnInit {
  userTodo!: Array<UserTodosModel>;
  form!: FormGroup;
  todo = false;

  loading = false;

  constructor(  public userTodosService: UsersTodosService,
                protected fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.getUserTodos()
    this.initForm()
  }

  initForm(): void {
    this.form = this.fb.group({
      title: [null, [Validators.required]],
      due_on: [null, []],
      status : [null, [Validators.required]]
    })
  }
  
  getUserTodos(): void {
      this.userTodosService.getUserTodos().subscribe(res => this.userTodo = res)
  }

  add(): void {
    this.todo = !this.todo
  }


  addTodo(): void {
    console.warn(this.form.value)
    this.loading = true
    this.userTodosService.createUserTodos(this.form.value).pipe(finalize(() => this.loading = false)).subscribe(() => {
      this.getUserTodos()
      this.form.reset()
      this.todo = false;
    } )
}


}
