@android @iOS @mobile-web
Feature: Mobile native basic scenario

  Scenario: As an user, I can open login to the demo mobile native app

    Given I open the demo app
    When I lock device
    And I unlock device
    And I navigate to login tab
    And I initiate login with someemail@someemail.xxx and password
    Then I close the app