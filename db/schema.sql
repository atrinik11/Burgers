-- Drop database if it exists --
DROP DATABASE IF EXISTS burgers_db;

-- Creating a database name burgers_db --
CREATE DATABASE burgers_db;

USE burgers_db;

-- Creating table burgers --
CREATE TABLE burgers(
    id INTEGER(10) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN ,
    PRIMARY KEY(id)
);