import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  public items$!: Observable<Task[]>;
  public displayedColumns: string[] = ['color','title', 'update','details'];
  public filterTerm: string = '';
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.items$ = this.taskService.getTasksObservable();
    this.taskService.initTasks();
    this.items$.subscribe(el => console.log(el, 'task.list'))

  }

  public openDetails(task: Task): void {
    console.log(task)
  }
}
