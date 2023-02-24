const { expect, assert } = require('chai')
const registerPage = require('../pageobjects/register.page')
const homePage = require('../pageobjects/home.page')
const loginPage = require('../pageobjects/login.page')
const cameraPage = require('../pageobjects/camera.page')
const utils = require('../specs/utils')

let date = new Date().getTime()

const dataInp = require('../testConfig.json')
const { loginSubmit } = require('../pageobjects/login.page')

// describe('Demo Nop Commerce Registration',()=>
// {
//     it('should open the correct website', async()=>
//     {
//         await browser.url(dataInp.baseUrl)
//         // const currentUrl = await browser.getUrl()
//         // const expectedUrl = dataInp.baseUrl
//         // console.log(currentUrl)
//         // assert(currentUrl===expectedUrl)            
//     })
//     it('should be able to register an account successfully', async()=>
//     {
//         await homePage.registerButton()
//         await registerPage.maleRadioBtn()
//         await registerPage.firstName()
//         await registerPage.lastName()
//         await registerPage.birthDay().selectByIndex(22)
//         await registerPage.birthMonth().selectByIndex(9)
//         await registerPage.birthYear().selectByVisibleText(2002)
//         await registerPage.emailID()
//         await registerPage.password()
//         await registerPage.confirmPassword()
//         await registerPage.submitButton()
//     })
// })

// describe('Demo Nop Commerce Logging in',()=>
// {
//     it('should open the correct website', async()=>
//     {
//         await browser.url(dataInp.baseUrl)
//         // const currentUrl = await browser.getUrl()
//         // const expectedUrl = dataInp.baseUrl
//         // console.log(currentUrl)
//         // assert(currentUrl===expectedUrl)            
//     })

//     it('Logging in account ~Details',async()=>
//     {
//         await homePage.loginButton()
//         await loginPage.loginEmail()
//         await loginPage.loginPassword()
//         await loginPage.loginSubmit()
//     })
// })

// describe('Demo Nop Commerce pricing currency check', ()=>
// {
//     it('should open the correct website', async()=>
//     {
//         await browser.url(dataInp.baseUrl)
//         // const currentUrl = await browser.getUrl()
//         // const expectedUrl = dataInp.baseUrl
//         // console.log(currentUrl)
//         // assert(currentUrl===expectedUrl)            
//     })

//     it('Dollar Pricing on products checking', async()=>
//     {
//         await homePage.priceList()
//     })
// })

describe('Checking buttons on the Camera and photo page',()=>
{
    it('should open the correct website', async()=>
    {
        await browser.url(dataInp.baseUrl)
        const currentUrl = await browser.getUrl()
        const expectedUrl = dataInp.baseUrl
        console.log(currentUrl)
        assert(currentUrl===expectedUrl)            
    })
    it('Navigate to the Cameras page ', async()=>
    {
        await homePage.electronicsMenu()
        await homePage.cameraButton()
        await cameraPage.addToCartButtons()      
    })
})
