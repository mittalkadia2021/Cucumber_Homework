@Regression

Feature: User able to add comments


  @Comments

  Scenario: User able to add comments successfully
    Given   User on home page
    When    User click on online store is open
    And     User type title and comment in the box
    And     Click on new comment
    Then    User able to see comments added in comment box