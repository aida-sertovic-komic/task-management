import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-preview',
  templateUrl: './task-preview.component.html',
  styleUrls: ['./task-preview.component.scss']
})
export class TaskPreviewComponent implements OnInit {
  public displayedColumns: string[] = ['color','title', 'edit'];
  @Input() items: Task[] = [];
  public dataSource: Task[] = [];
  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.items.slice();
    console.log(this.dataSource)
  }

}
