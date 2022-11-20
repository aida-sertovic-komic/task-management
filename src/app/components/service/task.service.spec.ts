import { TestBed } from "@angular/core/testing";
import { Task } from "../models/task.model";
import { TaskService } from "./task.service";

describe('TaskService', () => {
    let service: TaskService;

    const taskList = [
        {
            "color": "#f096f3",
            "description": "",
            "dueDate": "2023-08-25T07:11:55.564Z",
            "id": "21b43787-a7e0-4c6b-bd21-6e33dcdc5af7",
            "priority": 1,
            "title": "title"
        },
        {
            "color": "#f096f3",
            "description": "",
            "dueDate": "2023-08-25T07:11:55.564Z",
            "id": "21b43787-a7e0-4c6b-bd21-6e33dcdc5af7",
            "priority": 2,
            "title": "title"
        },
        {
            "color": "#f096f3",
            "description": "",
            "dueDate": "2023-08-25T07:11:55.564Z",
            "id": "21b43787-a7e0-4c6b-bd21-6e33dcdc5af7",
            "priority": 3,
            "title": "title"
        },
        {
            "color": "#f096f3",
            "description": "",
            "dueDate": "2023-08-25T07:11:55.564Z",
            "id": "21b43787-a7e0-4c6b-bd21-6e33dcdc5af7",
            "priority": 1,
            "title": "title"
        },
        {
            "color": "#f096f3",
            "description": "",
            "dueDate": "2023-08-25T07:11:55.564Z",
            "id": "21b43787-a7e0-4c6b-bd21-6e33dcdc5af7",
            "priority": 2,
            "title": "title"
        },
        {
            "color": "#f096f3",
            "description": "",
            "dueDate": "2023-08-25T07:11:55.564Z",
            "id": "21b43787-a7e0-4c6b-bd21-6e33dcdc5af7",
            "priority": 3,
            "title": "title"
        }
    ];

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TaskService);

        localStorage.clear();
        localStorage.setItem('Tasks', JSON.stringify(taskList))
        service.initTasks();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get all tasks observable', () => {
        const tasks$ = service.getTasksObservable();

        tasks$.subscribe(tasks => {
            expect(tasks.length).toBe(6);
        });
    });

    it('should add task', () => {
        const tasks$ = service.getTasksObservable();
        const task: Task = {
            id: "21b43787-a7e0-4c6b-bd21-6e33dcdc5af7",
            title: "Test task",
            description: "Test description",
            color: "#ffffff",
            priority: 1,
            dueDate: "2023-08-25T07:11:55.564Z"
        }

        service.addTask(task);

        tasks$.subscribe(tasks => {
            expect(tasks).toContain(task);
        });
    });
});
