@Regression

Feature: Login Functionality

  Background:
    Given User is on homepage

  @Login
  Scenario Outline: User should not Login with a invalid credential
    When User click on login
    And User type "<email>" and "<password>"
    And User click on login button
    Then User should not able to login
    And  User should get "<error_message>"

    Examples:
      | email              | password | error_message                                                                             |
      | meera123@gmail.com |          | Login was unsuccessful. Please correct the errors and try again.No customer account found |
      |                    | 12234    | Please enter your email                                                                   |
      | 1111@gmail.com     | abc1111  | Login was unsuccessful. Please correct the errors and try again.No customer account found |
      |                    |          | Please enter your email                                                                   |


