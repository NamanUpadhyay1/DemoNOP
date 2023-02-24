const dataInp = require('../testConfig.json')
let date = new Date().getTime()

const utils = require('../specs/utils')

const _logEmail = '#Email'
const _logPassword = '#Password'
const _loginSubmitButton = '//button[contains(text(), "Log in")]'

class LoginPage
{
    static async loginEmail()
    {
        await utils.typeText(_logEmail, `${dataInp.firstEmail}${date}${dataInp.lastEmail}`)
    }

    static async loginPassword()
    {
        await utils.typeText(_logPassword, dataInp.password)
    }

    static async loginSubmit()
    {
        await utils.clickOnElement(_loginSubmitButton)
    }
}
module.exports = LoginPage