const utils = require('../specs/utils')

const _registerButton = '.ico-register'
const _loginButton = '.ico-login'
const _priceList = '//span[@class="price actual-price"]'
const _electronicsMenu = '//ul[@class="top-menu notmobile"]//li[2]//a[@href="/electronics"]'
const _cameraphotoButton = '//img[@alt="Picture for category Camera & photo"]'
const _facebookButton = '//a[@href="http://www.facebook.com/nopCommerce"]'

class HomePage
{
    static async registerButton()
    {
        await utils.clickOnElement(_registerButton);
    }

    static async loginButton()
    {
        await utils.clickOnElement(_loginButton)
    }

    static async priceList()
    {
        let listings = await $$(_priceList)
        listings.forEach(async element => 
            {
                let listForAssert = await element.getText()
                expect(listForAssert).to.contains('$')
                
            });
    }

    static async electronicsMenu()
    {
        await utils.clickOnElement(_electronicsMenu)
    }

    static async cameraButton()
    {
        await utils.clickOnElement(_cameraphotoButton)
    }

    static async facebookButton()
    {
        await utils.clickOnElement(_facebookButton)
    }

}
module.exports = HomePage