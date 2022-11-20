import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent implements OnInit {
    public task!: Task;
    public tasks$!: Observable<Task[]>;
    public taskForm!: FormGroup;
    constructor(private taskService: TaskService) { }
  
    ngOnInit(): void {
      this.taskForm = new FormGroup({
        id: new FormControl(''),
        title: new FormControl('', Validators.required),
        description: new FormControl(''),
        color: new FormControl(''),
        dueDate: new FormControl(''),
        priority: new FormControl()
      })
    }
  
    public initForm(): void {
      this.taskForm.get('color')?.patchValue(this.createRandomColor());
      this.taskForm.get('dueDate')?.patchValue(this.createRandomDate(new Date(2023, 6, 1), new Date(2023, 7, 31)))
      this.taskForm.get('id')?.patchValue(uuidv4());
      this.addPriority();
    }
  
    public createTask(): void {
     if (this.taskForm.valid){
      this.initForm();
     this.taskService.addTask(this.taskForm.value);
     }
    }
  
    public addPriority(): void {
      const taskList = this.taskService.getTasks();
      if (!taskList.length) {
        this.taskForm.get('priority')?.patchValue(1)
      }
      else {
        let lastItem = taskList[taskList?.length - 1]; // find last added item in array
        (lastItem.priority == 1 || lastItem.priority == 2) ? this.taskForm.get('priority')?.patchValue(+lastItem.priority + 1) : this.taskForm.get('priority')?.patchValue(1)
      }
    }
  
    public createRandomDate(start: Date, end: Date): Date {
      const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      return date;
    }
  
    public createRandomColor(): string {
      const maxColorValue = 0xFFFFFF;
      let randomNumber = Math.random() * maxColorValue; //create random number
      randomNumber = Math.floor(randomNumber); //convert float number to an integer
      const randomHexColor = '#' + randomNumber.toString(16); //convert integer to hexadecimal string
      return randomHexColor;
    }  

    get title() { return this.taskForm.get('title'); }
  }


