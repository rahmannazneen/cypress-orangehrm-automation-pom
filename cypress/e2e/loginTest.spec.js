import addEmployeePage from '../support/pages/addEmployeePage';
import loginPage from '../support/pages/loginPage';
import pimPage from '../support/pages/pimPage';

describe('OrangeHRM Login Test', () => {
  it('should log in successfully with valid credentials', () => {
    cy.visit('/');
    loginPage.login('Admin', 'admin123');
    pimPage.goToPimPage();
    cy.wait(2000);
    pimPage.clickAddEmployee();
    addEmployeePage.insertEmployee('QA', 'Nazneen', 'Bughunter');

  });
});
