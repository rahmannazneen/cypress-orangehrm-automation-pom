// cypress/support/pages/pimPage.js

class PimPage {
  elements = {
    pimMenu: () => cy.get('a.oxd-main-menu-item').contains('PIM'),
    addButton: () => cy.get('button').contains('Add'),
  };

  goToPimPage() {
    this.elements.pimMenu().click();
  }

  clickAddEmployee() {
    this.elements.addButton().click();
  }

  
  
}

// Export an instance
export default new PimPage();
