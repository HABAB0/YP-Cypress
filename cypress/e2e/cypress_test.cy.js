describe('Cypress', () => {
    it('Enter main page', () => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Переход на главную страницу')
            cy.visit(data.main_url);
        })
    })

    it('Employer login + create vacancy', () => {
        cy.fixture('cypressTest').then(data => {
            cy.visit(data.main_url + '/login');
            cy.get('.form-input--text')
                .type(data.login_employer)

            cy.get('.form-input--password')
                .type(data.all_password)

            cy.get(':nth-child(3) > .button')
                .click()

            cy.wait(1000);

            cy.get(':nth-child(7) > .menu-item__item-name')
                .click()

            cy.wait(1000);

            cy.get('[data-v-94414c9f=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button')
                .click()

            cy.wait(1000);

            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--')
                .type('Рзнорабочий', { force: true })

            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(2) > .salary-field > .salary-field__wrapper--bottom > .radio-list > :nth-child(2) > [name="salary-field-radio"]')
                .click()

            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-select > :nth-child(2) > .form-select__selected')
                .click()

            cy.get('.form-select__items > :nth-child(1)')
                .click()

            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > [data-v-af677f15=""] > :nth-child(1) > .radio-list > :nth-child(3) > [name="label-radio"]')
                .click()

            cy.get('.form-control--responsive > .form-input--text')
                .type('Нормальный такой')

            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(5) > [name="requirements"] > .form-area')
                .type('Кружка чай и чурчхелла')

            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(6) > [name="responsibilities"] > .form-area')
                .type('Присутствовать')

            cy.get('.vacancy-add-form-wrapper > .form > .form__buttons > .buttons > .button')
                .click({ force: true })

            cy.get(':nth-child(1) > .vacancy-item__info-wrapper > .vacancy-item__footer-wrapper > .vacancy-footer > .vacancy-footer__button-wrapper > .button__background-color-green')
                .click({ force: true })
        })
    })

    it('Student response to a vacancy', () => {
        cy.fixture('cypressTest').then(data => {
            cy.visit(data.main_url + '/login');
                cy.get('.form-input--text')
                    .type(data.login_student)

                cy.get('.form-input--password')
                    .type(data.all_password)

                cy.get(':nth-child(3) > .button')
                    .click()

                cy.wait(1000);

                cy.get(':nth-child(1) > .header__nav > [href="/vacancies"]')
                    .click()

                cy.wait(1000);

                cy.get('.form-input--text')
                    .type('Разнорабочий')

                cy.get(':nth-child(2) > [name="salary-field-radio"]')
                    .click()

                cy.wait(1000);

                cy.get(':nth-child(1) > .vacancy-item__info-wrapper > .vacancy-item__footer-wrapper > .vacancy-footer > .vacancy-footer__button-wrapper > .button__background-color-green')
                    .click({ force: true })
        })
    })

    it('Confirmation of response by the employer', () => {
        cy.fixture('cypressTest').then(data => {
            cy.visit(data.main_url + '/login');
            cy.get('.form-input--text')
                .type(data.login_employer)

            cy.get('.form-input--password')
                .type(data.all_password)

            cy.get(':nth-child(3) > .button')
                .click()

            cy.wait(1000);

            cy.get(':nth-child(5) > .menu-item__item-name')
                .click({ force: true })

            cy.wait(1000);

            cy.get(':nth-child(1) > .responses-list-item__actions > :nth-child(1)')
            .click({ force: true })

            cy.wait(1000);

            cy.get('.infinite-loader > :nth-child(1) > .button')
            .click({ force: true })

            cy.wait(1000);

            cy.get('.status-open__buttons > :nth-child(2)')
            .click({ force: true })

            cy.wait(1000);
        })
    })

    it('Negative entry scenario', () => {
        cy.fixture('cypressTest').then(data => {
            cy.visit(data.main_url + '/login');
            cy.get('.form-input--text')
                .type(data.login_employer)

            cy.get('.form-input--password')
                .type('1')

            cy.get(':nth-child(3) > .button')
                .click()

            cy.wait(1000);

            cy.get('.form-error > span')
                .should('be.visible')

            cy.wait(1000);
        })
    })

    it('Negative scenario employer login + create vacancy', () => {
        cy.fixture('cypressTest').then(data => {
            cy.visit(data.main_url + '/login');
            cy.get('.form-input--text')
                .type(data.login_employer)

            cy.get('.form-input--password')
                .type(data.all_password)

            cy.get(':nth-child(3) > .button')
                .click()

            cy.wait(1000);

            cy.get(':nth-child(7) > .menu-item__item-name')
                .click()

            cy.wait(1000);

            cy.get('[data-v-94414c9f=""][data-v-4849dea2=""] > .vacancies-block > .vacancies-block__filters-wrapper > .button')
                .click()

            cy.wait(1000);

            cy.get('.vacancy-add-form-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--')
                .type('././//,./?>~`!@~!@##~!@3dcапвап', { force: true })

            cy.get('.form-error > span')
                .should('be.visible')
        })
    })
})