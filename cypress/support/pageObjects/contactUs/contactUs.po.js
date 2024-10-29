export class ContactUsPage {

    /**
     * use this method to navigate to any page
     * @param {*} uri 
     */
    navigateTo(uri) {
        cy.intercept("GET", `https://datacom.com/nz/en/${uri}`).as("waitPage")
        cy.visit(`${uri}`).wait("@waitPage")
        
    }

    waitViaApi(method, api, alias) {
        cy.intercept(method, api).as(alias)
    }

    /**
     * use this method to check URL
     * @param {*} uri 
     */
    verifyURLValue(uri) {
        cy.url().should('include', uri)
    }

}