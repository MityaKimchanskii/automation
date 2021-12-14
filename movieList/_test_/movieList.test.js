const { Builder, Capabilities } = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const {addMovie} = require('./movieList')
const {deleteMovie} = require('./deleteMovie')

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('Add movie', async () => {
    await addMovie(driver)
    await driver.sleep(1000)
})

test('Delete movie', async () => {
    await deleteMovie(driver)
    await driver.sleep(1000)
})


