import { Subject } from "rxjs";

export class TaskService {
    tasksChanged = new Subject<Task[]>();
    tasks: Task[] = [];

    addTask(task: Task): void {
        this.tasks.push(task);
        this.tasksChanged.next(this.tasks);
        localStorage.setItem('Tasks', JSON.stringify(this.tasks)) 

    }
}