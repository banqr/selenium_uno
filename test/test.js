//require("chromedriver")
const { Builder, By, Key, until } = require('selenium-webdriver')
let chai = require('chai');
let should = chai.should;
const expect = chai.expect
let timeout;
let driver;
let data = require('../data/data')


before("Startujemo chrome browser", async function () {
    this.timeout(20000)
    var width = 800;
    var height = 600;
    driver = new Builder().forBrowser('chrome').build()
    // driver.manage().window().setSize(width, height);


    try {
        await driver.get('http://dx.com')

        const signIn = await driver.wait(until.elementLocated(By.css(".login-notSign-box")), timeout)
        await signIn.click()
        //user
        let username = await driver.wait(until.elementLocated(By.css(".user"), timeout))
        await username.clear()

        await username.sendKeys(data.username)

        //pass
        let pass = await driver.wait(until.elementLocated(By.css(".pass"), timeout))
        await pass.clear()

        await pass.sendKeys(data.pass)

        // .login-in-btn
        let signin = await driver.wait(until.elementLocated(By.css(".login-in-btn"), timeout))

        await signin.click()


    } catch (error) {
        console.log(error)
    }

})
after("Curo gasi ..", async function () {
    try {
        // await driver.quit()

    } catch (error) {
        console.log(error)
    }

})




describe("idemo momchad..", async function () {
    this.timeout(20000)
    it("Check weather Radovan is logged in ", async function () {
        let user = await driver.wait(until.elementLocated(By.css(".span-login-Sign"), timeout))
        let text = await user.getText()

        expect(text).to.equal(data.user)

    })
    it("Search for iphone xs", async function () {
        // .search-txt-key
        let search = await driver.wait(until.elementLocated(By.css(".search-txt-key"), timeout))
        await search.sendKeys("iphone xs")

        let clickSearch = await driver.wait(until.elementLocated(By.css(".search-btn"), timeout))
        await clickSearch.click()

    })
    it("Take one element and check item name ", async function () {
        let elements = []
        let elem;
        let webElements = await driver.findElements(By.css(".product-img img"))
        try {
            webElements.forEach(async (el) => {
                elem = await el.getAttribute('alt').then(el=>{
                    elements.push(el)
                })
                
                // console.log(elem)
            })
        } catch (error) {
            console.log(error)
        }
        console.log(elements)

    })
    // it()
})





