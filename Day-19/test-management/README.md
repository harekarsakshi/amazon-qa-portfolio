# Amazon QA — Test Management with TestRail

This project demonstrates my ability to design, structure, and manage a professional QA test suite using **TestRail**. By organizing test cases into logical modules, executing structured test runs, and analyzing execution metrics, I simulated a real-world sprint cycle for a high-traffic e-commerce platform.

---

## 📌 Project Overview

*   **Target Application:** [Amazon.com](https://www.amazon.com)
*   **Tool Used:** TestRail (Cloud Edition)
*   **Project Type:** Test Case Management & Execution Tracking
*   **Goal:** Import, organize, and execute critical test cases covering high-volume transactional flows.

---

## 🛠️ Test Suite Structure

I organized the **Amazon QA** project using a multi-suite repository structure to ensure scalability and easy maintenance:

### 1. Login & Authentication
*   Focuses on secure entry points, session persistence, and error handling.
*   *Key scenarios:* Valid logins, invalid credentials, password recovery, and multi-factor authentication (MFA) entry.

### 2. Shopping Cart
*   Covers the core transactional mechanics of adding, modifying, and removing products.
*   *Key scenarios:* Quantity selectors (boundary values), stock status restrictions, guest cart persistence, and cart merges post-login.

### 3. Checkout Flow
*   Deals with high-risk payment, shipping, and order submission steps.
*   *Key scenarios:* Free shipping rule logic (Decision Table validation), coupon code applications, and address selection.

---

## 🏃‍♂️ Test Execution: Sprint 1 Regression

To simulate an active sprint release, I created and executed a test run named **"Sprint 1 Regression"**. 

*   **Scope:** 10 core regression test cases selected from the imported test suites.
*   **Execution Strategy:** Manual execution step-by-step.
*   **Status Tracking:** Marked cases as **Passed**, **Failed**, or **Blocked** based on real-world system behavior and edge-case assumptions.

### Execution Results & Dashboard

Below is the metrics dashboard generated from the **Sprint 1 Regression** run, showcasing overall coverage and the execution status distribution:

![TestRail Dashboard](testrail-amazon-dashboard.png)

*(Note: If the image above does not render, ensure your screenshot is saved exactly as `testrail-amazon-dashboard.png` in the same directory as this README.)*

---

## 🧠 Key Takeaways & Skills Demonstrated

*   **Structured Test Design:** Effectively mapped abstract test scenarios from local Excel sheets into structured TestRail sections.
*   **Test Run Execution:** Managed the lifecycle of a test run from initiation to completion, ensuring accurate status updates (Pass/Fail/Blocked) for auditability.
*   **Stakeholder Reporting:** Leveraged TestRail's built-in reporting widgets to interpret test progress, pass rates, and coverage metrics—skills vital for communicating quality readiness to product owners.
