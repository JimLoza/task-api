import { pool } from '../../configs/database/connection.config';
import { ITask } from './interfaces/task.interface';

export class TaskRepository {
    constructor(
        private readonly _pool = pool
    ) { }

    async store(task: ITask) {
        const insertQuery = `
            INSERT INTO task (title, description, deliveryDate, createdBy, comments, tags)
            VALUES (?, ?, ?, ?, ?, ?)
        `
        task.comments = task.comments ?? null;
        task.tags = task.tags ?? null;
        const data = await this._pool.execute(insertQuery, [task.title, task.description, task.deliveryDate, task.createdBy, task.comments, task.tags]);
        return data
    }
    async findById(id: number) {
        const [rows] = await this._pool.query(`SELECT * FROM task WHERE id = ?`, [id]);
        return rows
    }

    async update(id: number, task: ITask) {
        let taskExist: any = await this.findById(id);
        if (taskExist.length === 0) {
            throw new Error('Task not found');
        }
        const updateQuery = `
            UPDATE task
            SET title = ?, description = ?, deliveryDate = ?, createdBy = ?, comments = ?, tags = ?
            WHERE id = ?
        `
        delete taskExist[0].id;
        taskExist = { ...taskExist[0], ...task };
        return await this._pool.execute(updateQuery, [taskExist.title, taskExist.description, taskExist.deliveryDate, taskExist.createdBy, taskExist.comments, taskExist.tags, id]);
    }

    async findAll(id: number) {
        const data = await this._pool.query(`SELECT * FROM task WHERE createdBy = ?`, [id]);
        return data[0]
    }

    async delete(id: number) {
        const data = await this._pool.query(`DELETE FROM task WHERE id = ?`, [id]);
        return data[0]
    }
}

