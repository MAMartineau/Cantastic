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
            .rentAnItem(
                '10 Cleaning Visits',
                'Yearly',
                'Tom',
                'Putty',
                'me@you.com',
                '8015556666',
                '',
                '',
                '',
                '',
                '',
                )
    },

}