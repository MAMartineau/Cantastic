var signUpCommands = {
    
    //Sign Up for a Plan
    signUp: function (service, billing, first, last, email, cell, address, apartment,
        city, state, zip, instructions, tpickup, rpickup, time, mainprice, recprice, yardprice,
        table, hearus, other, fullstate)
        {this
            .pause(1000)
            .click('@signUp')
            .waitForElementVisible('@scrollUp')
            .click('@serviceSched')
            .setValue('@serviceSched', service)
            .setValue('@billFreq', billing)
            .setValue('@firstName', first)
            .setValue('@lastName', last)
            .setValue('@email', email)
            .setValue('@cellPhone', cell)
            .setValue('@address', address)
            .setValue('@apartment', apartment)
            .setValue('@city', city)
            .setValue('@state', state)
            .setValue('@zip', zip)
            .setValue('@instructions', instructions)
            .setValue('@trashDay', tpickup)
            .setValue('@recDay', rpickup)
            .setValue('@cleanTime', time)
            .setValue('@mainCan', mainprice)
            .setValue('@recCan', recprice)
            .setValue('@yardCan', yardprice)
            .verify.containsText('@paymentTable', table)
            .setValue('@hearUs', hearus)
            .setValue('@other', other)
            .click('@nextButton1')
            .waitForElementVisible('@billingZip')
            .assert.valueContains('@billingFirst', first)
            .assert.valueContains('@billingLast', last)
            .assert.valueContains('@billingEmail', email)
            .assert.valueContains('@billingCell', cell)
            .assert.valueContains('@billingAddr', address)
            .assert.valueContains('@billingCity', city)
            .assert.containsText('@billingState', fullstate)
            .assert.valueContains('@billingZip', zip)
            .click('@nextButton1')

        return this
        },
    payment: function(payMethod, cardAddress, cardZip, cardNumber,
        expMonth, expYear, cvvCode)
        {this
            .pause(1000)
            .setValue('@pmtMethod', payMethod)
            .setValue('@cardAddr', cardAddress)
            .setValue('@cardZipCd', cardZip)
            .setValue('@cardNumb', cardNumber)
            .setValue('@cardExpMo', expMonth)
            .setValue('@cardExpYr', expYear)
            .setValue('@cvvCde', cvvCode)
            .click('@nextButton1')
            .waitForElementVisible('@success')
            .pause(1000)

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
    serviceSched: { selector: '//*[@id="pricingId"]', locateStrategy: 'xpath' },
    billFreq: { selector: '//*[@id="billingFrequency"]', locateStrategy: 'xpath' },
    firstName: 'input[name="firstName"]',
    lastName: 'input[name="lastName"]',
    email: 'input[name="email"]',
    cellPhone: 'input[id="cellPhone"]',
    address: 'input[id="address"]',
    apartment: 'input[id="apartment"]',
    city: 'input[id="city"]',
    state: '[id="state"]',
    zip: 'input[id="zip"]',
    instructions: '[name="details"]',
    trashDay: '[name="trashDay"]',
    recDay: '[name="recycleDay"]',
    cleanTime: '[name="cleanTime"]',
    mainCan: '[id="trash"]',
    recCan: '[id="recycle"]',
    yardCan: '[id="yard"]',
    paymentTable: { selector: '//td/*["text-right"]', locateStrategy: 'xpath' },
    hearUs: '[name="marketing"]',
    other: '[name="other"]',
    nextButton1: { selector: '//*[@value="Next"]', locateStrategy: 'xpath' },
    billingFirst: 'input[name="billingFirstName"]',
    billingLast: 'input[name="billingLastName"]',
    billingEmail: 'input[name="billingEmail"]',
    billingCell: 'input[name="billingCellPhone"]',
    billingAddr: 'input[name="billingAddress"]',
    billingCity: 'input[name="billingCity"]',
    billingState: '[id="billingState"]',
    billingZip: 'input[id="billingZip"]',
    pmtMethod: '[id="paymentMethod"]',
    cardAddr: '[id="cardAddress"]',
    cardZipCd: '[id="cardZip"]',
    cardNumb: '[id="cardNumber"]',
    cardExpMo: '[id="expireMonth"]',
    cardExpYr: '[id="expireYear"]',
    cvvCde: '[id="ccode"]',
    success: { selector: '//div/*[contains(text(), "Success!")]', locateStrategy: 'xpath' },

    },
}