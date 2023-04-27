export interface ITask {
    title: string;
    description: string;
    status: TaskStatus;
    deliveryDate: Date;
    createdBy: number;
    comments?: string | null;
    tags?: string[] | null;
}

export enum TaskStatus {
    PENDING = 'pending',
    IN_PROGRESS = 'inProgress',
    COMPLETED = 'completed'
}