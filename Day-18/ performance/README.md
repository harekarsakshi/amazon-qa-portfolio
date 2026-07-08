# Day 19: Performance Testing with k6

## Project Overview
This repository contains the performance and load testing suite for an Amazon-style product discovery flow. The objective of this hands-on lab is to establish baseline performance metrics, conduct stress testing to find the system's breaking point, and implement automated performance threshold validations using k6.

## Test Configuration
* **Testing Tool:** k6 (JavaScript-based modern load testing framework)
* **Target Endpoint:** `https://fakestoreapi.com/products` (Simulating Amazon Product Listings API)
* **Baseline Run (Step 3):** 50 Virtual Users (VUs) for 30 seconds
* **Stress Run (Step 4):** 200 Virtual Users (VUs) for 30 seconds

---

## Performance Metrics Matrix

| Test Run Scenario | Virtual Users (VUs) | Response Time (p95) | Throughput (RPS) | Error Rate (`http_req_failed`) | Status |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Baseline Load Test** | 50 VUs | 245.55ms | 42/s | 0.00% | **PASS** |
| **Stress Test (Breaking Point)** | 200 VUs | 342.59ms | 163.9/s | 0.00% | **PASS** |

---

## Technical Observations & QA Insights

### 1. Step 5 Threshold Verification
* **Rule Applied:** `http_req_duration: ['p(95)<500']` (95% of all requests must complete in under 500ms).
* **Result:** During the baseline 50 VU run, the API maintained a healthy $p(95)$ response time well within the acceptable threshold limit, logging a successful verification.

### 2. Identifying the System Breaking Point (Step 4 Analysis)
* **High Concurrency Resilience:** When scaling the load from 50 VUs to 200 VUs, the system did not hit a breaking point. Throughput successfully scaled up from 42/s to 163.9/s, demonstrating strong concurrency handling.
* **Stable Latency:** Despite a 4x increase in concurrent virtual traffic, the 95th percentile response time only rose slightly from 245.55ms to 342.59ms, remaining well below our 500ms performance threshold.
* **Zero Error Performance:** The server maintained absolute stability with a **0.00% error rate**, proving that the target API can comfortably sustain a 200 VU load without dropping requests or suffering from gateway degradation.
---

## How to Execute the Scripts Locally

1. **Install k6 CLI:**
   ```bash
   # Using Homebrew (macOS)
   brew install k6

   # Using Windows Package Manager
   winget install gnu.k6
   ```
2. **Execute the Performance Run:**
Navigate to the directory and execute the test:
```bash
k6 run amazon-style-load-test.js
```
