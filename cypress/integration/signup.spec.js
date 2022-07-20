import SignupPage from '../pages/SignupPage';
import SignupFactory from '../factories/SignupFactory'

describe('Signup', () => {
    let signup = new SignupPage();

    it('should be able to add a new delivery guy', () => {
        let deliveryGuy = SignupFactory.deliveryGuy()

        signup.validAccessPage();
        signup.fillForm(deliveryGuy);
        signup.submitForm();
        signup.modalContentValidation(deliveryGuy.modal_message.message_success);
        signup.clickConfirmModalValidationButton();
    })

    it('not should be able to add a new delivery guy with a incorrect CPF', () => {
        let deliveryGuy = SignupFactory.deliveryGuy();

        deliveryGuy.cpf = '1231aa';

        signup.validAccessPage();
        signup.fillForm(deliveryGuy);
        signup.submitForm();
        signup.validateErrorMessage('Oops! CPF inválido');
    })

    it('not should be able to add a new delivery guy with a incorrect email', () => {
        let deliveryGuy = SignupFactory.deliveryGuy();

        deliveryGuy.email = 'samuel.com.br';

        signup.validAccessPage();
        signup.fillForm(deliveryGuy);
        signup.submitForm();
        signup.validateErrorMessage('Oops! Email com formato inválido.');
    })

    context('Required fields', () => {
        before(() => {
            signup.validAccessPage();
            signup.submitForm();
        })

        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'address', output: 'É necessário informar o número do endereço' },
            { field: 'deliveryMethod', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]

        messages.forEach((message) => {
            it(`not should be possible to add a new delivery guy without ${message.field}`, () => {
                signup.validateErrorMessage(message.output);
            })
        })
    })
})