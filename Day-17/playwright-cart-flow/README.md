# Playwright End-to-End Testing: Shopping Cart Flow

## 📌 Project Overview
As part of Day 17 of my QA learning intensive, this project demonstrates end-to-end (E2E) test automation for an e-commerce shopping cart flow using **Playwright**. The goal was to build a stable, multi-browser test suite validating core user actions from authentication through cart modification.

## 🛠️ Tools & Technologies Used
*   **Automation Framework:** Playwright (TypeScript)
*   **Test Runner:** Playwright Test
*   **Test Generation:** Playwright Codegen (for initial flow scaffolding)
*   **Reporting:** Playwright HTML Reporter
*   **Target Application:** SauceDemo

## 🧪 Test Coverage & Scenarios
The automated script executes the following end-to-end user journey:
1.  **Authentication:** Logs into the application using standard user credentials.
2.  **Product Discovery:** Navigates the product catalog page.
3.  **Cart Interaction:** Adds a product to the shopping cart.
4.  **Validation:** Asserts that the shopping cart badge increments correctly to reflect the added item.

## 🌟 Key Learnings & Framework Benefits
*   **Multi-Browser Execution:** Successfully verified the identical test script across **Chromium**, **Firefox**, and **WebKit** using a single configuration command (`npx playwright test`).
*   **Auto-Waiting Capabilities:** Leveraged Playwright's native auto-wait features to eliminate implicit or explicit hardcoded pauses, significantly reducing test flakiness compared to legacy frameworks.
*   **Real-time Code Generation:** Used `npx playwright codegen` to accelerate locator identification and script structuring.

## 📊 Test Execution Report
Below is the verification screenshot confirming that all tests passed successfully across all three targeted browser engines.

![Playwright HTML Report](playwright-report.png)

---
*This lab is part of my centralized automated testing portfolio tracker within the `amazon-qa-portfolio` repository.*<img width="1444" height="768" alt="Screenshot 2026-07-06 144720" src="https://github.com/user-attachments/assets/baaa45d2-d3bc-4062-892e-5255fd1bc9b9" />
