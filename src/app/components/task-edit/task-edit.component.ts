import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../models/task.model';
@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {
  public taskForm!: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Task) { }


  ngOnInit(): void {    
    this.taskForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl(this.data?.title, Validators.required),
      description: new FormControl(this.data?.description),
      color: new FormControl(this.data?.color),
      dueDate: new FormControl(this.data?.dueDate),
      priority: new FormControl(this.data?.priority)
    })
  }
  get title() { return this.taskForm.get('title'); }


}
