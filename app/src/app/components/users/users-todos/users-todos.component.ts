import { UserTodosModel } from './../../../models/UserTodos.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersTodosService } from './users-todos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize, takeUntil } from 'rxjs/operators'
import { Subject } from 'rxjs';

@Component({
  selector: 'app-users-todos',
  templateUrl: './users-todos.component.html',
  styleUrls: ['./users-todos.component.scss']
})
export class UsersTodosComponent implements OnInit, OnDestroy {
  userTodo!: Array<UserTodosModel>;
  form!: FormGroup;
  subject$ = new Subject()
  todo = false;

  loading = false;

  constructor(  public userTodosService: UsersTodosService,
                protected fb: FormBuilder
    ) { }
  ngOnDestroy(): void {
    this.subject$.next(true)
    this.subject$.complete()
  }

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
      this.userTodosService.getUserTodos().pipe(takeUntil(this.subject$)).subscribe(res => this.userTodo = res)
  }

  add(): void {
    this.todo = !this.todo
  }


  addTodo(): void {
    console.warn(this.form.value)
    this.loading = true
    this.userTodosService.createUserTodos(this.form.value).pipe(finalize(() => this.loading = false), takeUntil(this.subject$)).subscribe(() => {
      this.getUserTodos()
      this.form.reset()
      this.todo = false;
    } )
}


}
