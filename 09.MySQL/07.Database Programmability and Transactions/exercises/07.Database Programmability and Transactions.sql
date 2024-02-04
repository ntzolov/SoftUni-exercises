USE soft_uni;

/*****1*****/

DELIMITER $

CREATE PROCEDURE usp_get_employees_salary_above_35000()
BEGIN
	SELECT first_name, last_name FROM employees
	WHERE salary > 35000
	ORDER BY first_name, last_name, employee_id;
END

DELIMITER ;

CALL usp_get_employees_salary_above_35000();

/*****2*****/

DELIMITER $

CREATE PROCEDURE usp_get_employees_salary_above(salary_param DECIMAL(10, 4))
BEGIN
	SELECT first_name, last_name FROM employees
	WHERE salary >= salary_param
	ORDER BY first_name, last_name, employee_id;
END $

DELIMITER ;

CALL usp_get_employees_salary_above(45000);

/*****3*****/

DELIMITER $

CREATE PROCEDURE usp_get_towns_starting_with(string VARCHAR(255))
BEGIN
	SELECT name FROM towns
	WHERE left(name, char_length(string)) = string
	ORDER BY name;
END $

DELIMITER ;

CALL usp_get_towns_starting_with('s')

/*****4*****/

DELIMITER $

CREATE PROCEDURE usp_get_employees_from_town(town_name VARCHAR(255))
BEGIN
	SELECT e.first_name, e.last_name FROM employees e
	JOIN addresses a ON a.address_id = e.address_id
	JOIN towns t ON t.town_id = a.town_id
	WHERE t.name = town_name
	ORDER BY e.first_name, e.last_name, e.employee_id;
END $

DELIMITER ;

CALL usp_get_employees_from_town('Sofia');

/*****5*****/

DELIMITER $

CREATE FUNCTION ufn_get_salary_level(salary_param DECIMAL(10, 2)) RETURNS VARCHAR(255)
DETERMINISTIC
BEGIN
	RETURN(SELECT 
		CASE 
		WHEN salary_param < 30000 THEN 'Low'
		WHEN salary_param <= 50000 THEN 'Average'
		WHEN salary_param > 50000 THEN 'High'
		END);
END $

DELIMITER ;

SELECT salary, ufn_get_salary_level(15000) AS salary_Level FROM employees;

/*****6*****/

DELIMITER $

CREATE PROCEDURE usp_get_employees_by_salary_level(salary_level TEXT)
BEGIN
	SELECT first_name, last_name FROM employees
	WHERE ufn_get_salary_level(salary) = salary_level
	ORDER BY first_name DESC, last_name DESC;
END $

DELIMITER ;

CALL usp_get_employees_by_salary_level('High');

/*****7*****/

DELIMITER $

CREATE FUNCTION ufn_is_word_comprised(set_of_letters varchar(50), word varchar(50)) RETURNS TINYINT
DETERMINISTIC
BEGIN
	RETURN word REGEXP concat('^[', set_of_letters, ']+$');
END $

DELIMITER ;

SELECT ufn_is_word_comprised('abvgde', 'deva');

/*****8*****/

DELIMITER $

CREATE PROCEDURE usp_get_holders_full_name()
BEGIN
	SELECT concat_ws(' ', first_name, last_name) AS full_name FROM account_holders
	ORDER BY full_name, id;
END $

DELIMITER ;

CALL usp_get_holders_full_name();

/*****9*****/

DELIMITER $

CREATE PROCEDURE usp_get_holders_with_balance_higher_than(number INT)
BEGIN
	SELECT ah.first_name, ah.last_name FROM accounts a
	JOIN account_holders ah ON a.account_holder_id = ah.id
	WHERE number < (
	SELECT sum(balance) FROM accounts
	WHERE account_holder_id = ah.id
	GROUP BY account_holder_id
	)
	GROUP BY ah.id
	ORDER BY a.account_holder_id;
END $

DELIMITER ;

CALL usp_get_holders_with_balance_higher_than(7000);

/*****10*****/

DELIMITER $

CREATE FUNCTION ufn_calculate_future_value(initial DECIMAL(19, 4), interest_rate DOUBLE, years INT) RETURNS DECIMAL(19, 4)
DETERMINISTIC	
BEGIN
	RETURN (initial  * pow(1 + interest_rate, years));
END $

DELIMITER ;

/*****11*****/

DELIMITER $

CREATE PROCEDURE usp_calculate_future_value_for_account(id INT, interest_rate DECIMAL(19, 4))
BEGIN
	SELECT a.id AS account_id, ah.first_name, ah.last_name, a.balance AS current_balance,
	ufn_calculate_future_value(a.balance, interest_rate, 5) AS balance_in_5_years
  FROM accounts a
	JOIN account_holders ah ON ah.id = a.account_holder_id
	WHERE a.id = id;
END $

DELIMITER ;

CALL usp_calculate_future_value_for_account(1, 0.1);

/*****12*****/

DELIMITER $

CREATE PROCEDURE usp_deposit_money(account_id INT, money_amount DECIMAL(19,4))
BEGIN
	START TRANSACTION;

		IF money_amount <= 0 THEN ROLLBACK;
		ELSE
			UPDATE accounts SET balance = balance + money_amount
			WHERE id = account_id;
		END IF;
	COMMIT;

END$$

DELIMITER ;

/*****13*****/

DELIMITER $

CREATE PROCEDURE usp_withdraw_money(account_id INT, money_amount DECIMAL(19,4))
BEGIN
	START TRANSACTION;
		IF (money_amount <= 0 OR (SELECT balance FROM accounts WHERE id = account_id) < money_amount) THEN ROLLBACK;
		ELSE
			UPDATE accounts SET balance = balance - money_amount WHERE id = account_id;
		END IF;
	COMMIT;
END $

DELIMITER ;

/*****14*****/

DELIMITER $

CREATE PROCEDURE usp_transfer_money(from_account_id INT, to_account_id INT, amount DECIMAL(19, 4))
BEGIN
	START TRANSACTION;
	IF ((SELECT count(*) FROM accounts WHERE id = from_account_id) <> 1) OR 
	   ((SELECT count(*) FROM accounts WHERE id = to_account_id) <> 1) OR
		 from_account_id = to_account_id OR 
		 ((SELECT balance FROM accounts WHERE id = from_account_id) < amount) OR
		 amount < 0 THEN 
		 ROLLBACK;
	ELSE 
		UPDATE accounts SET balance = balance - amount WHERE id = from_account_id;
		UPDATE accounts SET balance = balance + amount WHERE id = to_account_id;
	END IF;
	COMMIT;
END $

DELIMITER ;

/*****15*****/

CREATE TABLE logs(
log_id INT PRIMARY KEY AUTO_INCREMENT, 
account_id INT NOT NULL, 
old_sum DECIMAL(19, 4), 
new_sum DECIMAL (19, 4)
);

DELIMITER $$

CREATE TRIGGER tr_update_balance
AFTER UPDATE
ON accounts
FOR EACH ROW 
BEGIN 
	
	INSERT INTO logs(account_id, old_sum, new_sum)
	VALUES (OLD.id, OLD.balance, NEW.balance);
END$$

/*****16*****/

CREATE TABLE notification_emails(
id INT PRIMARY KEY AUTO_INCREMENT, 
recipient INT NOT NULL, 
subject VARCHAR(2000), 
body TEXT
);

CREATE TRIGGER tr_new_record_to_email
AFTER INSERT
ON logs
FOR EACH ROW
BEGIN
	INSERT INTO notification_emails(
		recipient,
		subject,
		body)
	VALUES (
		NEW.account_id,
		CONCAT('Balance change for account: ', NEW.account_id),
		CONCAT('On ', NOW(), ' your balance was changed from ', NEW.old_sum, ' to ', NEW.new_sum, '.')
	);
END$$












