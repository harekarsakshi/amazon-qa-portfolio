# 🛒 Amazon QA Audit & 30-Day Test Engineering Portfolio

## 📌 Project Overview
Welcome to my QA Portfolio. This repository documents an intensive, hands-on software testing sprint focused on the end-to-end verification of a high-traffic e-commerce ecosystem based on Amazon.com. 

Rather than focusing on passive theory, this repository documents real-world QA engineering artifacts—spanning full-cycle manual testing, layout diagnostics, Agile BDD styling, API validation using Postman, and backend relational database verification using MySQL.

* **Target Application**: Amazon.com Core Commerce Engine
* **Key Testing Workflows**: Search & Discovery, Shopping Cart, Checkout Risk, and Order Management
* **My Goal**: Complete a structured 30-day applied curriculum to master modern QA methodologies, minimize regression risks, catch edge-case data leakage, and ensure zero-fault transactional behavior.

---

## 📅 Day-by-Day Artifact Timeline

Every day of this intensive track maps to a specific technical milestone in the Software Testing Life Cycle (STLC):

### 📋 Phase 1: QA Foundations & Strategy
* **[Day 1: Visual Regression & Layout Diagnostics](./Day%201)**: Comprehensive audit mapping UI positioning bugs and cross-browser formatting discrepancies.
* **[Day 2: SDLC Mapping](./Day%202)**: Critical strategic breakdowns contrasting Waterfall execution models against Agile-Scrum testing cycles.
* **[Day 3: Amazon Search Bar Test Plan](./Day%203)**: Master test plan specifying scope, environment requirements, risks, and pass/fail criteria for search indexing.
* **[Day 4: Identifying Testing Types](./Day%204)**: Technical mapping of Functional, Non-Functional, Regression, and Security testing vectors on the Amazon login screen.

### 📑 Phase 2: Test Design & Defect Management
* **[Day 5: Test Case Design Patterns](./Day%205)**: Detailed test matrices applying **Equivalence Partitioning (EP)** and **Boundary Value Analysis (BVA)** to cart modifications.
* **[Day 6: Defect Management & Bug Reports](./Day%206)**: High-fidelity, engineering-ready bug logs featuring clear steps-to-reproduce, severity/priority triage levels, and expected vs. actual outcomes.
* **[Day 7: Test Planning & Risks](./Day%207)**: Risk-based manual execution scripts dealing with high-severity purchase workflows.

### 🧭 Phase 3: Advanced Manual & Agile Testing
* **[Day 8: Black Box Testing Techniques](./Day%208)**: Deep-dive applications of boundary analysis for front-end text inputs and forms.
* **[Day 9: Exploratory Testing Sessions](./Day%209)**: Real-time, unscripted time-boxed testing charter logs targeting checkout vulnerability scenarios.
* **[Day 10: BDD User Stories & Gherkin](./Day-10)**: Product requirements translated cleanly into actionable test documentation using **Given-When-Then** syntax for scrum readiness.

### ⚡ Phase 4: API & Database Verification
* **[Day 11: API Discovery & Mapping](./Day-11)**: Mapping backend service structures, request routes, headers, and payload configurations for checkout microservices.
* **[Day 12: Postman Test Suite](./Day-12)**: Automated execution collections validating HTTP status codes (`200 OK`, `201 Created`), structural schema assertions, and response times.
* **[Day 13: SQL Order Audit Scripts](./Day-13)**: **MySQL v5.7** script models verifying calculations (totals, prices, quantity aggregations) and hunting orphaned transactions via custom `LEFT JOIN ... IS NULL` queries.

---

## 💡 Key QA Methodologies Demonstrated
1.  **Shift-Left & Risk-Based Testing**: Analyzing user requirements early to build mitigations and prioritize testing on high-revenue components like payment processing.
2.  **Boundary & Threshold Analysis**: Constructing test strings, quantities (e.g., $0$, $1$, maximum constraints), and financial values to uncover data-handling failures before they hit production.
3.  **Data Integrity Assertion**: Querying backend database state layers instead of relying solely on frontend UI feedback to guarantee zero phantom data transactions.

---

## 🤝 Connect with My Journey
This portfolio forms the core of my practical QA training. Feel free to explore the files or check out my live progression logs:
* **Learning Journal**: [Link your LinkedIn or learning blog here]
