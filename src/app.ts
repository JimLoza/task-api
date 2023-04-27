import express, { Application } from 'express';
import cors from 'cors'

import { pool } from './configs/database/connection.config';
import config from './configs/envs';

const PORT = config.PORT || 3000;

const app: Application = express();

app.use(cors())
app.use(express.json());

require('./components/tasks/task.routes')(app);

app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    pool.getConnection().then((conn) => {
        console.log('Database connected');
        conn.release();
    })
})

export default app;

