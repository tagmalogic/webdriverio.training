import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LandingPage extends Page {
    /**
     * define selectors using getter methods
     */

    get btnGetStarted() {
        return $("//*[text()='Get Started']");
    }

    /**
     * methods to encapsule automation code to interact with the page
     */

    async btnGetStarted_waitForDisplayed() {
        await this.btnGetStarted.waitForDisplayed();
    }

    async btnGetStarted_click() {
        await this.btnGetStarted.click();
    }

    async open() {
        return await super.open('/');
    }
}

export default new LandingPage();
