import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../pageobjects/login.page';
import AdminDashboardPage from '../pageobjects/admin.dahboard.page';
import allureReporter from '@wdio/allure-reporter';

const pages = {
    login: LoginPage,
    adminDashboard: AdminDashboardPage,
};

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
});

When(/^I login with (\w+) and (\w+)$/, async (username, password) => {
    allureReporter.addTestId('1234');
    allureReporter.addDescription('Description name');

    await LoginPage.login(username, password);
});

Then(/^I should see (\w+) page with ([^]*)?$/, async (page, title) => {
    await AdminDashboardPage.labelWelcomePanelTitle_waitForDisplayed();

    await expect(await pages[page].getPageTitle()).toBe(title, {
        message: 'Page title not as expected',
    });
});
