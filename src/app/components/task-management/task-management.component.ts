import { Component, OnDestroy, OnInit, Pipe } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Task } from '../models/task.model';
import { v4 as uuidv4 } from 'uuid';
import { TaskService } from '../service/task.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.component.html',
  styleUrls: ['./task-management.component.scss'],
  providers: [TaskService]
})
export class TaskManagementComponent implements OnInit, OnDestroy {
  public task!: Task;
  public tasks: Task[] = [];
  public taskForm!: FormGroup;
  private taskChangeSub!: Subscription;
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.loadTasks();
    this.taskChangeSub = this.taskService.tasksChanged.subscribe((items: any) => {
      this.tasks = items;
    }
    )

    this.taskForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl(''),
      description: new FormControl(''),
      color: new FormControl(''),
      dueDate: new FormControl(''),
      priority: new FormControl()
    })
  }

  ngOnDestroy(): void {
    this.taskChangeSub.unsubscribe();
  }

  public initForm(): void {
    this.taskForm.get('color')?.patchValue(this.createRandomColor());
    this.taskForm.get('dueDate')?.patchValue(this.createRandomDate(new Date(2023, 6, 1), new Date(2023, 7, 31)))
    this.taskForm.get('id')?.patchValue(uuidv4());
    this.addPriority();
  }

  public createTask(): void {
    this.initForm();
    this.taskService.addTask(this.taskForm.value);
  }

  public addPriority(): void {
    const taskList = this.loadTasks();
    if (localStorage.getItem("Tasks") === null) {
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

  public loadTasks(): Task[] {
    let str: any = localStorage.getItem('Tasks'); //get tasks from local storage
    let strToObject: Task[] = JSON.parse(str); // convert string to array
    return strToObject;
  }


}
