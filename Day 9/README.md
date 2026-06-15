# Amazon Exploratory Testing Session: Search Functionality

A structured, session-based exploratory testing audit focusing on edge cases, unexpected user behaviors, and system resilience within the Amazon search engine.

## 📌 Session Overview
*   **Target Feature:** Amazon Main Search Bar & Auto-Suggest Dropdown
*   **Testing Strategy:** Session-Based Test Management (SBTM)
*   **Time-box:** 60 Minutes
*   **Heuristic Applied:** SFDPOT (Structure, Function, Data, Platform, Operations, Time)

---

## 🎯 Test Charter
> **"Explore Amazon's search to discover usability and edge-case issues, focusing on Data (D) and Time/Gestures (T) using the SFDPOT checklist."**

---

## 🔎 Areas Covered & Test Scenarios

### 1. Data Input Anomalies (Data)
Investigated how the search input field handles unconventional, extreme, or potentially disruptive text configurations:
*   **High-Volume Strings:** Pasted a continuous 500+ character block of text to evaluate field limits and overflow rendering.
*   **Non-Alphanumeric Payloads:** Inputted unique emoji strings (`🛑🚀💻`) to verify character encoding processing.
*   **Leading/Trailing Whitespaces:** Entered keywords padded by heavy spacing constraints (`      iphone      `) to confirm query auto-trimming.

### 2. UI Interruptions & Timing (Time/Gestures)
Challenged the interface state transitions and network query lifecycles through rapid user interactions:
*   **Multi-Click Stress:** Executed immediate, rapid double-clicks on the magnifying glass icon mid-submission.
*   **Navigation Disruptions:** Invoked browser navigation actions (Back/Refresh commands) immediately after a search request was dispatched.

---

## 📝 Findings & Observations

*   **Observation 1 (High-Volume Text):** The system handled the 500+ character string gracefully without truncation errors or UI clipping, displaying a clean "No results found" layout.
*   **Observation 2 (Emoji Processing):** Universal emoji searches resolved safely to a standard "No results found" state, confirming solid data handling without breaking layout constraints.
*   **Usability Issue 1 (Leading Spaces):** While the backend accurately trimmed padding spaces to retrieve relevant search results, the auto-suggest UI dropdown experienced a visible positional alignment flicker for a split second before updating.
*   **Usability Issue 2 (Rapid Click Latency):** Triggering multiple rapid clicks on the search button during a loading state caused duplicate network requests, leading to temporary page stuttering. Recommended fix: Implement button debouncing on the client side.

---

## ⏱️ Session Time Distribution
*   **Charter Setup & Scope Definition:** 10 Minutes
*   **Active Boundary Exploration & Bug Hunting:** 40 Minutes
*   **Defect Analysis & Report Documentation:** 10 Minutes

---

## 🚀 Future Explorations
*   **Platform (P):** Re-test these exact data payloads across responsive viewports (iOS Safari and Android Chrome) to check for mobile-specific layout defects.
*   **Operations (O):** Evaluate personal auto-suggest deviations by contrasting active Prime authenticated sessions against unauthenticated guest states.
