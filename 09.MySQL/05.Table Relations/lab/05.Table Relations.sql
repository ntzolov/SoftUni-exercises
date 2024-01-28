USE camp;

/*****1*****/

CREATE TABLE mountains(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(255)
);

CREATE TABLE peaks(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(255),
mountain_id INT,
CONSTRAINT fk_peaks_mountain_id_mountains_id
FOREIGN KEY (mountain_id)
REFERENCES mountains(id)
);

/*****2*****/

SELECT driver_id, vehicle_type, concat_ws(' ', first_name, last_name) AS driver_name FROM vehicles
JOIN campers ON vehicles.driver_id = campers.id;

/*****3*****/

SELECT 
starting_point AS route_starting_point,
end_point AS route_ending_route,
leader_id,
concat_ws(' ', first_name, last_name) AS leader_name
FROM routes
JOIN campers ON routes.leader_id = campers.id;

/*****4*****/

CREATE TABLE mountains(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(255)
);

CREATE TABLE peaks(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(255),
mountain_id INT,
CONSTRAINT fk_peaks_mountain_id_mountains_id
FOREIGN KEY (mountain_id)
REFERENCES mountains(id)
ON DELETE CASCADE	
);

/*****5*****/

CREATE DATABASE blue_sky;
USE blue_sky;

CREATE TABLE employees(
	id INT(11) PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(30),
	last_name VARCHAR(30),
	project_id INT(11)
);

CREATE TABLE projects(
	id INT(11) PRIMARY KEY AUTO_INCREMENT,
	client_id INT(11),
	project_lead_id INT(11)
);

CREATE TABLE clients(
		id INT(11) PRIMARY KEY AUTO_INCREMENT,
		client_name VARCHAR(100)
);

ALTER TABLE projects
ADD CONSTRAINT fk_projects_client_id_clients_id
FOREIGN KEY (client_id)
REFERENCES clients(id);

ALTER TABLE projects
ADD CONSTRAINT fk_projects_project_lead_id_employees_id
FOREIGN KEY (project_lead_id)
REFERENCES employees(id);

ALTER TABLE employees
ADD CONSTRAINT fk_employees_project_id_projects_id
FOREIGN KEY (project_id)
REFERENCES projects(id);















