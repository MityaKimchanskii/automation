const {By} = require('selenium-webdriver')

const deleteMovie = async (driver) => {

        await driver.findElement(By.xpath('//input')).sendKeys('Old')
        await driver.findElement(By.xpath('//button')).click()
        const movie = await driver.findElement(By.xpath('//li'))
        await driver.sleep(1000)

        await driver.findElement(By.xpath('//input')).sendKeys('Osean')
        await driver.findElement(By.xpath('//button')).click()
        const movie2 = await driver.findElement(By.xpath('//li'))
        await driver.sleep(1000)

        await driver.findElement(By.xpath('//input')).sendKeys('Alcapone')
        await driver.findElement(By.xpath('//button')).click()
        const movie3 = await driver.findElement(By.xpath('//li'))
        await driver.sleep(1000)

        await driver.findElement(By.id('Alcapone')).click()
        await driver.sleep(1000)
        await driver.findElement(By.id('Osean')).click()
        await driver.sleep(1000)
        

        const display = movie.isDisplayed()
        expect(display).toBeTruthy()
}

module.exports = {
    deleteMovie
}