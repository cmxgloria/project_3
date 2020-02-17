-- comment out. this not special file, just text file
-- sql
create database school;
-- c stand for connect, anything start with \ is a psql command

\c school

-- describe tables
\dt

-- create a table using sql
-- variable character
-- after name using data type, built in function using capitable, if you make up lowercase; datatype is after variable and need to capital

CREATE TABLE students (
name VARCHAR,
score INTEGER
-- INTEGER4 or8,or 16, name VARCHAR(100)
);

-- show me all the recordds in the students table
SELECT name, score FROM students;

-- add a record using SQL
INSERT INTO students (name, score) VALUES ('gloria', 5);