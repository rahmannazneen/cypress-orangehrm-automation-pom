# 🧪 OrangeHRM Cypress Automation (POM Structure)

This project automates the UI flow of the [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com) application using **Cypress** and follows the **Page Object Model (POM)** structure to ensure maintainability, scalability, and readability.

---

## 📁 Project Structure

![Alt Text](https://github.com/user-attachments/assets/43008efb-b075-4b48-bfb0-70efca2195b9)

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

 ⚙️ Cypress Configuration (cypress.config.js)
The following key configurations are set up in the cypress.config.js file:

![Alt Text](https://github.com/user-attachments/assets/f0bc2bb1-cc64-495c-9252-8f995543438c)

🧪 How to Run the Tests


✅ Features Covered
* Login to OrangeHRM (Admin)

* Add New Employee (PIM Module)

* Create System User (Admin Module)

* Search and Verify New User

🧱 Tools & Technologies

 * Cypress (JavaScript End-to-End Testing Framework)

* Page Object Model (for test code reusability and clarity)

* Node.js & npm

📌 Best Practices Followed

✅ Page Object Model for clear separation of concerns

✅ Spec files placed under cypress/e2e

✅ Reusable selectors and actions in support/pages

✅ Cypress config properly set with baseUrl, specPattern, and supportFile

📌 Notes

* Page-level logic is abstracted using reusable classes in support/pages/.

* Test files in e2e/ call these classes to interact with the application.

* Tests run on the OrangeHRM Demo Site.
