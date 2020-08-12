-- SCHEMA
-- create/restart burgers_db
DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    burger_name TEXT NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT FALSE
);