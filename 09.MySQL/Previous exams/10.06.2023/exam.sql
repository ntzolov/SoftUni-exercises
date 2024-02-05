-- CREATE DATABASE exam;
USE exam;
-- 
-- CREATE TABLE countries(
-- 	id int PRIMARY KEY AUTO_INCREMENT,
-- 	name VARCHAR(40) NOT NULL UNIQUE
-- );
-- 
-- CREATE TABLE cities(
-- id int PRIMARY KEY AUTO_INCREMENT,
-- name VARCHAR(40) NOT NULL UNIQUE,
-- population INT,
-- country_id int NOT NULL,
-- 
-- FOREIGN KEY (country_id) REFERENCES countries(id)
-- );
-- 
-- CREATE TABLE universities(
-- id int PRIMARY KEY AUTO_INCREMENT,
-- name VARCHAR(60) NOT NULL UNIQUE,
-- address VARCHAR(80) NOT NULL UNIQUE,
-- tuition_fee DECIMAL(19, 2) NOT NULL,
-- number_of_staff INT,
-- city_id INT,
-- 
-- FOREIGN KEY (city_id) REFERENCES cities(id)
-- );
-- 
-- CREATE TABLE courses(
-- 	id int PRIMARY KEY AUTO_INCREMENT,
-- 	name VARCHAR(40) NOT NULL UNIQUE,
-- 	duration_hours DECIMAL(19, 2),
-- 	start_date DATE,
-- 	teacher_name VARCHAR(60) NOT NULL UNIQUE,
-- 	description TEXT,
-- 	university_id INT,
-- 	
-- 	FOREIGN KEY (university_id) REFERENCES universities(id)
-- );
-- 
-- CREATE TABLE students(
-- 	id int PRIMARY KEY AUTO_INCREMENT,
-- 	first_name VARCHAR(40) NOT NULL,
-- 	last_name VARCHAR(40) NOT NULL,
-- 	age INT,
-- 	phone VARCHAR(20) NOT NULL UNIQUE,
-- 	email VARCHAR(255) NOT NULL UNIQUE,
-- 	is_graduated BOOLEAN NOT NULL,
-- 	city_id INT,
-- 	
-- 	FOREIGN KEY (city_id) REFERENCES cities(id)
-- );
-- 
-- CREATE TABLE students_courses(
-- 	grade DECIMAL(19, 2) NOT NULL,
-- 	student_id INT NOT NULL,
-- 	course_id INT NOT NULL,
-- 	
-- 	FOREIGN KEY (student_id) REFERENCES students(id),
-- 	FOREIGN KEY (course_id) REFERENCES courses(id)
-- );
-- 
-- 
-- 
-- 
-- 
-- INSERT INTO countries (name) VALUES
-- ('United States'),
-- ('Canada'),
-- ('Mexico'),
-- ('France'),
-- ('Germany'),
-- ('Japan'),
-- ('China');
-- 
-- INSERT INTO cities (name, country_id, population) VALUES
-- ('New York', 1, 8398748),
-- ('Los Angeles', 1, 3990456),
-- ('Toronto', 2, 2930000),
-- ('Montreal', 2, 1780000),
-- ('Mexico City', 3, 8874724),
-- ('Paris', 4, 2140526),
-- ('Marseille', 4, 852516),
-- ('Berlin', 5, 3669491),
-- ('Hamburg', 5, 1841179),
-- ('Munich', 5, 1471508),
-- ('Tokyo', 6, 13929286),
-- ('Osaka', 6, 1942704),
-- ('Kyoto', 6, 1474602),
-- ('Shanghai', 7, 24256800),
-- ('Beijing', 7, 21516000),
-- ('Guangzhou', 7, 14043500),
-- ('Chengdu', 7, 11160000),
-- ('Shenzhen', 7, 10750000),
-- ('Hangzhou', 7, 9182667);
-- 
-- insert into universities (id, name, address, tuition_fee, number_of_staff, city_id)
-- values  (1, 'Aichi Mizuho College', 'Higashishimbashi Shiodomemedeiatawa(ai)', 1065.70, 63, 6),
--         (2, 'Centre for Alternative and Virtual Education', '5182 Armistice Avenue', 2915.90, 464, 2),
--         (3, 'Cornell University', '86 Meadow Vale Plaza', 3691.60, 576, 1),
--         (4, 'Donghua University', 'Long Shan Lu 300hao Chun Feng Cheng Shi Xin Zhu 11-18-2', 3560.10, 338, 7),
--         (5, 'Escuela Lomas Altas', 'BELISARIO DOMINGUEZ NO. 160', 787.30, 33, 3),
--         (6, 'Escuela Montessori San Jerónimo', '20 DE NOVIEMBRE NO. 1329', 2811.20, 229, 3),
--         (7, 'Fachschule für Physiotherapie', 'Paul-Nevermann-Platz 17', 1392.20, 331, 5),
--         (8, 'Fudan University', 'Jing De Zhen Shi Chun Tian Hua Yuan 18dong 1dan Yuan 102shi', 3394.40, null, null),
--         (9, 'Harvard', '241 Kropf Court', 698.30, 336, 1),
--         (10, 'Haus und Landwirtschaftliche Schule', 'Gubener Str. 31', 920.50, 201, 5),
--         (11, 'Institution Sainte-Marie', '44 rue Michel Ange', 2164.20, null, null),
--         (12, 'Instituto Cumbres y Rosedal Lomas', 'AV 5 DE MAYO NO. 1036', 426.60, 105, 3),
--         (13, 'Kent School', '3921 Duke Pass', 1518.80, 360, 1),
--         (14, 'KHS Donaueschingen', 'Augsburger Straße 39', 1828.50, 218, 5),
--         (15, 'Kolping Berufskolleg', 'An der Schillingbrucke 13', 1503.60, 114, 5),
--         (16, 'Kopernikus-Realschule', 'Prenzlauer Allee 25', 1061.50, 286, 5),
--         (17, 'Lycée Alain', '22 Square de la Couronne', 421.60, 247, 7),
--         (18, 'Lycée Galilee', '95 Chemin Des Bateliers', 2037.60, null, null),
--         (19, 'Lycée Thiers', '75 rue des Coudriers', 3025.10, 174, 4),
--         (20, 'McGill University', '01 Transport Trail', 2199.50, 72, 2),
--         (21, 'Nagoya Bunri University', 'Higashi Kanda 2-chome', 2909.60, 192, 6),
--         (22, 'Nanjing University', 'Huang Long Jie Shu Yi Jia Yuan 3men 403shi', 3612.00, 95, 7),
--         (23, 'Nikolaus-von-Kues-Gymnasium', 'Fasanenstrasse 53', 2569.20, 90, 5),
--         (24, 'Penn', '6 West Plaza', 3883.50, 477, 1),
--         (25, 'Senecca College', '1 Veith Lane', 2873.70, 221, 2),
--         (26, 'Shubun University', 'Higashi Ueno 1-chome', 2756.80, 68, 6),
--         (27, 'St Martin de Porres School', '4749 Oak Valley Place', 2521.40, 251, 2),
--         (28, 'Tongji University', 'i Lin Sheng Yan Ji Shi Ju Zi Jie Da Yu Hua Yuan 4dong 401', 3904.70, 103, 19),
--         (29, 'Universidad Santa Fe', 'ANGELA BARRIENTOS NO. 101 1ER PISO', 287.70, 276, 5),
--         (30, 'Whitefish Lake First Nation School', '75965 Amoth Alley', 2899.50, 101, 2);
-- 
-- insert into courses (id, name, duration_hours, start_date, teacher_name, description, university_id)
-- values  (1, 'Introduction to Computer Science II', 2.50, '2021-03-20', 'John Smith', 'This course covers the basics of computer science and programming.', 1),
--         (2, 'Calculus I', 1.00, '2021-04-17', 'Amy Lee', 'This course covers limits, derivatives, and integrals.', 1),
--         (3, 'Data Structures and Algorithms', 4.00, '2023-03-16', 'Jane Doe', 'This course covers fundamental data structures and algorithms used in computer science.', 2),
--         (4, 'Organic Chemistry Intermediate', 3.00, '2019-05-17', 'David Kim', 'This course covers the basics of organic chemistry and its applications.', 2),
--         (5, 'Introduction to Statistics Advanced', 4.00, '2019-05-20', 'Emma Johnson', 'This course covers basic statistical concepts and methods.', 3),
--         (6, 'Introductory Physics', 3.50, '2018-02-12', 'Michael Brown', 'This course covers mechanics and thermodynamics.', 3),
--         (7, 'Marketing Management', 1.50, '2018-07-16', 'Julia Davis', 'This course covers principles of marketing and marketing management.', 4),
--         (8, 'Microeconomics', 2.00, '2022-09-10', 'Alex Chen', 'This course covers the behavior of individuals and firms in markets.', 4),
--         (9, 'Linear Algebra', 1.50, '2017-04-03', 'Sarah Park', 'This course covers systems of linear equations, matrices, and determinants.', 5),
--         (10, 'Introduction to Psychology', 3.50, '2020-12-03', 'Daniel Brown', 'This course covers the basics of psychology and its applications.', 5),
--         (11, 'Introduction to Sociology', 1.00, '2017-01-05', 'Jessica Lee', 'This course covers the basics of sociology and its applications.', 6),
--         (12, 'Corporate Finance', 2.50, '2022-06-03', 'Steven Wang', 'This course covers financial decision-making in corporations.', 6),
--         (13, 'Artificial Intelligence I', 2.50, '2022-08-29', 'Eric Chen', 'This course covers the basics of artificial intelligence and its applications.', 7),
--         (14, 'Machine Learning Basics', 2.50, '2021-06-04', 'Olivia Kim', 'This course covers fundamental machine learning algorithms and techniques.', 7),
--         (15, 'Web Development', 1.50, '2021-07-12', 'Lucas Lee', 'This course covers the basics of web development and its technologies.', 7),
--         (16, 'Mobile Application Development', 1.00, '2022-11-13', 'Mia Davis', 'This course covers the basics of mobile application development and its technologies.', 7),
--         (17, 'Business Analytics', 2.00, '2020-07-12', 'Jason Smith', 'This course covers data analytics techniques used in business.', 9),
--         (18, 'Financial Accounting', 3.50, '2020-01-02', 'Ethan Chen', 'This course covers the basics of financial accounting.', 9),
--         (19, 'Organizational Behavior', 3.50, '2020-04-09', 'Sophia Lee', 'This course covers the behavior of individuals and groups in organizations.', 10),
--         (20, 'Operations Management', 3.50, '2022-06-27', 'William Kim', 'This course covers the management of business operations and processes.', 10),
--         (21, 'Public Speaking', 4.00, '2022-04-21', 'Grace Lee', 'This course covers effective public speaking skills.', 10),
--         (22, 'Creative Writing', 2.00, '2021-03-06', 'Andrew Chen', 'This course covers techniques for creative writing.', 10),
--         (23, 'World History', 2.00, '2021-10-03', 'Emily Kim', 'This course covers world history from ancient civilizations to modern times.', 12),
--         (24, 'American History', 1.00, '2021-12-17', 'Jacob Lee', 'This course covers American history from colonial times to present day.', 12),
--         (25, 'Environmental Science', 3.00, '2019-09-22', 'Lily Park', 'This course covers environmental issues and their impact on society.', 13),
--         (26, 'Introduction to Biology', 2.00, '2022-01-05', 'Matthew Kim', 'This course covers the basics of biology and its applications.', 13),
--         (27, 'Introductory Spanish', 3.50, '2020-05-25', 'Isabella Lee', 'This course covers basic Spanish language skills.', 14),
--         (28, 'Intermediate French', 3.50, '2020-02-21', 'David Chen', 'This course covers intermediate French language skills.', 14),
--         (29, 'Introduction to Philosophy', 3.50, '2022-06-18', 'Sophie Brown', 'This course covers the basics of philosophy and its applications.', 15),
--         (30, 'World Religions', 2.50, '2022-06-19', 'James Lee', 'This course covers the major world religions and their impact on society.', 15),
--         (31, 'Digital Marketing', 2.00, '2019-10-20', 'Emma Davis', 'This course covers the principles of digital marketing and its strategies.', 16),
--         (32, 'Managerial Accounting', 4.00, '2020-10-09', 'Alexander Kim', 'This course covers the basics of managerial accounting.', 16),
--         (33, 'Business Law', 4.00, '2021-12-29', 'Jessica Brown', 'This course covers the legal aspects of business and their applications.', 17),
--         (34, 'International Business', 1.50, '2021-10-30', 'Daniel Kim', 'This course covers the basics of international business and its strategies.', 17),
--         (35, 'Financial Management', 1.00, '2022-02-11', 'Sophia Chen', 'This course covers financial decision-making and risk management in business.', 19),
--         (36, 'Marketing Research', 3.50, '2021-12-21', 'William Lee', 'This course covers marketing research techniques and their applications.', 19),
--         (37, 'Human Resource Management', 3.50, '2018-08-19', 'Ethan Brown', 'This course covers the management of human resources in organizations.', 19),
--         (38, 'Organizational Development', 1.00, '2019-08-28', 'Mia Kim', 'This course covers the development of organizations and their management.', 19),
--         (39, 'Software Engineering', 1.00, '2020-02-25', 'Lucas Kim', 'This course covers software development processes and methodologies.', 20),
--         (40, 'Computer Networks', 3.00, '2018-03-01', 'Olivia Lee', 'This course covers computer network architectures and protocols.', 20),
--         (41, 'Artificial Intelligence', 4.00, '2019-05-17', 'Ava Brown', 'This course covers the basics of artificial intelligence and its applications.', 22),
--         (42, 'Computer Graphics', 4.00, '2022-01-27', 'Max Lee', 'This course covers computer graphics and its applications in media and entertainment.', 22),
--         (43, 'Machine Learning', 2.00, '2023-02-26', 'Sophie Kim', 'This course covers the principles of machine learning and its applications.', 23),
--         (44, 'Mobile App Development', 3.50, '2020-05-13', 'Liam Brown', 'This course covers mobile app development for iOS and Android platforms.', 23),
--         (45, 'Web Development Advanced', 2.50, '2018-02-24', 'Chloe Kim', 'This course covers web development using HTML, CSS, and JavaScript.', 24),
--         (46, 'Cloud Computing', 2.50, '2023-03-28', 'Daniel Lee', 'This course covers cloud computing architectures and services.', 24),
--         (47, 'Information Security', 2.00, '2018-02-25', 'Emma Brown', 'This course covers the principles of information security and their applications.', 25),
--         (48, 'Network Security', 3.50, '2019-09-03', 'Andrew Kim', 'This course covers network security protocols and their applications.', 25),
--         (49, 'Introduction to Psychology Basics', 3.00, '2022-04-21', 'Emily Lee', 'This course covers the basics of psychology and its applications.', 26),
--         (50, 'Abnormal Psychology', 1.00, '2018-08-17', 'Jacob Brown', 'This course covers abnormal psychology and its treatments.', 26),
--         (51, 'Sociology', 1.00, '2020-11-13', 'Isabella Kim', 'This course covers the basics of sociology and its applications.', 27),
--         (52, 'Anthropology', 1.00, '2017-04-18', 'Matthew Lee', 'This course covers the basics of anthropology and its applications.', 27),
--         (53, 'Microeconomics Basics', 3.00, '2022-04-17', 'Lily Brown', 'This course covers microeconomic theory and its applications.', 28),
--         (54, 'Macroeconomics', 3.00, '2021-11-01', 'Martin Kim', 'This course covers macroeconomic theory and its applications.', 28),
--         (55, 'Statistics', 2.00, '2022-06-05', 'Grace Cohen', 'This course covers statistical theory and its applications.', 29),
--         (56, 'Probability Theory', 1.00, '2021-08-03', 'Andrey Chen', 'This course covers probability theory and its applications.', 29),
--         (57, 'Introduction to Physics', 3.50, '2023-02-12', 'Emily Clark', 'This course covers the basics of physics and its applications.', 30),
--         (58, 'Classical Mechanics', 2.50, '2020-05-04', 'Jacob Statham', 'This course covers classical mechanics and its applications.', 30),
--         (59, 'Digital Signal Processing', 2.00, '2021-05-31', 'Lily Parkland', 'This course covers digital signal processing techniques and their applications.', 21),
--         (60, 'Communication Systems', 2.00, '2021-01-21', 'Matthew Mulligan', 'This course covers communication system architectures and protocols.', 21),
--         (61, 'Finances', 1.00, '2022-01-21', 'John Evans', 'This course covers basics of finances.', 3),
--         (62, 'Quantum Physics', 2.00, '2020-01-21', 'Erwin Schroedinger', 'the study of matter and energy at the most fundamental level.', 16);
-- 
-- insert into students (first_name, last_name, age, phone, email, is_graduated, city_id)
-- values  ('Alice', 'Smith', 18, '+123456789', 'alice.smith@example.com', 1, 1),
--         ('Bob', 'Johnson', 20, '+234567890', 'bob.johnson@example.com', 0, 2),
--         ('Charlie', 'Garcia', 21, '+345678901', 'charlie.garcia@example.com', 0, 3),
--         ('David', 'Lee', 19, '+456789012', 'david.lee@example.com', 1, 4),
--         ('Emily', 'Wong', 22, '+567890123', 'emily.wong@example.com', 0, 5),
--         ('Frank', 'Chen', 18, '+678901234', 'frank.chen@example.com', 1, 6),
--         ('Grace', 'Nguyen', 20, '+789012345', 'grace.nguyen@example.com', 0, 7),
--         ('Henry', 'Kim', 21, '+890123456', 'henry.kim@example.com', 0, 8),
--         ('Isabella', 'Park', 19, '+901234567', 'isabella.park@example.com', 1, 9),
--         ('Jack', 'Patel', 22, '+012345678', 'jack.patel@example.com', 0, 10),
--         ('Kaitlyn', 'Gupta', 18, '+123450987', 'kaitlyn.gupta@example.com', 1, 11),
--         ('Luke', 'Singh', 20, '+234560987', 'luke.singh@example.com', 0, 12),
--         ('Mia', 'Yamamoto', 21, '+345670987', 'mia.yamamoto@example.com', 0, 13),
--         ('Noah', 'Mori', 19, '+456780987', 'noah.mori@example.com', 1, 14),
--         ('Olivia', 'Sanchez', 22, '+567890876', 'olivia.sanchez@example.com', 0, 15),
--         ('Peter', 'Gomez', 18, '+678901765', 'peter.gomez@example.com', 1, 16),
--         ('Quinn', 'Reyes', 20, '+789012654', 'quinn.reyes@example.com', 0, 17),
--         ('Ryan', 'Nakamura', 21, '+890123543', 'ryan.nakamura@example.com', 0, 18),
--         ('Samantha', 'Fernandez', 19, '+901234532', 'samantha.fernandez@example.com', 0, 19),
--         ('Victoria', 'Sato', 18, '+123456749', 'victoria.sato@example.com', 1, 13),
--         ('William', 'Tan', 20, '+234567290', 'william.tan@example.com', 0, 14),
--         ('Julia', 'Rodriguez', 25, '+1-555-1234', 'julia.rodriguez@email.com', 0, 1),
--         ('Samantha', 'Lee', 22, '+1-555-5678', 'samantha.lee@email.com', 0, 2),
--         ('Alex', 'Nguyen', 23, '+1-555-9012', 'alex.nguyen@email.com', 0, 3),
--         ('Matthew', 'Gonzalez', 24, '+1-555-3456', 'matthew.gonzalez@email.com', 0, 4),
--         ('Emily', 'Kim', 26, '+1-555-7890', 'emily.kim@email.com', 0, 5),
--         ('Daniel', 'Wang', 21, '+1-555-2345', 'daniel.wang@email.com', 0, 6),
--         ('Sophie', 'Chen', 20, '+1-555-6789', 'sophie.chen@email.com', 0, 7),
--         ('Ethan', 'Garcia', 19, '+1-555-1231', 'ethan.garcia@email.com', 0, 8),
--         ('Avery', 'Martinez', 20, '+1-555-5628', 'avery.martinez@email.com', 0, 9),
--         ('Oliver', 'Nguyen', 22, '+1-555-9022', 'oliver.nguyen@email.com', 0, 10),
--         ('Chloe', 'Gonzalez', 21, '+1-555-3256', 'chloe.gonzalez@email.com', 0, 11),
--         ('Gabriel', 'Kim', 23, '+1-555-7892', 'gabriel.kim@email.com', 0, 12),
--         ('Lucas', 'Wang', 24, '+1-555-2341', 'lucas.wang@email.com', 0, 13),
--         ('Mia', 'Chen', 22, '+1-555-6781', 'mia.chen@email.com', 0, 14),
--         ('Evelyn', 'Garcia', 25, '+1-555-1334', 'evelyn.garcia@email.com', 0, 15),
--         ('Aiden', 'Martinez', 24, '+1-555-5228', 'aiden.martinez@email.com', 0, 16),
--         ('Harper', 'Nguyen', 26, '+1-555-9032', 'harper.nguyen@email.com', 0, 17),
--         ('Benjamin', 'Gonzalez', 23, '+1-551-3856', 'benjamin.gonzalez@email.com', 0, 18),
--         ('Abigail', 'Kim', 22, '+1-555-7491', 'abigail.kim@email.com', 0, 19),
--         ('Samantha', 'Smith', 23, '555-0034', 'sam.smith@example.com', 1, 1),
--         ('Jacob', 'Johnson', 22, '555-2345', 'jacob.johnson@example.com', 0, 2),
--         ('Emily', 'Davis', 20, '555-3456', 'emily.davis@example.com', 0, 3),
--         ('Michael', 'Jones', 25, '555-4567', 'michael.jones@example.com', 1, 4),
--         ('Emma', 'Wilson', 24, '555-56755', 'emma.wilson@example.com', 1, 5),
--         ('Daniel', 'Taylor', 21, '555-6189', 'daniel.taylor@example.com', 0, 6),
--         ('Olivia', 'Miller', 19, '555-7190', 'olivia.miller@example.com', 0, 7),
--         ('William', 'Anderson', 18, '555-8901', 'william.anderson@example.com', 0, 8),
--         ('Ava', 'Thomas', 27, '555-9012', 'ava.thomas@example.com', 1, 9),
--         ('Ethan', 'Jackson', 26, '555-0323', 'ethan.jackson@example.com', 1, 10),
--         ('Isabella', 'White', 22, '555-14', 'isabella.white@example.com', 0, 11),
--         ('James', 'Harris', 21, '555-23', 'james.harris@example.com', 0, 12),
--         ('Sophia', 'Martin', 20, '555-3556', 'sophia.martin@example.com', 0, 13),
--         ('Benjamin', 'Thompson', 25, '555-47', 'benjamin.thompson@example.com', 1, 14),
--         ('Mia', 'Moore', 24, '555-5658', 'mia.moore@example.com', 1, 15),
--         ('Daniel', 'Allen', 23, '555-789', 'daniel.allen@example.com', 1, 16),
--         ('Emily', 'Young', 19, '555-790', 'emily.young@example.com', 0, 17),
--         ('Alexander', 'King', 18, '55-8901', 'alexander.king@example.com', 0, 18),
--         ('Madison', 'Wright', 27, '55-9012', 'madison.wright@example.com', 1, 19),
--         ('Noah', 'Scott', 26, '555-123', 'noah.scott@example.com', 1, 2),
--         ('Abigail', 'Walker', 22, '55-982', 'abigail.walker@example.com', 0, 11),
--         ('William', 'Mitchell', 21, '555-945', 'william.mitchell@example.com', 0, 12);
-- 
-- insert into students_courses (student_id, course_id, grade)
-- values  (1, 49, 2.30),
--         (1, 4, 4.00),
--         (1, 45, 4.90),
--         (1, 2, 2.70),
--         (1, 50, 3.30),
--         (1, 32, 3.30),
--         (2, 27, 3.10),
--         (2, 22, 4.80),
--         (2, 24, 3.60),
--         (2, 29, 4.80),
--         (2, 40, 5.00),
--         (3, 37, 3.00),
--         (4, 3, 4.10),
--         (4, 23, 2.20),
--         (4, 55, 4.40),
--         (5, 48, 3.50),
--         (5, 24, 3.60),
--         (5, 11, 2.90),
--         (5, 30, 4.50),
--         (5, 12, 5.00),
--         (5, 23, 2.80),
--         (6, 58, 2.50),
--         (6, 22, 3.20),
--         (6, 20, 2.00),
--         (7, 19, 4.60),
--         (7, 1, 2.50),
--         (7, 5, 3.30),
--         (8, 42, 4.50),
--         (8, 4, 2.90),
--         (8, 57, 3.10),
--         (9, 60, 2.30),
--         (9, 16, 3.70),
--         (9, 51, 5.40),
--         (9, 13, 3.70),
--         (10, 31, 3.60),
--         (10, 45, 3.20),
--         (10, 25, 4.00),
--         (10, 47, 4.30),
--         (10, 35, 3.00),
--         (11, 19, 4.10),
--         (11, 7, 3.20),
--         (11, 58, 3.80),
--         (12, 52, 2.10),
--         (12, 34, 4.30),
--         (12, 7, 2.40),
--         (12, 1, 3.20),
--         (12, 45, 2.50),
--         (12, 57, 2.90),
--         (13, 3, 2.40),
--         (14, 38, 3.10),
--         (14, 40, 3.60),
--         (15, 4, 2.60),
--         (15, 44, 2.70),
--         (15, 33, 2.10),
--         (15, 31, 2.00),
--         (16, 60, 4.30),
--         (16, 41, 4.00),
--         (17, 46, 4.70),
--         (17, 6, 2.50),
--         (17, 37, 3.00),
--         (18, 23, 4.70),
--         (18, 26, 3.20),
--         (18, 22, 3.70),
--         (18, 13, 4.90),
--         (18, 29, 3.20),
--         (19, 52, 4.60),
--         (19, 36, 3.90),
--         (19, 19, 4.50),
--         (19, 12, 3.30),
--         (20, 25, 3.10),
--         (20, 13, 3.20),
--         (20, 45, 4.70),
--         (22, 30, 2.10),
--         (22, 44, 3.10),
--         (22, 34, 2.70),
--         (22, 5, 3.20),
--         (23, 39, 4.10),
--         (23, 44, 3.40),
--         (23, 44, 3.90),
--         (24, 8, 3.30),
--         (24, 15, 4.10),
--         (24, 45, 4.00),
--         (24, 44, 4.10),
--         (24, 28, 4.20),
--         (24, 4, 4.30),
--         (24, 44, 2.20),
--         (24, 1, 3.00),
--         (25, 55, 2.90),
--         (25, 44, 4.90),
--         (25, 10, 2.40),
--         (25, 57, 3.10),
--         (26, 20, 2.10),
--         (26, 44, 3.50),
--         (26, 1, 4.90),
--         (26, 7, 3.10),
--         (26, 10, 2.90),
--         (27, 57, 3.40),
--         (27, 40, 2.60),
--         (27, 27, 4.80),
--         (28, 11, 2.20),
--         (28, 39, 3.60),
--         (28, 7, 4.90),
--         (28, 57, 2.40),
--         (29, 2, 3.00),
--         (29, 37, 3.80),
--         (29, 42, 4.90),
--         (32, 45, 4.40),
--         (32, 14, 3.00),
--         (32, 1, 4.30),
--         (33, 13, 3.70),
--         (34, 24, 3.60),
--         (34, 53, 4.20),
--         (34, 51, 4.20),
--         (35, 48, 3.90),
--         (35, 3, 3.20),
--         (35, 46, 2.60),
--         (35, 50, 2.30),
--         (36, 4, 5.00),
--         (36, 29, 4.50),
--         (36, 49, 4.10),
--         (36, 15, 2.00),
--         (36, 41, 4.10),
--         (36, 42, 4.60),
--         (36, 55, 4.30),
--         (36, 7, 4.50),
--         (37, 2, 4.50),
--         (37, 6, 4.60),
--         (37, 19, 3.20),
--         (37, 27, 4.40),
--         (37, 44, 2.80),
--         (38, 48, 4.00),
--         (38, 4, 4.00),
--         (38, 45, 2.80),
--         (39, 1, 3.10),
--         (39, 30, 3.70),
--         (40, 33, 2.90),
--         (40, 16, 4.50),
--         (40, 40, 2.90),
--         (41, 7, 3.10),
--         (41, 27, 2.40),
--         (42, 21, 4.80),
--         (42, 55, 3.30),
--         (43, 42, 2.90),
--         (43, 57, 4.10),
--         (43, 50, 2.10),
--         (43, 14, 2.40),
--         (45, 26, 3.50),
--         (45, 2, 2.40),
--         (45, 40, 2.10),
--         (46, 45, 2.20),
--         (46, 31, 2.90),
--         (46, 9, 2.80),
--         (46, 35, 3.90),
--         (46, 26, 4.00),
--         (46, 60, 3.70),
--         (46, 49, 2.20),
--         (47, 49, 2.70),
--         (47, 44, 4.00),
--         (48, 46, 3.70),
--         (49, 35, 4.70),
--         (49, 44, 2.90),
--         (50, 47, 3.80),
--         (50, 42, 3.40),
--         (50, 30, 3.20),
--         (51, 21, 2.10),
--         (51, 16, 3.70),
--         (51, 5, 2.90),
--         (52, 47, 4.60),
--         (52, 20, 3.20),
--         (53, 12, 4.80),
--         (53, 46, 4.50),
--         (53, 2, 3.70),
--         (53, 9, 3.50),
--         (54, 22, 2.90),
--         (54, 54, 3.40),
--         (54, 38, 4.40),
--         (55, 55, 3.60),
--         (55, 57, 4.60),
--         (55, 42, 3.20),
--         (56, 17, 4.30),
--         (56, 20, 3.30),
--         (56, 7, 3.80),
--         (56, 9, 2.80),
--         (57, 32, 2.20),
--         (58, 33, 5.00),
--         (58, 11, 3.80),
--         (59, 21, 4.70),
--         (59, 32, 2.90),
--         (59, 7, 3.80),
--         (59, 56, 2.20),
--         (59, 62, 5.90),
--         (60, 40, 4.30),
--         (60, 62, 5.70),
--         (61, 62, 5.60),
--         (61, 47, 2.10),
--         (62, 55, 4.70),
--         (62, 12, 3.30),
--         (62, 26, 2.80),
--         (62, 23, 5.30),
--         (62, 37, 5.30);

/* EXERCISES */

INSERT INTO courses(name, duration_hours, start_date, teacher_name, description, university_id)
SELECT concat(teacher_name, ' course'),
char_length(name) / 10,
date_add(start_date, INTERVAL 5 DAY),
reverse(teacher_name),
concat('Course ', teacher_name, reverse(description)),
day(start_date)
FROM courses
WHERE id <= 5;

UPDATE universities 
SET tuition_fee = tuition_fee + 300
WHERE id BETWEEN 5 AND 12;

DELETE FROM universities
WHERE number_of_staff IS NULL;

SELECT * FROM cities
ORDER BY population DESC;

SELECT first_name, last_name, age, phone, email FROM students
WHERE age >= 21
ORDER BY first_name DESC, email ASC, id ASC
LIMIT 10;

SELECT concat_ws(' ', s.first_name, s.last_name) AS full_name,
substr(s.email, 2, 10) AS username,
reverse(s.phone) AS password
FROM students s
LEFT students_courses sc ON sc.student_id = s.id
WHERE sc.course_id IS NULL
GROUP BY s.id
ORDER BY `password` DESC;














































































