# Cypress Automation: Amazon-Style Cart Flow

This repository contains automated end-to-end (E2E) regression tests for an e-commerce checkout flow. The tests are built using **Cypress** and follow industry-standard assertions to validate core cart functionality, ensuring a reliable transactional experience.

*Note: Since live e-commerce platforms like Amazon employ strict bot-detection mechanisms, these tests are executed against a dedicated, production-ready practice environment ([Sauce Demo](https://www.saucedemo.com/)).*

---

## 🎯 Test Objectives
The goal of this automation suite is to verify the critical path of adding and managing items within a shopping cart:
1. **Authentication:** Secure login using valid credentials.
2. **Cart Core Functionality:** Adding a target item ('Sauce Labs Backpack') to the cart and asserting that the global cart badge updates accurately.
3. **State Persistence & Cleanup:** Removing the item from the cart and confirming the badge dynamically updates or disappears.

---

## 🛠️ Tech Stack & Tools
* **Framework:** Cypress (E2E Testing Framework)
* **Runtime Environment:** Node.js
* **Test Runner:** Cypress GUI & Headless CLI
* **Language:** JavaScript

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation
1. Clone this repository to your local machine.
2. Initialize the project and install Cypress:
   ```bash
   npm init -y
   npm install cypress --save-dev
   ```
### Running the Tests
Via Cypress Test Runner (GUI):
To open the interactive browser runner and watch the execution live:
```bash
npx cypress open
```
Via Command Line (Headless Mode):
To execute the test suite in the background and generate test artifacts:
```bash
npx cypress run --spec "cypress/e2e/amazon_style_cart.cy.js"
```

---

## 📹 Video Walkthrough
A recording of the automated execution path demonstrating the full add-to-cart and removal workflow is attached.

---

### 📂 Project Structure
```bash
amazon-qa-portfolio/
└── cypress/
    ├── e2e/
    │   └── amazon_style_cart.cy.js   # Main E2E test script
    └── videos/                       # Auto-generated execution recordings
```
