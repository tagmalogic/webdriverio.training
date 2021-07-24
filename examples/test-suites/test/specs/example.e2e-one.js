const assert = require("assert");
const expectedPageTitle = "Dashboard ‹ wdiotraining — WordPress";

describe("Login to wordpress", () => {
  it("Should login with valid credentials", async () => {
    await browser.url(`wp-login.php`);
    await browser.pause(2000);

    const userName = await browser.$("#user_login");
    await userName.setValue("wdiotraining");

    const userPass = await browser.$("#user_pass");
    await userPass.setValue("wdiopass");
    await browser.pause(2000);

    const submitBtn = await browser.$("#wp-submit");
    await submitBtn.click();

    await browser.pause(2000);
    const pageTitle = await browser.getTitle();

    assert.strict.equal(pageTitle, expectedPageTitle);

    await browser.pause(2000);
  });
});


