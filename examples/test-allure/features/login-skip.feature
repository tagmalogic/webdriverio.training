@skip()
Feature: Wordpress Login Feature - Three

  Scenario: As an admin user, I can log into Wordpress

    Given I am on the login page
    When I login with wdiotraining and wdiopass
    Then I should see adminDashboard page with Dashboard ‹ wdiotraining — WordPress
