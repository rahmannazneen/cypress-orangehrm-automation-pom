class LoginPage {
  elements = {
    username: () => cy.get('input[name="username"]'),
    password: () => cy.get('input[name="password"]'),
    loginButton: () => cy.get('button[type="submit"]'),
  };

  login(username, password) {
    this.elements.username().type(username);
    this.elements.password().type(password);
    this.elements.loginButton().click();
  }
}

export default new LoginPage();
