import { Given, When, Then } from '@cucumber/cucumber';
import LandingPage from '../pageobjects/landing.page';
import GettingStartedPage from '../pageobjects/getting.started.page';

const pages = {
    landing: LandingPage,
    gettingStarted: GettingStartedPage,
};

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
});

When(/^I click on Get Started button on Landing page$/, async () => {
    await LandingPage.btnGetStarted_waitForDisplayed();
    await expect(await LandingPage.btnGetStarted).toBeDisplayed();
    await LandingPage.btnGetStarted_click();
});

Then(
    /^I should see "([^"]*)?" title on GettingStarted page$/,
    async (title) => {
        await GettingStartedPage.labelPageTitle_waitForDisplayed();
        await expect(await GettingStartedPage.getPageTitle()).toBe(title, {
            message: 'Page title not as expected',
        });
    },
);
