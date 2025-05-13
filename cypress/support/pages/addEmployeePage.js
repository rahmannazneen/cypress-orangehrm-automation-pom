class AddEmployeePage {
  elements = {
    firstName: () => cy.get('input[name="firstName"]'),
    middleName: () => cy.get('input[name="middleName"]'),
    lastName: () => cy.get('input[name="lastName"]'),
    saveBtn: () => cy.get('button[type="submit"]'),
  };

  insertEmployee(firstName, middleName, lastName) {
    this.elements.firstName().type(firstName);
    this.elements.middleName().type(middleName);
    this.elements.lastName().type(lastName);
    this.elements.saveBtn().click();
  }
}

export default new AddEmployeePage();
