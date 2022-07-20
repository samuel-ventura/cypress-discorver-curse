let faker = require('faker')
let cpf = require('gerador-validador-cpf')

export default {
    deliveryGuy: function () {

        let firstName = faker.name.firstName();
        let lastName = faker.name.lastName();
        let fullName = `${firstName} ${lastName}`;

        let data = {
            name: `${fullName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(fullName),
            whatsapp: faker.phone.phoneNumber('###########'),
            address: {
                zip: '63041145',
                street: 'Avenida Padre Cícero',
                number: '119',
                details: 'B',
                district: 'Triângulo',
                city_state: 'Juazeiro do Norte/CE'
            },
            delivery_method: 'Moto',
            cnh: '/assets/cnh-digital.jpg',
            modal_message: {
                message_success: 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
            }
        }
        return data
    }
}