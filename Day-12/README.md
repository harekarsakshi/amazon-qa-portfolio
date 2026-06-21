# Amazon-Style Store API Tests

This project forms part of my hands-on Quality Assurance training, focused on API testing methodology, verification, and regression control using **Postman**. 

The test suite exercises a mock retail e-commerce back-end using the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) to simulate real-world CRUD operations (Create, Read, Update, Delete) against an automated storefront schema.

---

## 🚀 Tested Endpoints & Methods

| HTTP Method | Endpoint | Description | Expected Status |
| :--- | :--- | :--- | :--- |
| **`GET`** | `/posts` | Fetches the full product catalog list. | `200 OK` |
| **`GET`** | `/posts/1` | Fetches individual product resource details. | `200 OK` |
| **`POST`** | `/posts` | Simulates creating/publishing a new product listing. | `201 Created` |
| **`PUT`** | `/posts/1` | Updates an existing product's parameters/quantities. | `200 OK` |
| **`DELETE`** | `/posts/1` | Deletes a product entity from the current runtime session. | `200 OK` |

---

## 🧪 Implemented Assertions

Every request within this collection executes functional JavaScript test validations upon receiving a response. The following target quality indicators are evaluated during each test run:

### 1. HTTP Status Code Validation
Ensures the server responds with the exact standardized REST response protocol code.
```javascript
pm.test("Status code is 200", function () {
    pm.expect(pm.response.status).to.equal(200);
});

```
### 2. Header Content-Type Validation
Validates that the server transfers data matching the expected web format payload (application/json) rather than accidental fallback HTML error pages or firewalls.
```javascript
pm.test("Content-Type header includes application/json", function () {
    pm.expect(pm.response.headers.get('Content-Type')).to.include('application/json');
});
```
### 3. Response Time Validation
Ensures the server responds efficiently and meets performance benchmarks by verifying that the latency is under 200 milliseconds.
```javascript
pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});
