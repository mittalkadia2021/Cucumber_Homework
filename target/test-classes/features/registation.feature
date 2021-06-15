@Regression
Feature: User able to register successfully.
  @Registration
  Scenario: user should be able to register successfully
    Given  user is on register page
    When user enters all required register details
    Then user should able to register successfully

