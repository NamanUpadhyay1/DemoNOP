class Utils 
{
    static async typeText(locator, value) 
    {
        const el = $(locator)
        await el.setValue(value)
    }

    static async clickOnElement(locator) 
    {
        const el = $(locator)
        await el.click()
    }

    static async getData(locator) 
    {
        const el = $(locator)
        return el.getText()
    }

    static async waitForElement(locator, timeOut) 
    {
        const el = await $(locator)
        await el.waitForDisplayed(timeOut)
    }

    static async takeScreenshot() 
    {
        try 
        {
        await cucumberJson.attach(browser.takeScreenshot(), "image/png");
        } catch (err) {
            logger.error("Error " + err);
        }
    }

}

module.exports = Utils