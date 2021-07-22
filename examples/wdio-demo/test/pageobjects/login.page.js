const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    return $("#user_login");
  }
  get inputPassword() {
    return $("#user_pass");
  }
  get btnSubmit() {
    return $('input[type="submit"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login(username, password) {
    await (await this.inputUsername).setValue(username);
    await (await this.inputPassword).setValue(password);
    await (await this.btnSubmit).click();
  }

  /**
   * overwrite specifc options to adapt it to page object
   */
  open() {
    return super.open("wp-login.php");
  }
}

module.exports = new LoginPage();