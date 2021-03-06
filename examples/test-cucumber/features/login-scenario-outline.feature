@smoke @e2e
Feature: Wordpress Login Feature - One

  Scenario Outline: As an admin user, I can log into Wordpress

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see adminDashboard page with <title>

    Examples:
      | username     | password | title                                |
      | wdiotraining | wdiopass | Dashboard ‹ wdiotraining — WordPress |

  @pending
  Scenario Outline: Additional Scenario - As an admin user, I can log into Wordpress

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see adminDashboard page with <title>

    Examples:
      | username     | password | title                                |
      | wdiotraining | wdiopass | Dashboard ‹ wdiotraining — WordPress |