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

describe("Create new post", () => {
  it("Should create new post from admin area - with no submit", async () => {
    const newBtn = await browser.$("#wp-admin-bar-new-content");
    await newBtn.moveTo();
    await browser.pause(2000);

    const newPostBtn = await browser.$("#wp-admin-bar-new-post");
    await newPostBtn.click();
    await browser.pause(2000);

    const closeTipBtn = await browser.$("//button[@aria-label='Disable tips']");
    if (closeTipBtn.isExisting()) {
      await closeTipBtn.click();
      await browser.pause(2000);
    }

    const newPostTitle = await browser.$("#post-title-0");
    await newPostTitle.setValue("WDIO training");
    await browser.pause(2000);

    const newPostContentBlock = await browser.$(
      "//textarea[@aria-label='Add block' and text()='Start writing or type / to choose a block']"
    );
    await newPostContentBlock.click();
    await browser.pause(2000);

    const newPostContent = await browser.$(
      "//p[@aria-label='Empty block; start writing or type forward slash to choose a block']"
    );
    await newPostContent.setValue("WDIO training content");
    await browser.pause(2000);
  });
});
