export enum TaskPriority {
    FIRST = '1',
    SECOND = '2',
    THIRD = '3'
}

export interface Task {
    id?: number;
    dueDate?: string;
    title: string;
    description: string;
    priority: TaskPriority;
    color: string;
}

