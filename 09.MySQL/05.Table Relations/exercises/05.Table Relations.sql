/*****1*****/

CREATE DATABASE relations;
USE relations;

CREATE TABLE people(
	person_id INT PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(50) NOT NULL,
	salary DECIMAL(10, 2) NOT NULL,
	passport_id INT UNIQUE
);

CREATE TABLE passports(
	passport_id INT PRIMARY KEY AUTO_INCREMENT,
	passport_number VARCHAR(50) UNIQUE NOT NULL	
);

INSERT INTO people(first_name, salary, passport_id) VALUES
('Roberto', 43300.00, 102),
('Tom', 56100.00, 103),
('Yana', 60200.00, 101);

INSERT INTO passports VALUES
(101, 'N34FG21B'),
(102, 'K65LO4R7'),
(103, 'ZE657QP2');

ALTER TABLE people
ADD CONSTRAINT fk_people_passport_id_passports_passport_id
FOREIGN KEY (passport_id)
REFERENCES passports(passport_id);

/*****2*****/

CREATE TABLE manufacturers(
	manufacturer_id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
	established_on DATE
);

CREATE TABLE models(
	model_id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL,
	manufacturer_id INT NOT NULL 
);

ALTER TABLE models 
ADD CONSTRAINT fk_models_manufacturer_id_manufacturers_manufacturer_id
FOREIGN KEY (manufacturer_id)
REFERENCES manufacturers(manufacturer_id);

INSERT INTO manufacturers(name, established_on) VALUES
('BMW', '1916-03-01'),
('Tesla', '2003-01-01'),
('Lada', '1966-05-01');

INSERT INTO models VALUES
(101, 'X1', 1),
(102, 'i6', 1),
(103, 'Model S', 2),
(104, 'Model X', 2),
(105, 'Model 3', 2),
(106, 'Nova', 3);

/*****3*****/

CREATE TABLE students(
	student_id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL
);

CREATE TABLE exams(
	exam_id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50) NOT NULL 
);

CREATE TABLE students_exams(
	student_id INT NOT NULL,
	exam_id INT NOT NULL	
);

ALTER TABLE students_exams
ADD CONSTRAINT pk_students_exams PRIMARY KEY (student_id, exam_id),
ADD CONSTRAINT fk_students_exams FOREIGN KEY (student_id) REFERENCES students(student_id),
ADD CONSTRAINT fk_exams_students FOREIGN KEY (exam_id) REFERENCES exams(exam_id);

INSERT INTO students(name) VALUES
('Mila'),
('Toni'),
('Ron');

INSERT INTO exams VALUES
(101, 'Spring MVC'),
(102, 'Neo4j'),
(103, 'Oracle 11g');

INSERT INTO students_exams VALUES
(1, 101),
(1, 102),
(2, 101),
(3, 103),
(2, 102),
(2, 103);

/*****4*****/

CREATE TABLE teachers(
	teacher_id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50),
	manager_id INT
);

ALTER TABLE teachers AUTO_INCREMENT = 101;

INSERT INTO teachers(name, manager_id) VALUES
('John', NULL),
('Maya', 106),
('Silvia', 106),
('Ted', 105),
('Mark', 101),
('Greta', 101);

ALTER TABLE teachers ADD CONSTRAINT fk_manager_teacher FOREIGN KEY (manager_id) REFERENCES teachers(teacher_id);

/*****5*****/

CREATE DATABASE store;
USE store;

CREATE TABLE items(
item_id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(50),
item_type_id INT
);

CREATE TABLE item_types(
	item_type_id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50)
);

CREATE TABLE order_items(
	order_id INT NOT NULL,
	item_id INT NOT NULL	
);

CREATE TABLE orders(
	order_id INT PRIMARY KEY AUTO_INCREMENT,
	customer_id INT
);

CREATE TABLE customers(
	customer_id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50),
	birthday DATE,
	city_id INT
);

CREATE TABLE cities(
	city_id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50)
);

ALTER TABLE items
ADD CONSTRAINT fk_types_items FOREIGN KEY (item_type_id) REFERENCES item_types(item_type_id);

ALTER TABLE order_items
ADD CONSTRAINT pk_order_item PRIMARY KEY (order_id, item_id),
ADD CONSTRAINT fk_order_orders FOREIGN KEY (order_id) REFERENCES orders(order_id),
ADD CONSTRAINT fk_item_items FOREIGN KEY (item_id) REFERENCES items(item_id);

ALTER TABLE orders
ADD CONSTRAINT fk_customer_customers FOREIGN KEY (customer_id) REFERENCES customers(customer_id);

ALTER TABLE customers 
ADD CONSTRAINT fk_city_cities FOREIGN KEY (city_id) REFERENCES cities(city_id);

/*****6*****/

CREATE DATABASE uni;
USE uni;

CREATE TABLE majors(
	major_id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(50)
);

CREATE TABLE students(
	student_id INT PRIMARY KEY AUTO_INCREMENT,
	student_number VARCHAR(12),
	student_name VARCHAR(50),
	major_id INT,
	CONSTRAINT fk_major_majors FOREIGN KEY (major_id) REFERENCES majors(major_id)
);

CREATE TABLE payments(
	payment_id INT PRIMARY KEY AUTO_INCREMENT,
	payment_date DATE,
	payment_amount DECIMAL(8, 2),
	student_id INT(11),
	CONSTRAINT fk_student_students FOREIGN KEY (student_id) REFERENCES students(student_id)
);

CREATE TABLE subjects(
	subject_id INT PRIMARY KEY AUTO_INCREMENT,
	subject_name VARCHAR(50)
);

CREATE TABLE agenda(
	student_id INT(11),
	subject_id INT(11),
	CONSTRAINT pk_student_subject PRIMARY KEY (student_id, subject_id),
	CONSTRAINT fk_student2_students FOREIGN KEY (student_id) REFERENCES students(student_id),
	CONSTRAINT fk_subject2_subjects FOREIGN KEY (subject_id) REFERENCES subjects(subject_id)
);

/*****7*****/

/*****8*****/

/*****9*****/

USE geography;

SELECT m.mountain_range, p.peak_name, p.elevation AS peak_elevation FROM peaks AS p
JOIN mountains AS m ON p.mountain_id = m.id
WHERE m.mountain_range = 'Rila'
ORDER BY p.elevation DESC;












