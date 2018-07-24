DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE exampledb;

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;


-- Drops the _db if it exists currently --


DROP DATABASE IF EXISTS events_db;
-- Creates the "_db" database --
CREATE DATABASE events_db;

USE events_db;
--If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Events;