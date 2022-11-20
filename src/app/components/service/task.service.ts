import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { Task } from "../models/task.model";

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private tasks$ = new BehaviorSubject<Task[]>([]);
    private tasks: Task[] = this.parseTasks();
    private selectedTask$ = new Subject<Task>;

    public selectTask(task: Task): void {
        this.selectedTask$.next(task);
    }

    public getSelectedTaskObservable(): Observable<Task> {
        return this.selectedTask$;
    }

    public parseTasks(): Task[] {
        const taskString: string = localStorage.getItem('Tasks') ?? '[]';
        const taskArray: Task[] = JSON.parse(taskString);
        return taskArray;
    }

    public initTasks(): void {
        const tasks = this.parseTasks();
        this.tasks$.next(this.sortTasks(tasks));
    }

    public getTasksObservable(): Observable<Task[]> {
        return this.tasks$;
    }

    public addTask(task: Task): void {
        this.tasks.push(task);
        localStorage.setItem('Tasks', JSON.stringify(this.tasks))
        this.tasks$.next(this.sortTasks(this.tasks));
    }

    public editTask(task: Task): void {
        this.tasks = this.tasks.map(item => {
            return item.id === task.id ? { ...task } : item;
        })

        localStorage.setItem('Tasks', JSON.stringify(this.tasks))
        this.tasks$.next(this.sortTasks(this.tasks));

    }

    public searchTasks(searchTerm: string): void {
        const filteredTasks = this.tasks.filter(task => {
            return task.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
        })

        this.tasks$.next(filteredTasks)
    }

    public sortTasks(tasks: Task[]): Task[] {
        const sortedTasks = [...tasks].sort((a, b) => {
            return (a.priority - b.priority) || (new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
        })
        
        return sortedTasks;
    }
}