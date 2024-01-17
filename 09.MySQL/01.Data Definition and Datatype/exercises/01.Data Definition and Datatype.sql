/*****0*****/

CREATE DATABASE minions;

/*****1*****/

CREATE TABLE minions(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50),
age INT
);

CREATE TABLE towns(
town_id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50)
);

/*****2*****/

ALTER TABLE minions
ADD COLUMN town_id INT;

ALTER TABLE minions
ADD CONSTRAINT fk_minions_town
FOREIGN KEY minions(town_id)
REFERENCES towns(id);

/*****3*****/

INSERT INTO towns (id, name)
VALUES (1, 'Sofia'),
 (2, 'Plovdiv'),
 (3, 'Varna');

INSERT INTO minions (id, `name`, age, town_id)
VALUES(1, 'Kevin', 22, 1),
(2, 'Bob', 15, 3),
(3, 'Steward', NULL, 2);


/*****4*****/

DELETE FROM minions;

/*****5*****/

DROP TABLE minions;
DROP TABLE towns;
