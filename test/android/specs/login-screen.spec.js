const LoginPage = require('../page_objects/LoginPage')
const { expect } = require("chai");


describe('Access Login Screen', () => {
  before('check home page is loaded', async () => {
    // check home screen title using xPath
    const homeScreenTitle = await LoginPage.login_page_title.getText();
    homeScreenTitle.should.equal('WEBDRIVER')
  });
  it('go to login page', async () => {
    // using Accessibility ID to locate the login button
    const LOGIN_ICON = await LoginPage.login_nav_button
    LOGIN_ICON.click();      
  });
  it('check login page is displayed', async () => {
    // using CSS selector to find login button
    const loginButton = await LoginPage.login_signin_button.getText();
    await loginButton.should.equal('LOGIN')
    // chaining locators to find login title element
    const { login_form_title, login_form_title_chain } = LoginPage.login_signin_form_heading;
    const loginTitleText = await $(login_form_title).$(login_form_title_chain).getText();
    await loginTitleText.should.equal('Login / Sign up Form')  
  })
  it('fill in the login form', async () => {
    // using accessibility ids to fill in login form
    await LoginPage.login_email_field.setValue('helloworld.com')
    await LoginPage.login_password_field.setValue('helloworldpassword')
  })
  it('verify login details', async () => {
    // verify values in the login fields
    await LoginPage.login_signin_button.click();
    let inputEmail = await LoginPage.login_email_field.getText();
    await expect(inputEmail).to.equal('helloworld.com')
    let inputPassword = await LoginPage.login_password_field.getText();
    await expect(inputPassword).to.have.lengthOf(18)
    await $('~input-email').saveScreenshot('./screenshots/inputEmailScreenshot.png');
  })
})