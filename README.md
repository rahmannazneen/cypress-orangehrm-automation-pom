# 🧪 OrangeHRM Cypress Automation (POM Structure)

This project automates the UI flow of the [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com) application using **Cypress** and follows the **Page Object Model (POM)** structure to ensure maintainability, scalability, and readability.

---

## 📁 Project Structure

```
cypress/
├── e2e/                          # ✅ All test files go here
│   └── loginTest.spec.js         # ✅ Your test file (must end with .spec.js)
│
├── support/
│   ├── e2e.js                    # ✅ Cypress support file
│   └── pages/                    # ✅ Page Object Model (POM) files go here
│       ├── loginPage.js          # Login page actions and selectors
│       ├── pimPage.js            # PIM module page object
│       ├── adminPage.js          # Admin module page object
│       └── addUserPage.js        # Add user functionality object
│
cypress.config.js                 # ✅ Main configuration for Cypress
```

## ⚙️ Cypress Configuration (cypress.config.js)
The following key configurations are set up in the cypress.config.js file:

![Alt Text](https://github.com/user-attachments/assets/f0bc2bb1-cc64-495c-9252-8f995543438c)

## 🧪 How to Run the Tests
To understand how to set up and run Cypress tests effectively, please follow the step-by-step guide provided in the repository below:

🔗 [Cypress Zero to Hero Guide](https://github.com/rahmannazneen/cypress-zero-to-hero)

## ✨ Key Feature Workflow
This test scenario demonstrates a complete flow from logging into the OrangeHRM system as an admin, adding a new employee, and logging out — with screenshots captured after each major action.

🔐 1. Login to OrangeHRM (Admin)
* Opens the OrangeHRM login page

* Logs in using Admin credentials

👤 2. Visit the PIM Module
* Navigates to the PIM (Personal Information Management) module from the dashboard

* Prepares to add a new employee

➕ 3. Add a New Employee
* Enter First Name, Middle Name, and Last Name for the new employee

* Saves the employee profile

* Verifies redirection to the Personal Details page

📸 4. Capture Screenshots After Actions
* Takes screenshots after:

* Successful login

* Navigating to PIM

* Adding an employee

* Each critical step assists in debugging and documentation

🚪 5. Log out of the System
* Opens the top-right menu

* Clicks Logout to exit the system securely

* Ensures the user is redirected back to the login page



## 🧱 Tools & Technologies

 * Cypress (JavaScript End-to-End Testing Framework)

* Page Object Model (for test code reusability and clarity)

* Node.js & npm


## 📌 Best Practices Followed

✅ Page Object Model for clear separation of concerns

✅ Spec files placed under cypress/e2e

✅ Reusable selectors and actions in support/pages

✅ Cypress config is properly set with baseUrl, specPattern, and supportFile


