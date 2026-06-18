# API Discovery & Analysis Portfolio: Amazon Core Features

Welcome to my API Discovery portfolio project! As part of my QA engineering journey, this project focuses on dissecting, documenting, and analyzing back-end network traffic for core e-commerce functionalities on Amazon. 

By leveraging **Chrome DevTools**, I intercepted and evaluated asynchronous network traffic to map the correlation between frontend user actions and backend API responses, establishing robust test conditions for future automation.

---

## 📌 Project Overview
This repository contains a comprehensive deep-dive into three critical e-commerce transaction workflows:
1. **Add to Cart Feature** (State Creation/POST)
2. **Product Search Feature** (Data Retrieval/GET with query parameters)
3. **Change Quantity Feature** (State Modification/POST-PUT behavior)

The goal of this project is to demonstrate an understanding of the **Software Testing Life Cycle (STLC)** at the API layer, shifting testing left by inspecting payload structural integrity and boundary conditions before UI execution.

---

## 🛠️ Core Features Documented

### 1. Amazon Cart Feature (`POST`)
* **Endpoint Objective:** Asynchronously submits product identifiers to persist items in a user's session cart.
* **Key Interceptions:** Analyzed critical structured payload pairs (`asin` and `quantity`).
* **QA Validation Focus:** Verified asynchronous UI badge updates mapping against server-side dynamic cart counts (`INCART` states) without triggering full page reloads.

### 2. Amazon Search Feature (`GET`)
* **Endpoint Objective:** Queries product catalogs based on dynamic alphanumeric client inputs.
* **Key Interceptions:** Evaluated complex URL-encoded string parameters (`k=`, `ref=`, `qid=`).
* **QA Validation Focus:** Documented search indexing behaviors, tracking performance metrics across severe data pagination splits, and verifying search keyword string encoding standards.

### 3. Change Quantity Feature (`POST`)
* **Endpoint Objective:** Modifies transaction volumes for predefined cart line items.
* **Key Interceptions:** Captured state arrays (`cartItemId`, `asin`, `newQuantity`, `currentQuantity`).
* **QA Validation Focus:** Tested back-end subtotal multiplication calculations against runtime currency strings and validated response integrity for inventory stock restrictions.

---

## 🚀 Key QA Test Scenarios Identfied
Beyond capturing successful transactions (`HTTP 200 OK`), this documentation outlines key boundaries designed for future automated test scripts:

* **Boundary & Type Validation:** Sending negative quantities (`-1`), floating points (`1.5`), or string characters to item counters to ensure backend validation returns proper `400 Bad Request` or error messaging blocks.
* **Idempotency & State Tests:** Validating how the backend handles rapid, duplicate item additions under sluggish network thresholds.
* **Object Mapping:** Verifying frontend UI data objects align exactly with unique database keys (`asin`, `cartItemId`) rather than fragile UI text arrays.

---

## 📂 Tech Stack & Methodologies
* **Traffic Sniffing & Interception:** Chrome Developer Tools (Network Tab)
* **Payload Format:** JSON (JavaScript Object Notation)
* **API Testing Standards:** REST Architecture validation, HTTP status verification, Response body assertion structure mapping.
