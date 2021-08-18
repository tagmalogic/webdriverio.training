const assert = require("assert");
const chaiExpect = require("chai").expect;

const expectedPageTitle = "Dashboard ‹ wdiotraining — WordPress";

describe("Login to wordpress", () => {
  it("Should login with valid credentials", async () => {
    await browser.url(`wp-login.php`);

    const lblUserName = await browser.$("//label[@for='user_login']");
    await lblUserName.waitForDisplayed();
    await expect(lblUserName).toHaveText("Username or Email Address");
    await expect(lblUserName).toHaveText("Username or Email", {
      containing: true,
    });
    await expect(lblUserName).toHaveTextContaining("Username or Email");

    const userName = await browser.$("#user_login");
    await userName.waitForDisplayed();
    await expect(userName).toBeDisplayed();
    await userName.setValue("wdiotraining");
    await expect(userName).toHaveValue("wdiotraining");
    await expect(userName).toHaveValue("wdioTraining", {
      ignoreCase: true,
      message: "The username value is not as expected",
    });
    await expect(userName).toHaveValueContaining("wdio");
    const userPass = await browser.$("#user_pass");
    await userPass.waitForDisplayed();
    await userPass.setValue("wdiopass");
    await expect(userPass).toHaveValue("wdiopass");

    const submitBtn = await browser.$("#wp-submit");
    await submitBtn.waitForDisplayed();
    await expect(submitBtn).toHaveValue("Log In");
    await submitBtn.click();

    const pageTitle = await browser.getTitle();
    await assert.strict.equal(pageTitle, expectedPageTitle); // Node assert example
    await chaiExpect(pageTitle).to.equal(expectedPageTitle); // Chai expect example
    await expect(pageTitle).toBe(expectedPageTitle);
    await expect(browser).toHaveTitle(expectedPageTitle);
    await expect(browser).toHaveTitleContaining("Dashboard");

    await browser.pause(2000);
  });
});
