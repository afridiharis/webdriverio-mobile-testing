const LOGIN_PAGE_TITLE = '//*[@text="WEBDRIVER"]';
const LOGIN_NAV_BUTTON = '~Login';
const LOGIN_SIGNIN_BUTTON = '.android.widget.TextView[text="LOGIN"]';
const LOGIN_FORM_HEADING = ['~Login-screen', '.android.widget.TextView'];
const LOGIN_EMAIL_FIELD = '~input-email';
const LOGIN_PASSWORD_FIELD = '~input-password';

class LoginPage {

    get login_page_title() {
        return $(LOGIN_PAGE_TITLE) 
    }

    get login_nav_button() {
        return $(LOGIN_NAV_BUTTON)
    }

    get login_signin_button() {
        
        $(LOGIN_SIGNIN_BUTTON).waitForDisplayed({timeout: 7000})
        return $(LOGIN_SIGNIN_BUTTON)
    }

    get login_signin_form_heading() {
        return {
            login_form_title: LOGIN_FORM_HEADING[0], 
            login_form_title_chain: LOGIN_FORM_HEADING[1]
        }
    }

    get login_email_field() {
        return $(LOGIN_EMAIL_FIELD)
    }

    get login_password_field() {
        return $(LOGIN_PASSWORD_FIELD)
    }
}

module.exports = new LoginPage();