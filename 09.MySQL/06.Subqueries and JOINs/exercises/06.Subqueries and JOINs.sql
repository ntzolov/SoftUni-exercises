/*****1*****/

USE soft_uni;

SELECT e.employee_id, e.job_title, e.address_id, a.address_text FROM employees AS e
JOIN addresses AS a ON a.address_id = e.address_id
ORDER BY address_id
LIMIT 5;

/*****2*****/

SELECT e.first_name, e.last_name,
t.name AS town,
a.address_text
FROM employees AS e
JOIN addresses AS a ON a.address_id = e.address_id
JOIN towns AS t ON a.town_id = t.town_id
ORDER BY e.first_name, e.last_name
LIMIT 5;

/*****3*****/

SELECT e.employee_id, e.first_name, e.last_name, d.name AS department_name FROM employees AS e
JOIN departments AS d ON d.department_id = e.department_id
WHERE d.name = 'Sales'
ORDER BY e.employee_id DESC;

/*****4*****/

SELECT e.employee_id, e.first_name, e.salary, d.name AS department_name FROM employees AS e
JOIN departments AS d ON d.department_id = e.department_id
WHERE e.salary > 15000
ORDER BY d.department_id DESC
LIMIT 5;

/*****5*****/

SELECT e.employee_id, e.first_name FROM employees AS e
WHERE e.employee_id NOT IN (
	SELECT employee_id FROM employees_projects
)
ORDER BY employee_id DESC
LIMIT 3;

/*****6*****/

SELECT e.first_name, e.last_name, e.hire_date, d.name AS dept_name FROM employees AS e 
JOIN departments AS d ON e.department_id = d.department_id
WHERE e.hire_date > '1999-01-01' AND
d.name IN ('Sales', 'Finance')
ORDER BY e.hire_date;

/*****7*****/

SELECT e.employee_id, e.first_name, p.name AS project_name FROM employees AS e
JOIN employees_projects AS ep ON ep.employee_id = e.employee_id
JOIN projects AS p ON p.project_id = ep.project_id
WHERE DATE (p.start_date) > '2002-08-13' AND
p.end_date IS NULL
ORDER BY first_name, `project_name`
LIMIT 5;

/*****8*****/

SELECT e.employee_id, e.first_name, 
	CASE 
		WHEN YEAR(p.start_date) >= 2005 THEN NULL ELSE p.name
	END AS project_name 
FROM employees AS e 
JOIN employees_projects AS ep ON ep.employee_id = e.employee_id
JOIN projects AS p ON p.project_id = ep.project_id
WHERE e.employee_id = 24
ORDER BY p.name;

/*****9*****/

SELECT e.employee_id, e.first_name, e.manager_id, e2.first_name AS manager_name FROM employees AS e 
JOIN employees AS e2 ON e.manager_id = e2.employee_id
WHERE e.manager_id IN (3, 7)
ORDER BY e.first_name;

/*****10*****/

SELECT e.employee_id,
concat_ws(' ', e.first_name, e.last_name) AS employee_name,
concat_ws(' ', e2.first_name, e2.last_name) AS manager_name,
d.name AS department_name
FROM employees AS e
JOIN employees AS e2 ON e.manager_id = e2.employee_id
JOIN departments AS d ON e.department_id = d.department_id
ORDER BY e.employee_id
LIMIT 5;

/*****11*****/

SELECT avg(salary) AS min_average_salary FROM employees AS e 
GROUP BY e.department_id
ORDER BY `min_average_salary`
LIMIT 1;

/*****12*****/

USE geography;

SELECT mc.country_code, m.mountain_range, p.peak_name, p.elevation FROM mountains_countries AS mc
JOIN mountains AS m ON mc.mountain_id = m.id
JOIN peaks AS p ON p.mountain_id = mc.mountain_id
WHERE mc.country_code = 'BG' AND
p.elevation > 2835
ORDER BY p.elevation DESC;

/*****13*****/

SELECT mc.country_code, count(m.mountain_range) AS mountain_range FROM mountains_countries AS mc
JOIN mountains AS m ON mc.mountain_id = m.id
GROUP BY mc.country_code
HAVING mc.country_code IN ('BG', 'US', 'RU')
ORDER BY mountain_range DESC;

/*****14*****/

SELECT c.country_name, r.river_name FROM countries AS c
LEFT JOIN countries_rivers AS cr ON c.country_code = cr.country_code
LEFT JOIN rivers AS r ON r.id = cr.river_id
WHERE c.continent_code = 'AF'
ORDER BY c.country_name
LIMIT 5;

/*****15*****/

SELECT c.continent_code, c.currency_code, count(*) AS currency_usage FROM countries AS c
GROUP BY c.continent_code, c.currency_code
HAVING `currency_usage` > 1 AND `currency_usage` = (
	SELECT COUNT(*) AS 'most_used_curr' FROM countries AS c2
	WHERE c2.continent_code = c.continent_code
	GROUP BY c2.currency_code
	ORDER BY `most_used_curr` DESC
	LIMIT 1
    )
ORDER BY
    c.continent_code,
    c.currency_code;

/*****16*****/

SELECT count(*) AS country_count FROM countries AS c
WHERE c.country_code NOT IN (
	SELECT country_code FROM mountains_countries
);

/*****17*****/

SELECT c.country_name,
max(p.elevation) AS highest_peak_elevation,
max(r.`length`) AS longest_river_length
FROM countries AS c
LEFT JOIN mountains_countries AS mc ON c.country_code = mc.country_code
LEFT JOIN peaks AS p ON p.mountain_id = mc.mountain_id
LEFT JOIN countries_rivers AS cr ON cr.country_code = c.country_code
LEFT JOIN rivers AS r ON r.id = cr.river_id
GROUP BY c.country_name
ORDER BY `highest_peak_elevation` DESC, `longest_river_length` DESC, c.country_name
LIMIT 5;







