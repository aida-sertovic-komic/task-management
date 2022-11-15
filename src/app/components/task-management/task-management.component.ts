import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.component.html',
  styleUrls: ['./task-management.component.scss']
})
export class TaskManagementComponent implements OnInit {
  public task!: Task;
  public taskForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl('')
    })
  }

  public createTask(): void {
    console.log(this.taskForm.value)
  }

}
