var signUpCommands = {
    
    //Sign Up for a Plan
    rentAnItem: function (service, billing, first, last, email, cell, address, apartment,
        city, zip, instructions, tpickup, rpickup, time, mainprice, recprice, table, hearus,
        other, next)
        {this
            .pause(3000)
            .click('@signUp')
            .waitForElementVisible('@scrollUp')



        return this
        }
    }

module.exports = {
url: 'https://cantastic.cloudpiston.net/cpsweb/22/index.html',
commands: [signUpCommands],
elements: {
    //Signup selectors
    signUp: { selector: '//li/*[contains(text(), "Sign Up")]', locateStrategy: 'xpath' },
    scrollUp: '.scrollup',
    pricingID: { selector: '//*[@id="pricingId"]', locateStrategy: 'xpath' },
    billFreq: { selector: '//*[@id="billingFrequency"]', locateStrategy: 'xpath' },
    firstName: 'input[name="lastName"]',
    lastName: 'input[name="lastName"]',
    email: 'input[name="email"]',


    },
}