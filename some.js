const webdriver = require('selenium-webdriver')
const By = webdriver.By
const crypto = require('crypto-js')
async function test(){
    const driver = new webdriver.Builder().forBrowser('chrome').build()
    await driver.get('file:///home/sunbeam/devOpsModule/chromedriver_linux64/practice/practice.html')

    const inputValue1 = driver.findElement(By.id('value1'))
    inputValue1.sendKeys('Mansi')

    const inputValue2 = driver.findElement(By.id('value2'))
    inputValue2.sendKeys('Mansi')
    await driver.sleep(2000)
    const button = driver.findElement(By.id('login'))
    button.click()
    
    //driver.close()
}

    const encryptedPassword = crypto.MD5(By.id('value2'))
    console.log('encrypted password: ' + encryptedPassword)
    
test()

