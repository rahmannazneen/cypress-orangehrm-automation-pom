import addEmployeePage from '../support/pages/addEmployeePage';
import loginPage from '../support/pages/loginPage';
import pimPage from '../support/pages/pimPage';

describe('OrangeHRM Login Test', () => {
  it('should log in successfully with valid credentials', () => {
    cy.visit('/');
    loginPage.login('Admin', 'admin123');
    cy.wait(2000);
    cy.screenshot("Dashboard");
    pimPage.goToPimPage();
    cy.wait(2000);
    pimPage.clickAddEmployee();
    cy.screenshot("Logo");
    addEmployeePage.insertEmployee('QA', 'Nazneen', 'Bughunter');
    cy.screenshot("Add Employee");
    cy.get('.oxd-userdropdown-name').click();
    cy.contains('Logout').click();

  });
});
