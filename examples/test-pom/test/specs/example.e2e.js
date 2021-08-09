const LoginPage = require("../pageobjects/login.page");
const AdminDashboardPage = require("../pageobjects/admin.dashboard.page");

describe("Login to wordpress", () => {
  it("Should login with valid credentials", async () => {
    await LoginPage.open();

    await LoginPage.login("wdiotraining", "wdiopass");

    await expect(await AdminDashboardPage.getPageTitle()).toBe(
      "Dashboard ‹ wdiotraining — WordPress",
      { message: "Page title not as expected" }
    );
    await expect(await AdminDashboardPage.labelWelcomePanelTitle).toHaveText(
      "Welcome to WordPress!",
      { message: "Welcome panel title not as expected" }
    );

    await AdminDashboardPage.wait(2);
  });
});
