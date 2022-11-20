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
  public displayedColumns: string[] = ['color','title','priority','dueDate', 'update','details'];
  public filterTerm: string = '';
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.items$ = this.taskService.getTasksObservable();
    this.taskService.initTasks();
  }

  public searchTasks(searchTerm: string): void{
    this.taskService.searchTasks(searchTerm);
  }

  public openDetails(task: Task): void {
    console.log(task)
  }
 
}
