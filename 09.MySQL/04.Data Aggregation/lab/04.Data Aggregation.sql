USE restaurant;

/*****1*****/

SELECT department_id, count(id) AS 'Number of employees' FROM employees
GROUP BY department_id
ORDER BY department_id;

/*****2*****/

SELECT department_id, round(avg(salary), 2) AS 'Number of employees' FROM employees
GROUP BY department_id
ORDER BY department_id;

/*****3*****/

SELECT department_id, min(salary) AS 'Min Salary' FROM employees
GROUP BY department_id
HAVING `Min Salary` > 800;

/*****4*****/

SELECT count(category_id) FROM products
WHERE price > 8 AND category_id = 2;

/*****5*****/

SELECT category_id, 
round(avg(price), 2) AS 'Average Price',
round(min(price), 2) AS 'Cheapest Product',
round(max(price), 2) AS 'Most Expensive Product' FROM products
GROUP BY category_id;















