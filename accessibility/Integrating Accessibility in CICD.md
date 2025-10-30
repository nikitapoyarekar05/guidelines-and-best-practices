# Integrating Accessibility into Your React CI/CD Pipeline

This guide helps developers automate accessibility testing for React applications using **Axe**, **Cypress**, and **GitHub Actions**, ensuring your app meets **WCAG 2.1 AA** compliance continuously.

## 1. Add Axe-core for React (Runtime Accessibility Checks)

**Purpose:** Detect accessibility issues in the browser during development.

**Installation**
```bash
npm install @axe-core/react
```

**Usage (add to index.js or App.js in dev mode only):**
```bash
if (process.env.NODE_ENV !== 'production') {
  const React = require('react');
  const ReactDOM = require('react-dom');
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000);
}
```

This logs accessibility issues directly in the browser console, helping developers fix them early.

## 2. Add Cypress + Axe for Automated Accessibility Testing

Purpose: Run automated accessibility audits for each page or component in your test suite.

**Installation**
```bash
npm install cypress cypress-axe --save-dev
```

**Setup: Add the following line in your cypress/support/commands.js**

```bash 
import 'cypress-axe';
```

**Create a test file cypress/e2e/a11y.cy.js:**

```bash
describe('Accessibility checks', () => {
  it('Has no detectable a11y violations on load', () => {
    cy.visit('/');
    cy.injectAxe();
    cy.checkA11y(); // Fails test if accessibility violations exist
  });
});
```

**Run tests**
```bash
npx cypress run
```

Tip: Use ```cy.checkA11y(null, { includedImpacts: ['critical', 'serious'] })``` to focus on high-priority issues only.

## 3. Add Accessibility Tests to GitHub Actions

Purpose: Automate accessibility audits on every push or pull request.

**Create .github/workflows/accessibility.yml:**
```bash
name: Accessibility Tests
on: [push, pull_request]

jobs:
  accessibility:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Install dependencies
        run: npm ci

      - name: Build and start app
        run: |
          npm run build
          npm start & 
          npx wait-on http://localhost:3000

      - name: Run Accessibility Tests with Pa11y
        run: |
          npx pa11y-ci http://localhost:3000
```


## Tips for Continuous Accessibility
-  Integrate accessibility testing early, in dev and staging, not just production.
-  Combine automated + manual testing for full coverage.
-  Review issues from Axe, Cypress, and Pa11y as part of every PR review.
- Use Lighthouse CI as a secondary audit to track accessibility scores over time.