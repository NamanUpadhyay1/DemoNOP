const dataInp = require('../testConfig.json')
let date = new Date().getTime()

const utils = require('../specs/utils')

const _maleRadioButton = '#gender-male'
const _firstName = '#FirstName'
const _lastName = '#LastName'
const _email = '#Email'
const _password = '#Password'
const _confirmPassword = '#ConfirmPassword'
const _dateDropDown= '//select[@name="DateOfBirthDay"]'
const _monthDropDown = '//select[@name="DateOfBirthMonth"]'
const _yearDropDown = '//select[@name="DateOfBirthYear"]'
const _registerSubmitButton = '#register-button'



class RegisterPage
{
    static async maleRadioBtn()
    {
        await utils.clickOnElement(_maleRadioButton)
    }

    static async firstName()
    {
        await utils.typeText(_firstName, dataInp.firstName)
    }

    static async lastName()
    {
        await utils.typeText(_lastName, dataInp.lastName)
    }
    static birthDay()
    {
        return $(_dateDropDown)
    }
    static birthMonth()
    {
        return $(_monthDropDown)
    }
    static birthYear()
    {
        return $(_yearDropDown)
    }
    static async emailID()
    {
        await utils.typeText(_email, `${dataInp.firstEmail}${date}${dataInp.lastEmail}`)
    }
    static async password()
    {
        await utils.typeText(_password, dataInp.password)
    }
    static async confirmPassword()
    {
        await utils.typeText(_confirmPassword, dataInp.confirmPassword)
    }

    static async submitButton()
    {
        await utils.clickOnElement(_registerSubmitButton)
    }
}
module.exports = RegisterPage