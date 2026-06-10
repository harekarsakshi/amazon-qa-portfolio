# Day 5
# Test Case Design & Execution (Amazon Application)

Welcome to Day 5 of the QA Engineering Sprint! Today’s focus is on designing, categorizing, and organizing comprehensive test cases for core functionalities of the **Amazon** application (such as Product Search, Add to Cart, and User Authentication).

To ensure high test coverage, the test cases have been meticulously separated into three distinct scenarios across different files.

---

## 📂 Repository Structure

This directory contains the following test artifact files:

| File Name | Test Type | Description |
| :--- | :--- | :--- |
| **[Positive Test Cases.xlsx](./Positive%20Test%20Cases.xlsx)** | Functional / Happy Path | Validates that the system behaves exactly as expected when valid data is provided under normal conditions. |
| **[Negative Test Cases.xlsx](./Negative%20Test%20Cases.xlsx)** | Validation / Error Handling | Ensures the application gracefully handles invalid inputs, unauthorized actions, and displays appropriate error messages without crashing. |
| **[Edge Test Cases.xlsx](./Edge%20Test%20Case.xlsx)** | Boundary / Extreme Conditions | Tests the behavior of the application at the absolute limits of its operating capacity (e.g., maximum character limits, empty states, or extreme quantities). |

---

## 🎯 Test Scenarios Covered

### 1. Positive Test Cases (`Happy Path`)
* **User Login:** Successful authentication using valid email and password credentials.
* **Product Search:** Searching for exact keywords (e.g., "iPhone 15") and ensuring relevant results appear.
* **Pincode Delivery:** Verify serviceability check accepts a valid delivery pincode and provides delivery estimates.
* **Shopping Cart:** Adding a single valid item to the cart and verifying the cart count updates immediately to `1`.
* **Checkout with Valid Credit Card:**Verify that a user can successfully complete a purchase using a valid credit card.

### 2. Negative Test Cases (`Error Handling`)
* **Invalid Authentication:** Attempting to log in with an unregistered email or an incorrect password to verify that the standard security warning triggers.
* **Empty Search:** Clicking the search button with an empty input field to check if the page prevents empty queries or prompts the user.
* **Add to Cart - Unauthenticated User:**Verify that an unauthenticated (logged-out) user is prompted to sign in or transition gracefully when attempting to add an item to the cart.

### 3. Edge Test Cases (`Boundary Values`)
* **Promotional Checkouts:** Verify that applying a 100% discount promo code to a promotional item allows checkout completion without requiring payment details.
* **Cart Quantity Validation (Maximum Stock Cap):** This test validates the system's boundary handling when a user manually inputs a massive quantity (99999) in the cart edit box. It ensures the system gracefully handles the input by resetting it to the seller's maximum limit or available stock instead of breaking the checkout flow or causing an error.


---

## 🛠️ Tools & Attributes Used

* **Tool:** Microsoft Excel (`.xlsx`)
* **Standard Test Case Components Included:**
  * `Test Case ID` (e.g., TC_AMZ_POS_001)
  * `Test Description` & `Pre-conditions`
  * `Test Steps` & `Test Data`
  * `Expected Result` vs `Actual Result`
  * `Status` (Pass/Fail/Blocked)
  * `Priority` 
