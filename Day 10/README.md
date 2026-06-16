# Amazon Agile Testing: BDD User Stories

This repository contains a comprehensive set of Agile user stories and acceptance criteria written in Behavior-Driven Development (BDD) Gherkin syntax, focusing on auditing the Amazon "Save for Later" shopping cart functionality.

## 📌 Project Overview
In modern Agile Scrum teams, requirements are captured from the perspective of the end-user. As a QA professional, defining clear acceptance criteria before development begins ensures strict quality standards, eliminates ambiguity between product owners and developers, and creates an exact blueprint for both manual test cases and automated Cucumber/SpecFlow regression suites.

This module models three distinct core user journeys for managing deferred cart selections.

---

## 🛠️ User Stories & Scope Covered

### 1. Move Item to Save for Later List
*   **User Intent:** Trimming the active shopping cart subtotal without completely removing desired items from a future checkout stream.
*   **Coverage:** 
    *   *Positive Path:* Successful item migration, active cart validation, and automated subtotal recalculation.
    *   *Alternative Path:* Seamless reversal ("Move back to Cart") preserving item integrity.
    *   *Negative Path:* Boundary control for unauthenticated guest sessions attempting state changes.

### 2. Delete Item from Saved for Later List
*   **User Intent:** Permanently removing a tracked item from the saved list cache to maintain absolute data cleanliness.
*   **Coverage:**
    *   *Positive Path:* Direct removal of a standalone item with dynamic background cleanup.
    *   *Alternative Path:* Handling the final remaining item to verify empty list placeholder assets render properly.
    *   *Negative Path:* System failure resolution if a database request is triggered during a session timeout.

### 3. Modify Item Quantity in Saved for Later List
*   **User Intent:** Adjusting intended purchasing thresholds directly inside the saved cache before pushing the items back to an active checkout state.
*   **Coverage:**
    *   *Positive Path:* Increasing counts independently without impacting the primary cart metrics.
    *   *Alternative Path:* Dropping counts down to the absolute lower boundary constraint of 1.
    *   *Negative Path:* Disabling controls dynamically if real-time warehouse inventory falls to zero.

---

## 🚀 Key Takeaways
*   **Shift-Left Approach:** Developed precise requirements alongside functional scenarios to catch potential gaps before any frontend layout assembly begins.
*   **Comprehensive Scenario Architecture:** Mapped explicit positive, alternative, and negative behaviors to build total operational resilience across complex data pipelines.
*   **Automation Blueprint:** The `.feature` layout is completely standardized to plug straight into automated testing frameworks like Cucumber, Playwright, or Cypress.
