USE gringotts;

/*****1*****/

SELECT count(*) AS 'count' FROM wizzard_deposits;

/*****2*****/

SELECT max(magic_wand_size) AS 'longest_magic_wand' FROM wizzard_deposits;

/*****3*****/

SELECT deposit_group, max(magic_wand_size) AS longest_magic_wand FROM wizzard_deposits
GROUP BY deposit_group
ORDER BY `longest_magic_wand`, deposit_group;

/*****4*****/

SELECT deposit_group FROM wizzard_deposits
GROUP BY deposit_group
ORDER BY avg(magic_wand_size)
LIMIT 1;
 
/*****5*****/

SELECT deposit_group, sum(deposit_amount) AS total_sum FROM wizzard_deposits
GROUP BY deposit_group
ORDER BY `total_sum`;

/*****6*****/

SELECT deposit_group, sum(deposit_amount) AS total_sum FROM wizzard_deposits
WHERE magic_wand_creator = 'Ollivander family'
GROUP BY deposit_group
ORDER BY deposit_group;

/*****7*****/

SELECT deposit_group, sum(deposit_amount) AS total_sum FROM wizzard_deposits
WHERE magic_wand_creator = 'Ollivander family'
GROUP BY deposit_group
HAVING `total_sum` < 150000
ORDER BY `total_sum` DESC;

/*****8*****/

SELECT deposit_group, magic_wand_creator, min(deposit_charge) AS min_deposit_charge FROM wizzard_deposits
GROUP BY deposit_group, magic_wand_creator
ORDER BY magic_wand_creator, deposit_group;

/*****9*****/

SELECT CASE
	WHEN age BETWEEN 0 AND 10 THEN '[0-10]'
	WHEN age BETWEEN 11 AND 20 THEN '[11-20]'
	WHEN age BETWEEN 21 AND 30 THEN '[21-30]'
	WHEN age BETWEEN 31 AND 40 THEN '[31-40]'
	WHEN age BETWEEN 41 AND 50 THEN '[41-50]'
	WHEN age BETWEEN 51 AND 60 THEN '[51-60]'
	WHEN age >= 61 THEN '[61+]'
	END AS age_group,
count(*) AS wizard_count FROM wizzard_deposits
GROUP BY `age_group`
ORDER BY `age_group`;

/*****10*****/

SELECT LEFT(first_name, 1) AS first_letter FROM wizzard_deposits
WHERE deposit_group = 'Troll Chest'
GROUP BY first_letter
ORDER BY first_letter;

/*****11*****/

SELECT deposit_group, is_deposit_expired, avg(deposit_interest) AS average_interest FROM wizzard_deposits
WHERE deposit_start_date > '1985-01-01'
GROUP BY deposit_group, is_deposit_expired
ORDER BY deposit_group DESC, is_deposit_expired;


/*****12*****/

USE soft_uni;

SELECT department_id, min(salary) AS minimum_salary FROM employees
WHERE hire_date > '2000-01-01'
GROUP BY department_id
HAVING department_id IN (2,5,7);

/*****13*****/

CREATE TABLE test AS 
SELECT * FROM employees
WHERE salary > 30000;

DELETE FROM test
WHERE manager_id = 42;

UPDATE test
SET salary = salary + 5000
WHERE department_id = 1;

SELECT department_id, avg(salary) AS avg_salary FROM test
GROUP BY department_id
ORDER BY department_id;

/*****14*****/

SELECT department_id, max(salary) AS max_salary FROM employees
GROUP BY department_id
HAVING `max_salary` NOT BETWEEN 30000 AND 70000
ORDER BY department_id;

/*****15*****/

SELECT count(*) FROM employees
WHERE manager_id IS NULL;

/*****16*****/

SELECT department_id, 
	(SELECT DISTINCT salary FROM employees
	WHERE outter.department_id = department_id
	ORDER BY salary DESC
	LIMIT 2, 1) AS third_highest_salary
FROM employees outter
GROUP BY department_id
HAVING `third_highest_salary` IS NOT NULL
ORDER BY department_id;

/*****17*****/

SELECT first_name, last_name, department_id FROM employees outter
WHERE salary > (
SELECT avg(salary) FROM employees
WHERE department_id = outter.department_id
)
ORDER BY department_id, employee_id
LIMIT 10

/*****18*****/

SELECT department_id, sum(salary) AS total_salary FROM employees
GROUP BY department_id
ORDER BY department_id;










