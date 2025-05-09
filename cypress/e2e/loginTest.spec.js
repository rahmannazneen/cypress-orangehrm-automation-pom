import loginPage from '../support/pages/loginPage';

describe('OrangeHRM Login Test', () => {
  it('should log in successfully with valid credentials', () => {
    cy.visit('/');
    loginPage.login('Admin', 'admin123');
  });
});
