const {By} = require('selenium-webdriver')

module.exports = {
    addMovie: async (driver) => {
        await driver.findElement(By.xpath('//input')).sendKeys('I am Legend')
        await driver.findElement(By.xpath('//button')).click()
        const movie = await driver.findElement(By.xpath('//li'))
        await driver.sleep(1000)

        const display = movie.isDisplayed()
        expect(display).toBeTruthy()
        
    }

}