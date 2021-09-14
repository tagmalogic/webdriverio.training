import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class GettingStartedPage extends Page {
    /**
     * define selectors using getter methods
     */
    get labelPageTitle() {
        return $("//h1[text()='Getting Started']");
    }

    async labelPageTitle_waitForDisplayed() {
        await this.labelPageTitle.waitForDisplayed();
    }
}

export default new GettingStartedPage();
