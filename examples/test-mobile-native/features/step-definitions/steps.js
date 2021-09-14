import { Given, When, Then } from '@cucumber/cucumber';
import LandingPage from '../pageobjects/landing.page';
import LoginPage from '../pageobjects/login.page';

Given(/^I open the demo app$/, async () => {
    await console.log('Mobile app is open');
});

When(/^I lock device$/, async () => {
    await driver.lock();
});

When(/^I unlock device$/, async () => {
    await driver.unlock();
});

When(/^I navigate to login tab$/, async () => {
    await LandingPage.btnLogin_tap();
});

When(
    /^I initiate login with ([^"]*)? and ([^"]*)?$/,
    async (email, password) => {
        await LoginPage.txtEmail_setText(email);
        await LoginPage.txtPassword_setText(password);
        await LoginPage.btnLogin_tap();
    },
);

Then(/^I close the app$/, async () => {
    await driver.closeApp();
});
