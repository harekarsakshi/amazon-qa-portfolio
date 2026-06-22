  
 **SCHEMA SETUP (From Left Panel)**

CREATE TABLE users (  
    id INT PRIMARY KEY  
);

CREATE TABLE products (  
    id INT PRIMARY KEY,  
    product\_name VARCHAR(100),  
    price DECIMAL(10,2)  
);

CREATE TABLE orders (  
    id INT PRIMARY KEY,  
    user\_id INT,  
    order\_status VARCHAR(50),  
    refund\_amount DECIMAL(10, 2\)  
);

CREATE TABLE order\_items (  
    order\_id INT,  
    product\_id INT,  
    quantity INT  
);

 **DATA INSERTION & QA QUERIES (From Right Panel)**

\-- 1\. Insert 5 users with different IDs  
INSERT INTO users (id) VALUES   
(1),   
(2),   
(3),   
(4),   
(5),  
(6);

\-- Verify the data was added  
SELECT \* FROM users;

\-- 2\. Insert 10 product names and prices to 10 IDs\!  
INSERT INTO products (id, product\_name, price) VALUES   
(101, 'Apple iPhone 15 Pro', 999.99),   
(102, 'Sony WH-1000XM5 Headphones', 348.00),   
(103, 'Logitech MX Master 3S Mouse', 99.99),   
(104, 'Anker USB-C Charging Cable', 12.99),   
(105, 'Kindle Paperwhite (16 GB)', 149.99),   
(106, 'Samsung 27-Inch 4K Monitor', 299.99),   
(107, 'Apple AirPods Pro (2nd Gen)', 249.00),   
(108, 'Hydro Flask Water Bottle', 44.95),   
(109, 'Razer BlackWidow Keyboard', 139.99),   
(110, 'SanDisk 128GB MicroSD Card', 19.99);

\-- Run a query right below to verify catalog\!  
SELECT \* FROM products;

\-- 3\. Insert Orders with statuses and refunds  
INSERT INTO orders (id, user\_id, order\_status, refund\_amount) VALUES   
(501, 1, 'Completed', 0.00),  
(502, 2, 'Completed', 0.00),  
(503, 1, 'Completed', 0.00),  
(504, 3, 'Completed', 0.00),  
(505, 4, 'Completed', 0.00),  
(506, 5, 'Completed', 0.00),  
(507, 2, 'Cancelled', 150.00),   
(508, 4, 'Completed', 0.00),  
(509, 3, 'Cancelled', 45.00); 

\-- Verify the data was added  
SELECT \* FROM orders;

\-- 4\. Insert corresponding items with mixed quantities into order\_items  
\-- (Linking order\_id to product\_id and specifying quantity)  
INSERT INTO order\_items (order\_id, product\_id, quantity) VALUES   
(501, 101, 1), \-- Order 501: 1 iPhone  
(501, 104, 2), \-- Order 501: 2 Anker Cables  
(502, 102, 1), \-- Order 502: 1 Sony Headphone  
(503, 103, 1), \-- Order 503: 1 Logitech Mouse  
(503, 110, 4), \-- Order 503: 4 SanDisk SD Cards  
(504, 106, 1), \-- Order 504: 1 Samsung Monitor  
(505, 105, 1), \-- Order 505: 1 Kindle  
(505, 108, 3), \-- Order 505: 3 Hydro Flasks  
(506, 107, 2), \-- Order 506: 2 AirPods  
(507, 109, 1), \-- Order 507: 1 Razer Keyboard  
(508, 104, 5); \-- Order 508: 5 Anker Cables

\-- Verify the records were inserted successfully  
SELECT \* FROM order\_items;

\-- Queries used in Real QA work:

\-- 1.All orders by a specific user.   
\-- Find all orders placed by the user with ID 1  
SELECT \*   
FROM orders   
WHERE user\_id \= 1;

\-- 2.Top 3 best-selling products.   
SELECT   
    p.product\_name,   
    SUM(oi.quantity) AS total\_quantity\_sold  
FROM order\_items oi  
JOIN products p ON oi.product\_id \= p.id  
GROUP BY oi.product\_id  
ORDER BY total\_quantity\_sold DESC  
LIMIT 3;

\-- 6\. Cancelled orders with a refund greater than $100  
SELECT id AS order\_id, user\_id, refund\_amount  
FROM orders  
WHERE order\_status \= 'Cancelled'   
  AND refund\_amount \> 100.00;

\-- 3\. Total revenue last 30 days  
SELECT   
    SUM(oi.quantity \* p.price) AS total\_revenue  
FROM order\_items oi  
JOIN products p ON oi.product\_id \= p.id;

\-- 4\.  Orders with no items (data integrity bug check).  
SELECT o.id AS empty\_order\_id, o.user\_id  
FROM orders o  
LEFT JOIN order\_items oi ON o.id \= oi.order\_id  
WHERE oi.order\_id IS NULL;

\-- 5\. Users who never placed an order (Inactive account check)  
SELECT u.id AS inactive\_user\_id  
FROM users u  
LEFT JOIN orders o ON u.id \= o.user\_id  
WHERE o.id IS NULL;

\-- 6\. Cancelled orders with a refund greater than $100  
SELECT id AS order\_id, user\_id, refund\_amount  
FROM orders  
WHERE order\_status \= 'Cancelled'   
  AND refund\_amount \> 100.00;

