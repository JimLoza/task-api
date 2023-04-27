import { ResponseService, ResponseServiceI } from "../../helpers/responses";
import { ITask } from "./interfaces/task.interface";
import { TaskRepository } from "./task.repository";
export class TaskService {
    constructor(
        private readonly _taskRepository: TaskRepository = new TaskRepository()
    ){}

    async store(task: ITask): Promise<ResponseServiceI> {
        await this._taskRepository.store(task);
        return ResponseService(true, 'Task created successfully', task, 200)
    }

    async findById(id: number): Promise<ResponseServiceI> {
        const data = await this._taskRepository.findById(id);
        return ResponseService(true, 'Task found successfully', data, 200)
    }

    async update(id: number, task: ITask): Promise<ResponseServiceI> {
        await this._taskRepository.update(id, task);
        return ResponseService(true, 'Task updated successfully', task, 200)
    }

    async findAll(createdBy: number): Promise<ResponseServiceI> {
        const data = await this._taskRepository.findAll(createdBy);
        return ResponseService(true, 'Tasks found successfully', data, 200)
    }

    async delete(id: number): Promise<ResponseServiceI> {
        const exist: any = await this._taskRepository.findById(id);
        if (exist.length === 0) {
            return ResponseService(false, 'Task not found', null, 404)
        }
        await this._taskRepository.delete(id);
        return ResponseService(true, 'Task deleted successfully', null, 200)
    }
}