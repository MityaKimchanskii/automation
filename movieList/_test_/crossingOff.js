const {By} = require('selenium-webdriver')

const crossingOff = async (driver) => {

    await driver.findElement(By.xpath('//span')).click()
    await driver.sleep(1000)

    await driver.findElement(By.xpath('//span')).click()
    await driver.sleep(1000)
}

module.exports = {
    crossingOff
}