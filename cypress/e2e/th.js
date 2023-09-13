describe('Automation store sign up & login', () => {

    // global variables to store the values and use it in two test cases
    let loginName
    let password
    it('sign up process', () => {
        cy.visit("https://automationteststore.com/index.php?rt=account/login")
        cy.get('#accountFrm > fieldset > .btn').click()
        loginName = "rawan"
        password = "123456"
        cy.get('#AccountFrm_firstname').type("rawan")
        cy.get('#AccountFrm_lastname').type("khaled")
        cy.get('#AccountFrm_email').type("rawanabuzerr@gmail.com")
        cy.get('#AccountFrm_telephone').type("+962781560095")
        cy.get('#AccountFrm_fax').type("489548")
        cy.get('#AccountFrm_company').type("ltuc")
        cy.get('#AccountFrm_address_1').type("zarqa")
        cy.get('#AccountFrm_address_2').type("azrqa")
        cy.get('#AccountFrm_city').type("zarqa")
        cy.get('#AccountFrm_zone_id').select("Powys")
        cy.get('#AccountFrm_postcode').type("123456")
        cy.get('#AccountFrm_country_id').type("123456")
        cy.get('#AccountFrm_loginname').type(loginName)
        cy.get('#AccountFrm_password').type(password)
        cy.get('#AccountFrm_confirm').type(password)
        cy.get('#AccountFrm_newsletter1').first().check()
        cy.get('#AccountFrm_agree').check()
        cy.get('.col-md-2 > .btn').click()


    });

    // test 2 to test the login process after sign up
    it('login process', () => {
        cy.visit("https://automationteststore.com/index.php?rt=account/login")
            // now filling out the login form
        cy.get('#loginFrm_loginname').type(loginName)
        cy.get('#loginFrm_password').type(password)
        cy.get('#loginFrm > fieldset > .btn > .fa').click()
    });

});