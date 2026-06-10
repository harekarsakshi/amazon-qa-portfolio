# Day 2
# SDLC Mapping — Waterfall vs Agile

## What I did

Mapped Amazon's "Add to Cart" button feature through the full Software Development Life Cycle (SDLC). The goal was to compare how the same feature would be built using two different development methods — Waterfall and Agile — and identify what a QA engineer does at each stage.

**Feature tested:** Add to Cart button on any Amazon product page

---

## What is the SDLC?

The SDLC is the step-by-step process teams follow to plan, build, test, and release software. There are 5 key stages:

1. Requirements — figure out what the feature needs to do
2. Design — plan how it will look and work
3. Code — build it
4. Test — check it works correctly
5. Deploy — release it to real users

---

## The two methods compared

| | Waterfall | Agile |
|---|---|---|
| How it works | Do all 5 steps in order, one big release at the end | Work in small 2-week chunks called sprints, release often |
| Flexibility | Low — hard to change the plan once started | High — the plan can change based on feedback |
| Risk | High — bugs found late are expensive to fix | Low — problems are caught early and often |

---

## Stage-by-stage breakdown

### 1. Requirements — What does it need to do?

| | Waterfall | Agile |
|---|---|---|
| What happens | Every rule for the button is written out in full before anything starts | Just enough rules are written to get started this sprint |
| QA does | Reviews the rules and asks about edge cases — what if the item is out of stock? What if the user isn't logged in? | Sits with the team from day one and helps write rules that are clear and testable |

---

### 2. Design — How will it look and work?

| | Waterfall | Agile |
|---|---|---|
| What happens | Full design and system plan locked in before any code is written | A lightweight design for just this sprint, improved as the team learns more |
| QA does | Reviews wireframes and checks that error states are designed — not just the happy path | Joins design conversations early and starts drafting the test plan |

---

### 3. Code — Build it

| | Waterfall | Agile |
|---|---|---|
| What happens | Developers build everything according to the plan — no changes allowed mid-phase | Button is built in a 2-week sprint, code is shared and reviewed constantly |
| QA does | Sets up the test environment and writes test scripts while waiting for the build | Tests code as soon as it is written — does not wait until the end |

---

### 4. Test — Does it work?

| | Waterfall | Agile |
|---|---|---|
| What happens | One big testing phase after all coding is done | Testing happens throughout every sprint using a mix of automated and manual checks |
| QA does | Runs the full test suite — clicking the button, checking cart updates, testing error messages, and logging bugs | Runs automated tests on every update and does exploratory testing to catch unexpected bugs |

---

### 5. Deploy — Go live!

| | Waterfall | Agile |
|---|---|---|
| What happens | One large release after all phases are complete — risky if something breaks | Small updates go live every 2 weeks — easy to roll back if something goes wrong |
| QA does | Runs smoke tests on the live site to confirm the button works for real users before sign-off | Monitors the live site after each release and watches for issues real users are hitting |

---

## Skills used

- SDLC methodology analysis (Waterfall vs Agile)
- QA role mapping across development phases
- Shift-left testing principles
- Defect risk assessment by development model

---

## Key takeaway

In **Waterfall**, QA is mostly a late-stage gatekeeper — reviewing specs early then running a big test phase before launch. Bugs found late are expensive to fix.

In **Agile**, QA is involved from day one — writing tests early, testing every sprint, and helping the team release with confidence. Problems are caught sooner and cost less to fix.
