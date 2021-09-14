import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    get lblUserName() {
        return $("//label[@for='user_login']");
    }
    get inputUsername() {
        return $('#user_login');
    }
    get inputPassword() {
        return $('#user_pass');
    }
    get btnSubmit() {
        return $('#wp-submit');
    }

    /**
     * methods to encapsule automation code to interact with the page
     */

    async login(username, password) {
        await this.lblUserName.waitForDisplayed();
        await this.inputUsername.setValueEnhanced(username);
        await this.inputPassword.setValueEnhanced(password);
        await this.btnSubmit.clickEnhanced();
    }

    async open() {
        return await super.open('wp-login.php');
    }
}

export default new LoginPage();
