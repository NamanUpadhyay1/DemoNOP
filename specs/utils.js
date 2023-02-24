class Utils 
{
    static async printingData(data)
    {
        await console.log(data)
    }
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

    static async pauseTime(time)
    {
        await browser.pause(time)
    }

    static async getCurrentUrl()
    {
        await browser.getUrl()
    }

    static async switchWindow(url)
    {
        await browser.switchWindow(url)
    }

    static async closingWindow()
    {
        await browser.closeWindow()
    }

}

module.exports = Utils