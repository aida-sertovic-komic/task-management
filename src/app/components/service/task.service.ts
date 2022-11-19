import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Task } from "../models/task.model";

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private tasks$ = new BehaviorSubject<Task[]>([]);
    private tasks: Task[] = this.parseTasks();

    public parseTasks(): Task[] {
        const taskString: string = localStorage.getItem('Tasks') ?? '[]';
        const taskArray: Task[] = JSON.parse(taskString);
        return taskArray;
    }
    public initTasks(): void {
        const tasks = this.parseTasks();
        this.tasks$.next(tasks);
    }

    public getTasksObservable(): Observable<Task[]> {
        return this.tasks$.pipe();
    }

    public getTasks(): Task[] {
        return this.tasks;
    }

    public addTask(task: Task): void {
        this.tasks.push(task);
        this.tasks$.next(this.tasks);
        localStorage.setItem('Tasks', JSON.stringify(this.tasks))
    }
}