USE gamebar;

CREATE TABLE employees(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL
);

CREATE TABLE categories(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL
);

CREATE TABLE products(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
category_id INT NOT NULL
);

INSERT INTO employees (first_name, last_name)
VALUES 
('Nikolay', 'Tzolov'),
('Atanas', 'Tzolov'),
('Valia', 'Tzolova');

ALTER TABLE employees
ADD COLUMN middle_name VARCHAR(50) NOT NULL;

ALTER TABLE employees
MODIFY COLUMN middle_name VARCHAR(50) NOT NULL;

ALTER TABLE 