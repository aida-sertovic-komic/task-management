import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../models/task.model';
import { TaskService } from '../service/task.service';
@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {
  public taskForm!: FormGroup;
  public minDate!: Date;
  public maxDate!: Date;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: Task, private taskService: TaskService,
  public dialogRef: MatDialogRef<TaskEditComponent>) { }


  ngOnInit(): void {

    const nextYear = new Date().getFullYear() + 1;
    this.minDate = new Date(nextYear, 6, 1);
    this.maxDate = new Date(nextYear, 7, 31);
    this.taskForm = new FormGroup({
      id: new FormControl(this.data?.id),
      title: new FormControl(this.data?.title, Validators.required),
      description: new FormControl(this.data?.description),
      color: new FormControl(this.data?.color, Validators.required),
      dueDate: new FormControl(this.data?.dueDate, Validators.required),
      priority: new FormControl(this.data?.priority, [Validators.required, Validators.max(3), Validators.min(1)])
    })
  }
  get title() { return this.taskForm.get('title'); }
  get priority() { return this.taskForm.get('priority'); }
  get dueDate() { return this.taskForm.get('dueDate'); }
  get color() { return this.taskForm.get('color'); }

  public updateTask(): void {
    if (this.taskForm.valid) {
      this.taskService.editTask(this.taskForm.value);
      this.dialogRef.close();
    }
  }

}
