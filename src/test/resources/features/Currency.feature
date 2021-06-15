@Regression

Feature: Currency verification
  @Currency
  Scenario: User should be able to change currency from drop down
    Given User on home page
    When User Select any one currency from drop down
    Then Verify all product currency same as select currency from drop down