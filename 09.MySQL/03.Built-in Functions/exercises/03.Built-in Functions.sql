USE soft_uni;

/*****1*****/

SELECT first_name, last_name FROM employees
WHERE SUBSTRING(first_name, 1,2) = 'sa'
ORDER BY employee_id;

/*****2*****/

SELECT first_name, last_name FROM employees
WHERE last_name LIKE '%ei%'
ORDER BY employee_id; 

/*****3*****/

SELECT first_name FROM employees
WHERE department_id IN (3, 10) AND 
YEAR(hire_date) >= 1995 AND 
YEAR(hire_date) <= 2005;

/*****4*****/

SELECT first_name, last_name FROM employees
WHERE NOT job_title LIKE '%engineer%'
ORDER BY employee_id;

/*****5*****/

SELECT name FROM towns
WHERE char_length(name) = 5 OR 
char_length(name) = 6
ORDER BY name;

/*****6*****/

SELECT town_id, name FROM towns
WHERE name REGEXP('^[mkbe]')
ORDER BY name;

-- SELECT town_id, name FROM towns
-- WHERE lower(substring(name, 1, 1)) = 'm' OR 
-- lower(substring(name, 1, 1)) = 'k' OR 
-- lower(substring(name, 1, 1)) = 'b' OR 
-- lower(substring(name, 1, 1)) = 'e'
-- ORDER BY name;

/*****7*****/

SELECT town_id, name FROM towns
WHERE NOT name REGEXP('^[rbd]')
ORDER BY name;

/*****8*****/

CREATE VIEW v_employees_hired_after_2000 AS 
SELECT first_name, last_name FROM employees
WHERE YEAR(hire_date) > 2000;

SELECT * FROM v_employees_hired_after_2000;

/*****9*****/

SELECT first_name, last_name FROM employees
WHERE CHAR_LENGTH(last_name) = 5;

/*****10*****/

USE geography;

SELECT country_name, iso_code FROM countries
WHERE LENGTH(lower(country_name)) - LENGTH(REPLACE(lower(country_name), 'a', '')) > 2
ORDER BY iso_code;

/*****11*****/

SELECT peak_name, river_name, concat(lower(peak_name) , substring(lower(river_name), 2)) AS 'mix' FROM peaks, rivers
WHERE RIGHT(peak_name, 1) = LEFT(river_name, 1)
ORDER BY `mix`

/*****12*****/

USE diablo;

SELECT name, DATE_FORMAT(`start`, '%Y-%m-%d') AS start FROM games
WHERE YEAR(`start`) BETWEEN '2011' AND '2012'
ORDER BY `start`, name
LIMIT 50;

/*****13*****/

SELECT user_name, substring(email, locate('@', email) + 1) AS email_provider FROM users
ORDER BY `email_provider`, user_name;

/*****14*****/

SELECT user_name, ip_address FROM users
WHERE ip_address LIKE '___.1%.%.___'
ORDER BY user_name;

/*****15*****/

SELECT name AS 'game',
IF(HOUR(start) < 12, 'Morning', IF(HOUR(start) < 18, 'Afternoon', 'Evening')) AS 'Part of the Day',
IF(duration <= 3, 'Extra Short', IF(duration <= 6, 'Short', IF(duration <= 10, 'Long', 'Extra Long'))) AS 'Duration' FROM games;

-- it can be done with CASE - END AS 

/*****16*****/

USE orders;

SELECT `product_name`, `order_date`, 
DATE_ADD(`order_date`, INTERVAL 3 DAY) AS 'pay_due', 
DATE_ADD(`order_date`, INTERVAL 1 MONTH) AS 'deliver_due' 
FROM `orders`;












