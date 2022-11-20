import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { Task } from '../models/task.model';
import { TaskService } from '../service/task.service';
import { TaskDetailsComponent } from '../task-details/task-details.component';
import { TaskEditComponent } from '../task-edit/task-edit.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnDestroy {
  public items$!: Observable<Task[]>;
  public items = new MatTableDataSource<Task>();
  public itemSub!: Subscription;
  public filterTerm: string = '';
  public displayedColumns: string[] = ['color', 'title', 'priority', 'dueDate', 'update', 'details'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private taskService: TaskService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.items$ = this.taskService.getTasksObservable();
    this.taskService.initTasks();

    this.itemSub = this.items$.subscribe(item => {
      this.items.data = item
    })
  }

  ngOnDestroy(): void {
    this.itemSub.unsubscribe();
  }

  ngAfterViewInit() {
    this.items.paginator = this.paginator;
  }

  public searchTasks(searchTerm: string): void {
    this.taskService.searchTasks(searchTerm);
  }

  public openDetailsDialog(task: Task): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = task;

    this.dialog.open(TaskDetailsComponent, dialogConfig)
  }

  public openEditDialog(task: Task): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = task;

    this.dialog.open(TaskEditComponent, dialogConfig)
  }
}