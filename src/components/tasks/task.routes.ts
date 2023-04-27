import { Application } from 'express';
import { check } from 'express-validator';
import { TaskController } from './task.controller';
import validateFields from '../../middlewares/validateFields';

const BASE_URL = '/api/v1/';

const taskController: TaskController = 
    new TaskController();

export = (app: Application) => {
    app.post(
        `${BASE_URL}tasks`,
        [
            check('title', 'Title is required').notEmpty(),
            check('title', 'Title must be a string').isString(),
            check('description', 'Description is required').notEmpty(),
            check('description', 'Description must be a string').isString(),
            check('deliveryDate', 'Delivery date is required').notEmpty(),
            check('deliveryDate', 'Delivery date must be a date').isDate(),
            check('createdBy', 'Created by is required').notEmpty(),
            check('createdBy', 'Created by must be a number').isNumeric(),
            check('comments', 'Comments must be a string').optional().isString(),
            check('tags', 'Tags must be an array').optional().isArray(),
            validateFields
        ], // Add the validation middlewares here
        taskController.store
    )
    app.get(
        `${BASE_URL}tasks/user/:id`,
        taskController.findAll
    )
    app.get(
        `${BASE_URL}tasks/:id`,
        taskController.findById
    )
    app.put(
        `${BASE_URL}tasks/:id`,
        [
            check('title', 'Title is required').optional().notEmpty(),
            check('title', 'Title must be a string').optional().isString(),
            check('description', 'Description is required').optional().notEmpty(),
            check('description', 'Description must be a string').optional().isString(),
            check('deliveryDate', 'Delivery date is required').optional().notEmpty(),
            check('deliveryDate', 'Delivery date must be a date').optional().isDate(),
            check('createdBy', 'Created by is required').optional().notEmpty(),
            check('createdBy', 'Created by must be a number').optional().isNumeric(),
            check('comments', 'Comments must be a string').optional().isString(),
            check('tags', 'Tags must be an array').optional().isArray(),
            validateFields
        ],
        taskController.update
    )
    app.delete(
        `${BASE_URL}tasks/:id`,
        taskController.delete
    )
}