import { NextFunction, Request, Response } from "express";
import { TaskService } from "./task.service";

export class TaskController {
    constructor() { }

    async store(req: Request, res: Response, next: NextFunction) {
        try {
            const taskService =
                new TaskService();
            const data = await taskService.store(req.body);
            return res.status(data.statusCode).json(data);
        } catch (error) {
            next(error);
        }
    }

    async findById(req: Request, res: Response, next: NextFunction) {
        try {
            const taskService =
                new TaskService();
            const data = await taskService.findById(+req.params.id);
            return res.status(data.statusCode).json(data);
        } catch (error) {
            next(error);
        }
    }
    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const taskService =
                new TaskService();
            const data = await taskService.update(+req.params.id, req.body);
            return res.status(data.statusCode).json(data);
        } catch (error) {
            next(error);
        }
    }
    async findAll(req: Request, res: Response, next: NextFunction) {
        try {
            const taskService =
                new TaskService();
            const data = await taskService.findAll(+req.params.id);
            return res.status(data.statusCode).json(data);
        } catch (error) {
            next(error);
        }
    }
    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const taskService =
                new TaskService();
            const data = await taskService.delete(+req.params.id);
            return res.status(data.statusCode).json(data);
        } catch (error) {
            next(error);
        }
    }
}