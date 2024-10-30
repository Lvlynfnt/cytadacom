import { fa, faker } from "@faker-js/faker";
import { ContactUs } from "./contactUs.selector"
export class ContactUsPage {

    /**
     * use this method to navigate to any page
     * @param {*} uri 
     */
    navigateTo(uri) {
        this.waitForPageToLoad(uri)
        cy.visit(`${uri}`).wait("@waitPageToLoad")
        this.acceptCookies()
    }
    /**
     * use this method to check URL
     * @param {*} uri 
     */
    verifyURLValue(uri) {
        cy.url().should('include', uri)
    }

    /**
     * use this method to click on footer links
     * @param {*} selector 
     * @param {*} uri 
     */
    clickOnLinks(selector, uri) {
        this.waitForPageToLoad(uri)
        cy.get(`[href="/nz/en/${selector}"]`).last().click().wait("@waitPageToLoad")
    }

    clickOnContactUsButton() {
        cy.get(ContactUs.contactUwButton).click();
    }

    waitForPageToLoad(uri) {
        cy.intercept("GET", `https://datacom.com/nz/en/${uri}`).as("waitPageToLoad")
    }


    acceptCookies() {
        cy.get('#onetrust-accept-btn-handler').then(($button) => {
            if ($button.is(':visible')) {
                cy.wrap($button).click();
            } else {
                cy.log('Button is not visible, skipping click.')
            }
        });
    }

    fillOutForm() {
        this.generateTestData()
        cy.readFile(`cypress/fixtures/generatedTestData/contactUs.json`).then((data) => {
            this.enterFirstName(data.firstName)
            this.enterLastName(data.lastName)
            this.enterBusinessEmail(data.email)
            this.enterPhoneNumber("0918181881")
            this.enterJobTitle(data.jobTitle)
            this.enterCompanyName(data.companyName)
            this.selectCountry()
            this.selectHowCanIHelpYou()

        })

    }

    enterFirstName(value) {
        cy.get(ContactUs.firstName).clear().type(value)
    }

    enterLastName(value) {
        cy.get(ContactUs.lastName).clear().type(value)
    }

    enterBusinessEmail(value) {
        cy.get(ContactUs.email).clear().type(value)
    }

    enterPhoneNumber(value) {
        cy.get(ContactUs.phone).clear().type(value)
    }

    enterJobTitle(value) {
        cy.get(ContactUs.jobTitle).clear().type(value)
    }

    enterCompanyName(value) {
        cy.get(ContactUs.company).clear().type(value)
    }

    selectCountry() {
        cy.get(ContactUs.country).wait(100).select(1)
    }

    selectHowCanIHelpYou() {
        cy.get(ContactUs.howCanIHelpYou).wait(100).select(1)
    }

    generateTestData() {
        cy.writeFile(`cypress/fixtures/generatedTestData/contactUs.json`, {});
        cy.readFile(`cypress/fixtures/generatedTestData/contactUs.json`).then((data) => {

            data.firstName = faker.person.firstName()
            data.lastName = faker.person.lastName()
            data.email = faker.internet.email()
            data.phone = faker.phone.number()
            data.jobTitle = faker.person.jobTitle()
            data.companyName = faker.company.name()

            cy.writeFile(`cypress/fixtures/generatedTestData/contactUs.json`, data);
        })
    }
}