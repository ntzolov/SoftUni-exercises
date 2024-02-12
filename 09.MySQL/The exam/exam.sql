-- CREATE DATABASE preserves_db;
USE preserves_db;
-- 
-- CREATE TABLE continents(
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	name VARCHAR(40) NOT NULL UNIQUE
-- );
-- 
-- CREATE TABLE countries(
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	name VARCHAR(40) NOT NULL UNIQUE,
-- 	country_code VARCHAR(10) NOT NULL UNIQUE,
-- 	continent_id INT NOT NULL,
-- 	
-- 	FOREIGN KEY (continent_id) REFERENCES continents(id)
-- );
-- 
-- CREATE TABLE preserves(
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	name VARCHAR(255) NOT NULL UNIQUE,
-- 	latitude DECIMAL(9, 6),
-- 	longitude DECIMAL(9, 6),
-- 	area INT,
-- 	type VARCHAR(20),
-- 	established_on DATE
-- );
-- 
-- CREATE TABLE countries_preserves(
-- 		country_id INT NOT NULL,
-- 		preserve_id INT NOT NULL,
-- 		
-- 		FOREIGN KEY (country_id) REFERENCES countries(id),
-- 		FOREIGN KEY (preserve_id) REFERENCES preserves(id)
-- );
-- 
-- CREATE TABLE positions(
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	name VARCHAR(40) NOT NULL UNIQUE,
-- 	description TEXT,
-- 	is_dangerous TINYINT(1) NOT NULL
-- );
-- 
-- CREATE TABLE workers(
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	first_name VARCHAR(40) NOT NULL,
-- 	last_name VARCHAR(40) NOT NULL,
-- 	age INT,
-- 	personal_number VARCHAR(20) NOT NULL UNIQUE,
-- 	salary DECIMAL(19, 2),
-- 	is_armed TINYINT(1) NOT NULL,
-- 	start_date DATE,
-- 	preserve_id INT,
-- 	position_id INT NOT NULL,
-- 	
-- 	FOREIGN KEY (preserve_id) REFERENCES preserves(id),
-- 	FOREIGN KEY (position_id) REFERENCES positions(id)
-- );
-- 
-- INSERT INTO continents (name) VALUES
-- ('Asia'),
-- ('Africa'),
-- ('North America'),
-- ('South America'),
-- ('Antarctica'),
-- ('Europe'),
-- ('Australia');
-- 
-- INSERT INTO countries (name, country_code, continent_id) VALUES
-- ('Greenland', 'GL', 3),
-- ('Equador', 'EC', 4),
-- ('USA', 'US', 3),
-- ('Australia', 'AU', 7),
-- ('Canada', 'CA', 3),
-- ('China', 'CN', 1),
-- ('Costa Rica', 'CR', 3),
-- ('Germany', 'DE', 6),
-- ('Philippines', 'PH', 1),
-- ('Iceland', 'IS', 6),
-- ('Italy', 'IT', 6),
-- ('Brazil', 'BR', 4),
-- ('Kenya', 'KE', 2),
-- ('South Africa', 'ZA', 2),
-- ('Finland', 'FI', 6),
-- ('Chile', 'CL', 4),
-- ('Tanzania', 'TZ', 2),
-- ('Argentina', 'AR', 4),
-- ('Colombia', 'CO', 4),
-- ('Peru', 'PE', 4),
-- ('Israel', 'IL', 1),
-- ('India', 'IN', 1),
-- ('Indonesia', 'ID', 1),
-- ('Nepal', 'NP', 1);
-- 
-- 	INSERT INTO preserves (name, latitude, longitude, area, type, established_on) VALUES
-- 	('Parque Nacional Patagonia', -46.9412, -72.1649, 3045, 'Nature Reserve', '2018-01-29'),
--     ('Northeast Greenland National Park', 76.0000, -30.0000, 972000, 'Nature Reserve', '1974-05-21'),
--     ('Kruger National Park', -23.9884, 31.5547, 19485, 'National Park', '1898-05-31'),
--     ('Galapagos Islands', -0.8329, -91.1351, 7995, 'Archipelago', null),
--     ('Pantanal', -17.9474, -57.4875, 1356, 'Wetland', '1981-09-24'),
--     ('Torres del Paine', -51.2592, -73.2459, 1810, 'National Park', '1959-05-13'),
--     ('Tierra del Fuego', -54.8064, -68.3070, 63000, 'Island', '1960-01-01'),
--     ('Cotopaxi National Park', -0.6832, -78.4378, 334, 'National Park', '1975-07-26'),
--     ('Yasuni National Park', -0.9297, -76.3753, 9820, 'National Park', '1979-07-26'),
--     ('Tayrona National Natural Park', 11.3102, -74.0925, 150, 'National Park', '1964-04-24'),
-- 	('Yellowstone National Park', 44.4280, -110.5885, 8991, 'National Park', '1872-03-01'),
--     ('Amazonia', -4.4369, -56.8374, 10707, 'Rainforest', '1974-02-19'),
--     ('Great Barrier Reef', -16.2864, 145.6845, 344400, 'Coral Reef', '1981-02-01'),
--     ('Serengeti National Park', -2.1540, 34.6857, 14763, 'National Park', '1951-03-01'),
--     ('Denali National Park', 63.0695, -151.0070, 19186, 'National Park', '1917-02-26'),
-- 	('Mount Hamiguitan Range Wildlife Sanctuary', 6.7642, 126.0917, 68, 'Wildlife Sanctuary', '2014-06-23'),
--     ('Los Glaciares National Park', -49.3274, -73.0458, 7269, 'Glaciers', '1937-05-11'),
--     ('Colca Valley National Park', -15.6275, -71.8372, 4950, 'National Park', '1985-01-22'),
--     ('Lencois Maranhenses National Park', -2.5069, -42.5181, 1550, 'National Park', '1981-06-02'),
--     ('Iguazu National Park', -25.6953, -54.4367, 550, 'National Park', '1934-10-09'),
--     ('Nuuksio National Park', 60.3450, 24.5102, 53, 'National Park', '1994-06-22'),
--     ('Repovesi National Park', 61.0994, 26.9215, 150, 'National Park', '2003-06-17'),
--     ('Komodo', -8.5152, 119.5193, 1731, 'Island', '1980-03-06'),
-- 	('Sagarmatha National Park', 27.9881, 86.9250, 1148, 'National Park', '1976-07-19'),
--     ('Bandipur National Park', 27.0588, 88.7094, 874, 'National Park', '1974-12-04'),
--     ('Ein Hemed National Park', 31.7653, 35.0983, 400, 'National Park', null),
--     ('Hundred Islands National Park', 16.2060, 119.9750, 17, 'Archipelago', '1940-01-18'),
--     ('Sundarbans', 21.9497, 88.9401, 1330, 'Wildlife Sanctuary', '1984-05-04'),
--     ('Black Forest Reserve', 47.7777, 7.8929, 100, 'Forest', '1995-07-15'),
--     ('Vatnajokull National Park', 64.9631, -18.7772, 14000, 'National Park', '2008-06-07'),
--     ('Banff National Park', 51.4968, -115.9281, 6641, 'National Park', '1885-11-25'),
--     ('Cinque Terre National Park', 44.1124, 9.7338, 38, 'National Park', '1999-10-27'),
--     ('Dolomiti Bellunesi National Park', 46.2965, 11.918, 32, 'National Park', '1990-06-20'),
--     ('Lauca National Park', -18.0331, -69.2866, 1379, 'National Park', null),
--     ('Corcovado National Park', 8.7471, -83.6204, 424, 'Peninsula', null);
--     
-- 	INSERT INTO positions (id, name, description, is_dangerous) VALUES
--     (1, 'Botanist', 'Studies plant life within the preserve, identifying species, assessing biodiversity, and monitoring for invasive plants that could disrupt the native ecosystem.', 0),
--     (2, 'Conservation Scientist', 'Develops and implements plans to manage and protect natural resources. Focuses on sustainable practices to preserve the ecological balance.', 0),
--     (3, 'Ecologist', 'Examines the relationships between organisms and their environment, studying how factors such as climate, terrain, and other species impact the ecosystem.', 0),
--     (4, 'Environmental Educator', 'Designs and conducts educational programs for visitors, schools, and local communities to raise awareness about conservation, ecology, and sustainable practices.', 0),
--     (5, 'Fire Management Specialist', 'Develops and implements controlled burn programs to maintain the health of certain ecosystems that depend on periodic fires', 1),
--     (6, 'Forester', 'Manages the forested areas within the preserve, assessing tree health, planning timber harvests (if applicable), and implementing reforestation efforts.', 0),
--     (7, 'Land Steward', 'Monitors and manages the land, ensuring that human activities do not harm the natural habitat. Implements land restoration projects and invasive species control.', 0),
--     (8, 'Park Ranger', 'Responsibilities include enforcing park regulations, providing information to visitors, conducting educational programs, and overseeing the overall safety of the preserve.', 1),
--     (9, 'Research Scientist', 'Conducts scientific research within the preserve, contributing to the broader scientific community\'s understanding of ecosystems, biodiversity, and conservation.', 0),
--     (10, 'Trail Maintenance Worker', 'Responsible for constructing and maintaining trails within the preserve, ensuring they are safe for visitors while minimizing impact on the environment.', 0),
--     (11, 'Visitor Services Coordinator', 'Manages visitor centers, coordinates events, and ensures positive visitor experiences while educating them about the preserve\'s ecosystems and rules.', 1),
--     (12, 'Wildlife Biologist', 'Studies and monitors the wildlife population, behavior, and habitats. Conducts research to assess the health and biodiversity of the ecosystem.', 0),
--     (13, 'Wildlife Rehabilitator', 'Works to rehabilitate injured or orphaned wildlife found within the preserve. Provides medical care and releases animals back into their natural habitat.', 1),
--     (14, 'GIS Specialist', 'Uses GIS (Geographic Information System) technology to map and analyze the preserve\'s geography, habitats, and species distribution for better decision-making in conservation efforts.', 0);
--    
--     
-- INSERT INTO workers (first_name, last_name, age, personal_number, salary, is_armed, preserve_id, position_id, start_date)
-- VALUES
-- ('Mia', 'Martinez', '41', '134938', '3700.75', '1', '5', '4', '2000-02-02'),
-- ('Logand', 'Zhang', '63', '156668', '3800.50', '0', '30', '5', '2000-02-20'),
-- ('Aiden', 'Zhang', '56', '166668', '6800.50', '0', '12', '6', '1999-05-02'),
-- ('Amina', 'Al-Mansoori', '31', '562938', '8700.75', '1', '5', '6', '2011-02-02'),
-- ('Siti', 'Wahid', '36', '192938', '3800.50', '0', '12', '3', '2010-02-12'),
-- ('Sophie', 'Brown', '28', '882233', '4100.25', '0', '15', '8', '2020-02-28'),
-- ('Kwame', 'Nkrumah', '44', '452233', '4100.25', '0', '15', '13', '2005-12-02'),
-- ('Jane', 'Doe', '61', '292233', '4100.25', '0', '24', '4', '1988-02-02'),
-- ('John', 'Adams', '44', '123777', '3900.00', '1', '10', '3', '2015-06-02'),
-- ('Emma', 'Lee', '30', '183555', '4200.50', '1', '11', '5', '2022-02-15'),
-- ('Mei', 'Chen', '50', '145456', '4200.50', '1', '11', '1', '2000-08-31'),
-- ('Liam', 'Anderson', '30', '183726', '4200.50', '1', '13', '10', '2018-02-02'),
-- ('Eva', 'Perez', '43', '183666', '3900.75', '0', '16', '14', '2001-02-02'),
-- ('Tariq', 'Khalid', '34', '188886', '3900.75', '0', '16', '10', '2011-02-02'),
-- ('Luna', 'Kim', '30', '394785', '4000.50', '1', '3', '9', '2015-06-16'),
-- ('Akira', 'Sato', '30', '494785', '5000.50', '1', '3', '6', '2014-02-14'),
-- ('Ethan', 'Chen', '31', '294785', '4000.50', '1', '27', '10', '2012-12-12'),
-- ('Lucas', 'Anderson', '37', '294831', '3800.25', '0', '29', '9', '2008-03-02'),
-- ('Kwesi', 'Asante', '37', '294832', '3800.25', '0', '29', '13', '2013-07-09'),
-- ('Emma', 'Johnson', '66', '294833', '2800.25', '0', '12', '2', '1995-02-02'),
-- ('Aria', 'Chen', '26', '372899', '4000.25', '0', '9', '7', '2021-06-06'),
-- ('Yuki', 'Tanaka', '26', '372889', '2000.25', '0', '9', '12', '2019-04-04'),
-- ('James', 'Taylor', '51', '377779', '4100.75', '1', '11', '12', '1990-11-22'),
-- ('Jackson', 'Taylor', '34', '445566', '3800.50', '1', '8', '2', '2000-02-13'),
-- ('Fatima', 'Ahmed', '28', '656565', '3800.50', '1', '8', '2', '2017-10-02'),
-- ('Michael', 'Brown', '32', '115566', '3800.50', '1', '5', '6', '2016-09-09'),
-- ('Alexander', 'Wang', '26', '572910', '3800.25', '0', '16', '12', '2023-02-10'),
-- ('Olivia', 'Wong', '41', '573920', '3600.00', '1', '14', '12', '2006-02-02'),
-- ('Zainab', 'Abdullah', '41', '573921', '3600.00', '1', '14', '9', '2003-03-26'),
-- ('William', 'Rodriguez', '40', '573922', '9600.00', '1', '17', '11', '2008-07-20'),
-- ('Noah', 'Martinez', '38', '582910', '3700.25', '1', '15', '2', '2010-02-02'),
-- ('Isabella', 'Garcia', '27', '739284', '4300.50', '0', '16', '10', '2016-12-22'),
-- ('Madison', 'Chang', '66', '740003', '3600.75', '0', '28', '2', '1987-02-02'),
-- ('Zoe', 'Cheng', '26', '709203', '3600.75', '0', '30', '11', '2009-02-02'),
-- ('Carter', 'Chen', '35', '749703', '3600.75', '0', '28', '10', '2007-06-14'),
-- ('Ananya', 'Verma', '26', '711113', '3656.75', '0', '30', '8', '2019-02-23'),
-- ('Farida', 'Hassan', '75', '777778', '6600.75', '0', '27', '14', '1975-12-12'),
-- ('Avery', 'White', '39', '771111', '4000.00', '0', '22', '13', '2004-01-02'),
-- ('Suresh', 'Patel', '38', '228899', '4000.00', '0', '22', '7', '2005-02-02'),
-- ('Emily', 'Davis', '67', '123899', '14000.00', '0', '6', '7', '1980-02-02'),
-- ('Evelyn', 'Lea', '30', '837000', '4100.25', '1', '29', '13', '2011-02-02'),
-- ('Ethan', 'Li', '61', '844442', '14100.25', '1', '20', '1', '1979-11-11'),
-- ('Abigail', 'Turner', '32', '437492', '4100.25', '1', '1', '14', '2018-02-01'),
-- ('Raj', 'Sharma', '51', '835692', '4100.25', '1', '20', '9', '1993-06-09'),
-- ('Jin', 'Lee', '72', '836672', '4100.25', '1', '14', '13', '1972-02-26'),
-- ('Grayson', 'Hernandez', '35', '887862', '3800.50', '1', '30', '6', '2009-02-02'),
-- ('Abebe', 'Tesfaye', '75', '888862', '13800.50', '1', '31', '11', '1988-08-12'),
-- ('Elijah', 'Davis', '36', '876773', '3600.00', '0', '16', '11', '2015-02-02'),
-- ('Ravi', 'Singh', '46', '856473', '3600.00', '0', '18', '14', '1998-03-28'),
-- ('Olivia', 'Thomas', '56', '856666', '3600.00', '0', '10', '8', '1989-02-02'),
-- ('Liam', 'Garcia', '53', '920384', '13900.75', '0', '25', '1', '1988-05-14'),
-- ('Rahul', 'Gupta', '33', '120384', '3900.75', '0', '23', '3', '2012-02-02'),
-- ('Sophia', 'Lopez', '35', '333384', '12900.75', '0', '18', '2', '2009-12-23'),
-- ('Harper', 'Nguyen', '39', '444374', '3600.50', '1', '21', '10', '1998-06-29'),
-- ('Laila', 'Khan', '49', '111374', '3600.50', '1', '32', '5', '2000-09-29'),
-- ('Logan', 'Wang', '59', '938224', '2300.00', '1', '5', '8', '1988-03-25'),
-- ('Mia', 'Turner', '44', '922274', '4300.00', '1', '25', '4', '1995-10-02'),
-- ('Hiroshi', 'Yamamoto', '39', '100001', '4300.00', '1', '7', '14', '2002-08-13'),
-- ('Ava', 'Miller', '33', '222000', '4000.75', '0', '15', '10', '2008-07-21');
-- 
-- 
-- INSERT INTO countries_preserves (country_id, preserve_id) VALUES 
-- 
-- (1,2),
-- (2,4),
-- (2,8),
-- (2,9),
-- (3,11),
-- (3,15),
-- (4,13),
-- (5,31),
-- (7,35),
-- (8,29),
-- (9,16),
-- (9,27),
-- (10,30),
-- (11,32),
-- (11,33),
-- (12,5),
-- (12,12),
-- (12,19),
-- (14,3),
-- (15,21),
-- (15,22),
-- (16,1),
-- (16,6),
-- (16,34),
-- (17,14),
-- (18,7),
-- (18,17),
-- (18,20),
-- (19,10),
-- (20,18),
-- (21,26),
-- (22,25),
-- (22,28),
-- (23,23),
-- (24,24);

-- INSERT INTO preserves(name, latitude, longitude, area, type, established_on)
-- SELECT concat(name, ' ', 'is in South Hemisphere') AS name,
-- latitude,
-- longitude,
-- area * id AS area,
-- lower(type) AS type,
-- established_on FROM preserves
-- WHERE latitude < 0;

-- UPDATE workers
-- SET salary = salary + 500
-- WHERE position_id IN (5, 8, 11, 13);

-- DELETE FROM preserves
-- WHERE established_on IS NULL;

-- SELECT concat(first_name, ' ', last_name) AS full_name,
-- datediff('2024-01-01', start_date) AS days_of_experience
-- FROM workers
-- ORDER BY `days_of_experience` DESC
-- LIMIT 10;

-- SELECT w.id, w.first_name, w.last_name, p.name, c.country_code FROM workers w
-- JOIN preserves p ON p.id = w.preserve_id
-- JOIN countries_preserves cp ON cp.preserve_id = p.id
-- JOIN countries c ON c.id = cp.country_id
-- WHERE w.salary > 5000 AND w.age < 50
-- ORDER BY c.country_code;

-- SELECT p.name, count(w.id) AS armed_workers FROM preserves p
-- JOIN workers w ON w.preserve_id = p.id
-- WHERE w.is_armed = 1
-- GROUP BY p.name
-- ORDER BY `armed_workers` DESC, p.name;

-- SELECT p.name, c.country_code, YEAR(p.established_on) AS founded_in FROM preserves p
-- JOIN countries_preserves cp ON cp.preserve_id = p.id
-- JOIN countries c ON c.id = cp.country_id
-- WHERE month(p.established_on) = 5
-- ORDER BY p.established_on;

-- SELECT id, name, 
-- CASE
-- 	WHEN area <= 100 THEN 'very small'
-- 	WHEN area <= 1000 THEN 'small'
-- 	WHEN area <= 10000 THEN 'medium'
-- 	WHEN area <= 50000 THEN 'large'
-- 	WHEN area > 50000 THEN 'very large'
-- END AS 'category'
-- FROM preserves
-- ORDER BY area DESC;

-- CREATE FUNCTION udf_average_salary_by_position_name (name VARCHAR(40)) RETURNS DECIMAL(10, 2)
-- DETERMINISTIC
-- BEGIN
-- 	RETURN(
-- 	SELECT avg(w.salary) FROM positions p
-- 	JOIN workers w ON w.position_id = p.id
-- 	WHERE p.name = name
-- 	);
-- END;

-- CREATE PROCEDURE udp_increase_salaries_by_country(country_name VARCHAR(40))
-- BEGIN
-- 	UPDATE workers w
-- 	JOIN preserves p ON p.id = w.preserve_id
-- 	JOIN countries_preserves cp ON cp.preserve_id = p.id
-- 	JOIN countries c ON c.id = cp.country_id
-- 	SET w.salary = w.salary * 1.05
-- 	WHERE c.name = country_name;
-- END;

SELECT EXTRACT(DAY FROM start_date) AS first, day(start_date) AS second FROM workers








































