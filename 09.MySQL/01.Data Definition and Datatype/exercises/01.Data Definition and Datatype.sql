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

/*****6*****/

CREATE TABLE people(
id INT NOT NULL UNIQUE AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(200) NOT NULL,
picture BLOB,
height DOUBLE(6,2),
weight DOUBLE(6,2),
gender CHAR(1) NOT NULL,
birthdate DATE NOT NULL,
biography BLOB
);

INSERT INTO people (name, gender, birthdate) VALUES 
('Nikolay', 'm', '1988-08-07'),
('Ivan', 'm', '1988-08-07'),
('Gosho', 'm', '1988-08-07'),
('Maria', 'f', '1988-08-07'),
('Lidia', 'f', '1988-08-07');

/*****7*****/

CREATE TABLE users(
id INT NOT NULL UNIQUE AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(30) NOT NULL,
password VARCHAR(26) NOT NULL,
profile_picture BLOB,
last_login_time DATETIME,
is_deleted BOOL
);

INSERT INTO users (username, password) VALUES 
('Nikolay', 'test'),
('Ivan', 'test'),
('Gosho', 'test'),
('Maria', 'test'),
('Lidia', 'test');

/*****8*****/

ALTER TABLE users
DROP PRIMARY KEY,
ADD PRIMARY KEY(id,username);


/*****9*****/

ALTER TABLE users
CHANGE last_login_time last_login_time DATETIME DEFAULT NOW();

/*****10*****/

ALTER TABLE users
DROP PRIMARY KEY,
ADD PRIMARY KEY(id),
CHANGE username username VARCHAR(30) NOT NULL UNIQUE;

/*****11*****/

CREATE DATABASE movies;
USE movies;

CREATE TABLE directors(
id INT PRIMARY KEY AUTO_INCREMENT,
director_name VARCHAR(255) NOT NULL,
notes VARCHAR(255)
);

INSERT INTO directors(director_name) VALUES
('Quentin Tarantino'),
('Quentin Tarantino'),
('Quentin Tarantino'),
('Quentin Tarantino'),
('Quentin Tarantino');

CREATE TABLE genres(
id INT PRIMARY KEY AUTO_INCREMENT,
genre_name VARCHAR(255) NOT NULL,
notes VARCHAR(255)
);

INSERT INTO genres(genre_name) VALUES
('Action'),
('Action'),
('Action'),
('Action'),
('Action');

CREATE TABLE categories(
id INT PRIMARY KEY AUTO_INCREMENT,
category_name VARCHAR(255) NOT NULL,
notes VARCHAR(255)
);

INSERT INTO categories(category_name) VALUES
('Movie'),
('Movie'),
('Movie'),
('Movie'),
('Movie');

CREATE TABLE movies(
id INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(255) NOT NULL,
director_id INT,
copyright_year INT,
length TIME,
genre_id INT,
category_id INT,
rating INT,
notes VARCHAR(255)
);

INSERT INTO movies(title) VALUES
('Pulp Fiction'),
('Pulp Fiction'),
('Pulp Fiction'),
('Pulp Fiction'),
('Pulp Fiction');

/*****12*****/

CREATE DATABASE car_rental;
USE car_rental;

CREATE TABLE categories(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
category VARCHAR(255) NOT NULL,
daily_rate DOUBLE(6,2) NOT NULL,
weekly_rate DOUBLE(6,2) NOT NULL,
monthly_rate DOUBLE(6,2) NOT NULL,
weekend_rate DOUBLE(6,2) NOT NULL
);

INSERT INTO categories(category, daily_rate, weekly_rate, monthly_rate, weekend_rate) VALUES
('SUV', 100, 500, 1500, 150),
('SPORT', 100, 500, 1500, 150),
('BUS', 100, 500, 1500, 150);

CREATE TABLE cars(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
plate_number INT NOT NULL,
make VARCHAR(50) NOT NULL,
model VARCHAR(50) NOT NULL,
car_year INT,
category_id INT,
doors INT,
picture BLOB,
car_condition VARCHAR(50),
available BOOL NOT null
);

INSERT INTO cars(plate_number, make, model, available) VALUES
(5577, 'Citroen', 'Xantia', true),
(7755, 'BMW', '320', true),
(3333, 'Opel', 'Astra', true);

CREATE TABLE employees(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
title VARCHAR(255),
notes VARCHAR(255)
);

INSERT INTO employees(first_name, last_name) VALUES 
('Nikolay', 'Tzolov'),
('Nikolay', 'Kolev'),
('Nikolay', 'Bankin');

CREATE TABLE customers(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
driver_licence_number VARCHAR(50) NOT NULL UNIQUE,
full_name VARCHAR(255) NOT NULL,
address VARCHAR(255) NOT NULL,
city VARCHAR(50),
zip_code INT,
notes VARCHAR(255)
);

INSERT INTO customers(driver_licence_number, full_name, address) VALUES
('abv123', 'Nikolay Tzolov', 'Sofia'),
('123abv', 'Nikolay Tzolov', 'Sofia'),
('aaaah', 'Nikolay Tzolov', 'Sofia');

CREATE TABLE rental_orders(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
employee_id INT NOT NULL,
customer_id INT NOT NULL,
car_id INT NOT NULL,
car_condition VARCHAR(50),
tank_level INT,
kilometrage_start INT,
kilometrage_end INT,
total_kilometrage INT,
start_date DATE,
end_date DATE,
total_days INT,
rate_applied INT,
tax_rate DOUBLE(6,2),
order_status BOOL,
notes VARCHAR(255)
);

INSERT INTO rental_orders(employee_id, customer_id, car_id) VALUES
(1, 2, 3),
(4, 5, 6),
(7, 8, 9);

/*****13*****/

CREATE DATABASE soft_uni;
USE soft_uni;

CREATE TABLE towns(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(255) NOT NULL 
);

CREATE TABLE addresses(
id INT PRIMARY KEY AUTO_INCREMENT,
address_text VARCHAR(255) NOT NULL,
town_id INT,
FOREIGN KEY (town_id)
REFERENCES towns(id)
);

CREATE TABLE departments(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(255) NOT NULL 
);

CREATE TABLE employees(
id INT PRIMARY KEY AUTO_INCREMENT,
first_name VARCHAR(255) NOT NULL,
middle_name VARCHAR(255) NOT NULL,
last_name VARCHAR(255) NOT NULL,
job_title VARCHAR(255) NOT NULL,
department_id INT,
FOREIGN KEY (department_id) REFERENCES departments(id),
hire_date DATE,
salary DOUBLE,
address_id INT,
FOREIGN KEY (address_id) REFERENCES addresses(id)
);

INSERT INTO towns(name) VALUES 
('Sofia'),
('Plovdiv'),
('Varna'),
('Burgas');

INSERT INTO departments(name) VALUES
('Engineering'),
('Sales'),
('Marketing'),
('Software Development'),
('Quality Assurance');

INSERT INTO employees(first_name, middle_name, last_name, job_title, department_id, hire_date, salary) VALUES
('Ivan', 'Ivanov', 'Ivanov', '.NET Developer', 4, '2013/02/01', 3500.00),
('Petar', 'Petrov', 'Petrov', 'Senior Engineer', 1, '2004/03/02', 4000.00),
('Maria', 'Petrova', 'Ivanova', 'Intern', 5, '2016/08/28', 525.25),
('Georgi', 'Terziev', 'Ivanov', 'CEO', 2, '2007/12/09', 3000.00),
('Peter', 'Pan', 'Pan', 'Intern', 3, '2016/08/28', 599.88);

/*****14*****/

SELECT * FROM towns;
SELECT * FROM departments;
SELECT * FROM employees;

/*****15*****/

SELECT * FROM towns
ORDER BY name ASC; 
SELECT * FROM departments
ORDER BY name ASC; 
SELECT * FROM employees
ORDER BY salary DESC;

/*****16*****/

SELECT name FROM towns
ORDER BY name ASC;
SELECT name FROM departments
ORDER BY name ASC; 
SELECT first_name, last_name, job_title, salary FROM employees
ORDER BY salary DESC;

/*****17*****/

UPDATE employees SET salary = salary * 1.1;

SELECT salary FROM employees;
















