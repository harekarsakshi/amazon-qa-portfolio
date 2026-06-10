# Day 3 
# Amazon Search Bar Test Plan (STLC Framework)

This repository documents a structured approach to analyzing and planning tests for the **Amazon Search Bar**, following the **Software Testing Life Cycle (STLC)** methodology.

---

## 📋 STLC Phases & Deliverables

### Phase 1: Requirement Analysis
*   **Goal:** Identify ambiguities in the Amazon search input feature.
*   **Key Action:** Formulated 5 target questions for the Product Owner regarding max character limits, long title text wrapping, rich media (image) pasting, zero-match behaviors, and pagination thresholds.

### Phase 2: Test Planning
*   **In-Scope:** Search bar input field functionality, text length boundaries, and clipboard copy/paste validation.
*   **Out-of-Scope:** The core search results display page, individual product cards, search filtering panels, and category sorting logic.
*   **Identified Risk:** Potential browser freezes or unhandled 500 server errors if rich media clipboard data (like an image) is pasted directly into a text-only input field.

### Phase 3: Test Case Design
*   **TC_Search_001:** Validate maximum character length boundaries for the search input.
*   **TC_Search_002:** Validate system behavior and error handling when rich media (images) are pasted into the search bar.
*   **TC_Search_003:** Validate input validation constraints for special characters and emojis.

### Phase 4: Environment Setup
*   **Desktop Matrix:** Windows 11 & macOS cross-browser testing on Google Chrome, Safari, and Microsoft Edge.
*   **Mobile Matrix:** Responsive UI validation across the iOS ecosystem (iPhone/iPad) and Android Mobile devices.

### Phase 5: Test Execution
*   **Timeline:** 06/06/2026 – 06/30/2026
*   **Entry Criteria:** Stable build deployed to the QA staging environment, PO requirements signed off, and an initial sanity/smoke test passed.

### Phase 6: Test Closure
*   **Deliverables:** Final execution summary (Pass/Fail metrics), defect tracking categorized by severity, and product deployment sign-off recommendation.
