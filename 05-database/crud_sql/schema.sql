CREATE DATABASE library;

CREATE TABLE authors (
id SERIAL PRIMARY KEY,
name VARCHAR(255),
nationality VARCHAR(255),
birth_year INTEGER
);

-- SELECT * FROM authors
-- in terminal select * from authors where id = 2;

-- no double quote, only single quote, extra ' to escape the single quote, 'J.K. Rowling''s books
-- control C to restrat DOM
INSERT INTO authors (name, nationality, birth_year)
VALUES ('J.K. Rowling', 'United Kindom', 1965);

INSERT INTO authors (name, nationality, birth_year)
VALUES ('Milan Kundera', 'Czechoslovakia', 1929);

-- delete the whole records, the id the best choice to delete(birth_year = 1965 or name = "")
DELETE FROM authors WHERE id = 3;

UPDATE authors SET birth_year = 1930 WHERE id = 2;

