const { expect } = require("chai");

describe('Access Login Screen', () => {
  before('check home page is loaded', async () => {
    // check home screen title using xPath
    const homeScreenTitle = await $('//*[@text="WEBDRIVER"]').getText();
    homeScreenTitle.should.equal('WEBDRIVER')
  });
  it('go to login page', async () => {
    // using Accessibility ID to locate the login button
    const LOGIN_ICON = await $('~Login');
    LOGIN_ICON.click();      
  });
  it('check login page is displayed', async () => {
    // using CSS selector to find login button
    const loginButton = await $('.android.widget.TextView[text="LOGIN"]').getText();
    await loginButton.should.equal('LOGIN')
    // chaining locators to find login title element
    const loginTitleText = await $('~Login-screen').$('.android.widget.TextView').getText();
    loginTitleText.should.equal('Login / Sign up Form')  
  })
  it('fill in the login form', async () => {
    // using accessibility ids to fill in login form
    let loginEmail = await $('~input-email');
    let loginPassword = await $('~input-password')
    await loginEmail.setValue('helloworld.com')
    await loginPassword.setValue('helloworldpassword')
  })
  it('verify login details', async () => {
    // verify values in the login fields
    await $('.android.widget.TextView[text="LOGIN"]').click();
    let inputEmail = await $('~input-email').getText();
    await expect(inputEmail).to.equal('helloworld.com')
    let inputPassword = await $('~input-password').getText();
    await expect(inputPassword).to.have.lengthOf(18)
  })
})