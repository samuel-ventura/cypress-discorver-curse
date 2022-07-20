class SignupPage {
    validAccessPage() {
        cy.visit('/');
        cy.get('a[href="/deliver"]').click();
        cy.get('#page-deliver form h1').should('contain', 'Cadastre-se para  fazer entregas');
    }

    fillForm(deliveryGuy, correctCpf) {
        cy.get('input[name="fullName"]').type(deliveryGuy.name);
        cy.get('input[name="cpf"]').type(deliveryGuy.cpf);
        cy.get('input[name="email"]').type(deliveryGuy.email);
        cy.get('input[name="whatsapp"]').type(deliveryGuy.whatsapp);
        cy.get('input[name="postalcode"]').type(deliveryGuy.address.zip);

        cy.get('input[type="button"][value="Buscar CEP"]').click();

        cy.get('input[name="address-number"]').type(deliveryGuy.address.number);
        cy.get('input[name="address-details"]').type(deliveryGuy.address.details);

        cy.get('input[name="address"]').should('have.value', deliveryGuy.address.street);
        cy.get('input[name="district"]').should('have.value', deliveryGuy.address.district);
        cy.get('input[name="city-uf"]').should('have.value', deliveryGuy.address.city_state);

        cy.contains('.delivery-method li', deliveryGuy.delivery_method).click();

        cy.get('.dropzone input[type=file]').attachFile(deliveryGuy.cnh);
    }

    submitForm() {
        cy.get('button[type=submit][class=button-success]').click();
    }

    modalContentValidation(modalMessage) {
        cy.get('.swal2-container .swal2-html-container')
            .should('have.text', modalMessage);
    }

    clickConfirmModalValidationButton () {
        cy.get('button[class="swal2-confirm swal2-styled"]').click();
    }

    validateErrorMessage(errorMessage) {
        /* cy.get('.alert-error').should('have.text', errorMessage); */
        cy.contains('.alert-error', errorMessage).should('be.visible')
    }
}   

export default SignupPage;