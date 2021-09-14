@android @iOS @mobile-web
Feature: Mobile web basic scenario

  Scenario: As an user, I can open Webdriver.io website and navigate to Getting Started Page

    Given I am on the landing page
    When I click on Get Started button on Landing page
    Then I should see "Getting Started | WebdriverIO" title on GettingStarted page
