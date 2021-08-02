const assert = require("assert");
const expectedPageTitle = "Dashboard ‹ wdiotraining — WordPress";

describe("WebdriverIO waits and timeouts - implicit waits", () => {
  it("Implicit waits", async () => {
    await browser.url(`/waitsTestApp.html`);
    console.log(
      "Webdriver protocol waits: " + JSON.stringify(await browser.getTimeouts())
    );
    await browser.setTimeout({ implicit: 10000 });

    const label2 = await browser.$("#text2");
    await label2.click();
  });
});
