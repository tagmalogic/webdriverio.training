@e2e
Feature: Wordpress Login Feature

  Scenario: As an admin user, I can log into Wordpress

    Given I am on the login page
    When I login with wdiotraining and wdiopass
    Then I should see adminDashboard page with Dashboard ‹ wdiotraining — WordPress
