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

🔐 Log in to OrangeHRM as Admin

👤 Navigate to the PIM module

➕ Add a new employee with first, middle, and last name

📸 Capture screenshots after major actions

🚪 Log out securely from the system



## 🧱 Tools & Technologies

 * Cypress (JavaScript End-to-End Testing Framework)

* Page Object Model (for test code reusability and clarity)

* Node.js & npm


## 📌 Best Practices Followed

✅ Page Object Model for clear separation of concerns

✅ Spec files placed under cypress/e2e

✅ Reusable selectors and actions in support/pages

✅ Cypress config is properly set with baseUrl, specPattern, and supportFile

## 🤝 Contribution
Contributions are welcome!
Feel free to fork this repository to:

* Improve test coverage

* Add new test scenarios

* Optimize and enhance the framework

* Every contribution helps make this project better. 🙌

## 📜 License
This project is open-source and available for public use under the MIT License.

## 👩‍💻 Author
rahmannazneen

Passionate about test automation, clean code, and building scalable QA frameworks.


