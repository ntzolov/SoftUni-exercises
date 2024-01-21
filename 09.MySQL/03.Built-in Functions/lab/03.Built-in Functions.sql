USE book_library;

/*****1*****/

SELECT title FROM books
WHERE SUBSTRING(title,1,4) = 'The '
ORDER BY id;

/*****2*****/

SELECT REPLACE(title, 'The', '***') FROM books
WHERE SUBSTRING(title,1,4) = 'The '
ORDER BY id;

/*****3*****/

SELECT round(sum(cost), 2) FROM books;

/*****4*****/

SELECT 
concat_ws(' ', first_name, last_name) AS 'Full Name', 
DATEDIFF(died, born)
FROM authors;

/*****5*****/

SELECT title FROM books
WHERE substring(title, 1, 13) = 'Harry Potter ';












