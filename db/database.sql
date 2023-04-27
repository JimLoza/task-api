CREATE DATABASE IF NOT EXISTS tasksdb;
USE tasksdb;

CREATE TABLE task (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(45) NOT NULL,
    description VARCHAR(255) NOT NULL,
    status enum ('pending', 'inProgress' ,'completed') NOT NULL DEFAULT 'pending',
    deliveryDate timestamp NOT NULL,
    comments VARCHAR(255) NULL,
    createdBY int(11) NOT NULL,
    tags json NULL
);