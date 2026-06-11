# Day 6
# Amazon Application Testing — Bug Reports

This repository documents the Quality Assurance (QA) audit, test execution, and bug tracking activities performed on the Amazon e-commerce web platform. It serves as a professional portfolio demonstrating structured bug logging, severity assessment, and clear technical communication.

The tracked issues are managed in a Jira Kanban board under the project key **AAT** (Amazon Application Testing).

---

## 📋 Bug Reports Overview

The following detailed bug reports cover distinct testing domains: Functional Logic, UI/Layout, and User Experience (UX) data consistency.

### 1. Functional / Logic Bug
#### 🛑 Mismatched Items Count in Cart Header vs. Sidebar Preview [AAT-1]

* **Component:** Global Navigation Header / Cart Sidebar Panel
* **Severity:** Medium | **Priority:** High
* **Environment:** Desktop (Chrome Browser)

* **Description:** 
  The shopping cart badge count in the global navigation header does not sync accurately with the actual item quantities displayed inside the persistent cart sidebar preview.
* **Steps to Reproduce:**
  1. Log into the application and navigate to the search results page (e.g., search for "toys").
  2. Observe the numerical badge count displayed on the **Cart** icon in the top-right global navigation header.
  3. Click the Cart icon to expand the right-hand persistent shopping cart sidebar.
  4. Manually calculate the total quantity (`Qty`) of all active items listed in the sidebar.
* **Actual Result:** 
  The cart badge in the top header displays a count of **11**, but adding up the specific item quantities inside the sidebar preview panel totals only **7** items (1x Squishy Toys, 2x Play Purses, 1x Dishwashing Gloves, 1x Vitamin C Serum, 1x Diaper Pants, 1x Travel Potty).
* **Expected Result:** 
  The global cart badge count must dynamically update and precisely equal the sum of the quantities (`Qty`) of all active line items present in the cart state.

---

### 2. UI / Layout Bug
#### ⚠️ Sticky Sidebar Overlay Obscures Main Layout Content and Footer Grid [AAT-2]

* **Component:** Right-Hand Cart Subtotal Sidebar / Main Viewport Grid
* **Severity:** Low | **Priority:** Medium
* **Environment:** Desktop (Chrome Browser)

* **Description:** 
  When the right-hand persistent cart sidebar is expanded, it behaves as a rigid, floating overlay that covers the right side of the main container grid rather than adapting the page layout, rendering elements underneath unclickable.
* **Steps to Reproduce:**
  1. Execute a search query (e.g., "toys") to pull up the product search results layout.
  2. Click the cart icon to expand the right-hand cart subtotal sidebar.
  3. Scroll down the main search results page to view additional products and the page footer.
* **Actual Result:** 
  The expanded cart sidebar acts as a fixed layer that cuts off and hides the rightmost column of the product search grid, blocking core visibility and preventing interaction with structural components or page pagination underneath it.
* **Expected Result:** 
  The main product grid container should dynamically scale or adapt from a 4-column to a 3-column layout when the sidebar is toggled open, preventing content overlapping and keeping all search results fully visible.

---

### 3. UX / Data Logic Bug
#### 🔍 Contradictory Delivery Estimate Communication Between Product Grid and Cart Preview [AAT-3]

* **Component:** Product Search Card / Cart Sidebar Preview
* **Severity:** Low | **Priority:** Low
* **Environment:** Desktop (Chrome Browser)

* **Description:** 
  The platform presents conflicting delivery time messages to the user for the exact same item depending on whether they look at the main product search grid or the cart subtotal preview panel.
* **Steps to Reproduce:**
  1. Search for "toys" to load the main results grid.
  2. Expand the right-hand persistent shopping cart sidebar.
  3. Locate an item that is actively inside the cart sidebar and visible in the organic search results below (e.g., *10 Pack Taba Squishy Toys*).
  4. Compare the shipping metadata printed on the product card with the banner messaging in the cart sidebar.
* **Actual Result:** 
  The product card in the main search results explicitly advertises urgent delivery: `"Join Prime to get FREE delivery Today 5 PM - 10 PM"`. However, the cart sidebar at the top right displays a generic message: `"Part of your order qualifies for FREE Shipping. Choose this option at checkout."` completely failing to validate or capture the immediate "Today" timeline.
* **Expected Result:** 
  The cart preview sidebar should pull real-time logistics data for added items and match the fast-shipping promises displayed on the product grid (e.g., displaying an item-level tag or text stating `"Eligible for Today Delivery"`), ensuring consistent UX messaging across the page.

---

## 🚀 Testing Methodology & Tools
* **Manual UI/UX Auditing:** Evaluated layout spacing, visual hierarchies, and responsive grid behaviors.
* **Functional Regression Testing:** Verified state sync across multiple components (Header Badge vs. Cart Drawer data).
* **Defect Tracking:** Documented and prioritized using a standard Jira Kanban workflow (**To Do** ➡️ **In Progress** ➡️ **In Review** ➡️ **Done**).
