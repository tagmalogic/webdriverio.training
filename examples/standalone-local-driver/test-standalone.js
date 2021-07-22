const { remote } = require("webdriverio");
const assert = require("assert");

const expectedPageTitle = "Dashboard ‹ wdiotraining — WordPress";

(async () => {
  const browser = await remote({
    logLevel: "trace",
    port: 9516,
    path: "/",
    capabilities: {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--start-fullscreen"]
      }
    }
  });

  await browser.url("http://localhost:8000/wp-login.php");
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
  await browser.deleteSession();
})().catch(e => console.error(e));
