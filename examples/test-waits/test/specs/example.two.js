const assert = require("assert");
const expectedPageTitle = "Dashboard ‹ wdiotraining — WordPress";

describe("WebdriverIO waits and timeouts", () => {
  it("WebdriverIO waits", async () => {
    await browser.url(`/waitsTestApp.html`);

    // Wait for the first label to appear then disappear
    const label1 = await browser.$("#text1");
    await label1.waitForDisplayed();
    await label1.waitForDisplayed({ reverse: true });

    // Wait for the second label to appear
    const label2 = await browser.$("#text2");
    await label2.waitForDisplayed({ timeout: 100000 });

    // Fill in first name
    const txtFirstName = await browser.$("#firstName");
    await txtFirstName.waitForDisplayed();
    await txtFirstName.setValue("Anna");

    // Fill in last name
    const txtLastName = await browser.$("#lastName");
    await txtLastName.waitForDisplayed();
    await txtLastName.waitForEnabled();
    await txtLastName.setValue("Doe");

    // Fill in dog's name
    const txtDogName = await browser.$("#dogsName");
    await browser.waitUntil(async () => txtDogName.isDisplayed());
    await txtDogName.setValue("Lucky");
  });
});
