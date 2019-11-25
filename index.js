//require("chromedriver")
const { Builder, By, Key, until } = require('selenium-webdriver')

const example = async () => {
    let driver = new Builder().forBrowser('chrome').build()

    try {
        await driver.get('http://www.google.com/ncr')
        await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN)
        await driver.wait(until.titleIs('webdriver - Google search'), 2000)
    } catch (error) {
        console.log(error)
    }
    finally {
        await driver.quit()
    }
}
example()