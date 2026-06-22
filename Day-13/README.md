# Amazon Order Database QA Audit 

## 📌 Project Overview
This project forms part of my **30-Day QA Learning Journey**, focusing on database verification and data integrity testing for an Amazon-style e-commerce ecosystem. 

As a QA Engineer, testing purely at the user interface (UI) layer is not enough. If data is corrupted, rounded incorrectly, or orphaned in the backend, critical business metrics break. This audit establishes a robust relational schema utilizing **MySQL v5.7**, injects realistic transaction data, and executes targeted analytical and data-integrity scripts to ensure backend logic precisely mirrors frontend reporting.

---

## 🛠️ Database Schema Design
The database consists of 4 highly interrelated tables capturing core e-commerce workflows:

*   **`users`**: Registers application accounts.
*   **`products`**: Acts as the centralized inventory and pricing catalog.
*   **`orders`**: Captures operational transaction headers, including delivery status and financials.
*   **`order_items`**: The transactional line-item ledger mapping specific products and quantities to an order header.

### Entity Relationship Model (Simplified DDL)
```sql
CREATE TABLE users (
    id INT PRIMARY KEY
);

CREATE TABLE products (
    id INT PRIMARY KEY,
    product_name VARCHAR(100),
    price DECIMAL(10, 2)
);

CREATE TABLE orders (
    id INT PRIMARY KEY,
    user_id INT,
    order_status VARCHAR(50),
    refund_amount DECIMAL(10, 2)
);

CREATE TABLE order_items (
    order_id INT,
    product_id INT,
    quantity INT
);
```
## 🧪 QA Query Matrix & Verification Scripts
Below are the core production-mimicking queries utilized to perform automated backend assertions against our test dataset.

1. Account Transaction Isolation
Objective: Verify that the system can cleanly isolate and retrieve order history records for a single targeted consumer profile without data bleeding.
```sql
SELECT * 
FROM orders 
WHERE user_id = 1;
```
2. Top 3 Best-Selling Products (Inventory Analytics)
Objective: Aggregate line-item transaction volumes to identify top-performing catalog entries.

QA Best Practice: Grouping is performed explicitly by oi.product_id (Primary Key) rather than string text p.product_name to prevent data collision defects if separate stock items share an identical naming convention.
```sql
SELECT 
    p.product_name, 
    SUM(oi.quantity) AS total_quantity_sold
FROM order_items oi
JOIN products p ON oi.product_id = p.id
GROUP BY oi.product_id
ORDER BY total_quantity_sold DESC
LIMIT 3;
```
3. Total Store Revenue (30-Day Financial Verification)
Objective: Perform an algebraic summation of calculated item totals (quantity × unit price) to cross-validate against reporting dashboard metrics.
```sql
SELECT 
    SUM(oi.quantity * p.price) AS total_revenue
FROM order_items oi
JOIN products p ON oi.product_id = p.id;
```
4. Orphaned Record Audit (Critical Data Integrity Check)
Objective: Scan for broken backend transactions where an order record header was created but failed to bind any actual product line items (representing an empty cart checkout defect).
```sql
SELECT o.id AS empty_order_id, o.user_id
FROM orders o
LEFT JOIN order_items oi ON o.id = oi.order_id
WHERE oi.order_id IS NULL;
```
5. Inactive Account / Segmentation Validation
Objective: Identify registered accounts with a zero-order purchase status to validate audience filtering logic for promotional automation.
```sql
SELECT u.id AS inactive_user_id
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE o.id IS NULL;
```
6. High-Value Status Specific Exceptions
Objective: Isolate operational failure loops—specifically targeting accounts with an active 'Cancelled' disposition containing a financial refund threshold exceeding $100.00.
```sql
SELECT id AS order_id, user_id, refund_amount
FROM orders
WHERE order_status = 'Cancelled' 
  AND refund_amount > 100.00;
```
## 💡 Boundary & Edge-Case Testing Methodology
An empty query result tab does not structurally guarantee a query is working; it might simply mean the database lacks representative fields. To validate my filtering assertions, I manually structured and injected intentional boundary data:

1.Negative Filtering Test (Query 5): Injected User 6 with zero purchasing history into the users seed block, confirming that the LEFT JOIN ... IS NULL query isolated them correctly.

2.Boundary Threshold Test (Query 6): Injected two distinct cancelled transactions:

--Order 507: Cancelled with a refund of $150.00 (Should be caught by filter)

--Order 509: Cancelled with a refund of $45.00 (Should be filtered out)

This approach successfully proved that my conditional script accurately isolates specific business constraints while excluding false positives.

## 🚀 How to Execute
Copy the contents of sql/amazon-orders-queries.sql.

Navigate to DB Fiddle and configure the environment engine to MySQL v5.7.

Paste the entire script block into the main executable pane and click Run.

