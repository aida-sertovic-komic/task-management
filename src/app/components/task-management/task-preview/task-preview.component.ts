import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-preview',
  templateUrl: './task-preview.component.html',
  styleUrls: ['./task-preview.component.scss']
})
export class TaskPreviewComponent implements OnInit {
  @Input() items: Task[] = [];
  public displayedColumns: string[] = ['color','title', 'update','details'];
  public dataSource: Task[] = [];
  public filterTerm: string = '';
  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.items.slice();
  }

  public openDetails(task: Task): void {
    console.log(task)
  }

}
