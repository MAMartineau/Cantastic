var cantastic = {}

module.exports = {
    //setup
    beforeEach: browser =>{
        cantastic = browser.page.cantasticOb();
        cantastic.navigate();
    },
    //teardown
    after: browser =>{
        browser.end()
    },
    //Data for plan sign up
    'Plan sign up': ()=> {
        cantastic
            .signUp('10 Cleaning Visits',
                'Yearly',
                'Tom',
                'Putty',
                'me@you.com',
                '8015556666',
                '75 W Center St',
                '25B',
                'Provo',
                'UT',
                '84601',
                'Stinky cans are on left side of garage.',
                'Tue',
                'Tue',
                '4:30 PM',
                '1',
                '1',
                '2',
                '$371.49',
                'Salesman (put name in Other box)',
                'Wiley E. Coyote',
                'Utah')

            .payment('Credit/Debit Card',
                    '75 W Center St',
                    '84601',
                    '4242424242424242',
                    '09',
                    '19',
                    '159')
    },

}