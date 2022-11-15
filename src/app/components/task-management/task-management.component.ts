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
  public tasks: Task[] = [];
  public taskForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      color: new FormControl('')
    })
  }

  public createTask(): void {
    this.taskForm.get('color')?.patchValue(this.createRandomColor());
    this.tasks.push(this.taskForm.value);
    localStorage.setItem('Tasks', JSON.stringify(this.tasks)) //store in localStorage
    // localStorage.clear();

  }

  public createRandomColor(): string {
    const maxColorValue = 0xFFFFFF;
    let randomNumber = Math.random() * maxColorValue; //create random number
    randomNumber = Math.floor(randomNumber); //convert float number to an integer
    const randomHexColor = '#' + randomNumber.toString(16); //convert integer to hexadecimal string
    return randomHexColor;
  }

}
