import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AdminDashboardPage extends Page {
  /**
   * define selectors using getter methods
   */
  get labelWelcomePanel() {
    return $(".welcome-panel-content");
  }

  get labelWelcomePanelTitle() {
    return this.labelWelcomePanel.$("h2");
  }

  async labelWelcomePanelTitle_waitForDisplayed() {
    await this.labelWelcomePanelTitle.waitForDisplayed();
  }
}

export default new AdminDashboardPage();
