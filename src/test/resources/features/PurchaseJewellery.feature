
@Regression
Feature: Register User able Purchase jewellery successfully

  @JewelleryPurchase
  Scenario: Register user able to purchase jewellery
    Given   User on home page
    When    User click on jewellery category
    And     User click on Vintage Style Engagement Ring product
    And     User click on checkout
    And     User enter register details
    And     User click on continue
    And     User click on Sopping cart checkbox and checkout
    And     User enter Billing Address details
    And     User select shipping method and click on continue
    And     User select payment method and click on continue
    And     User enter payment information and click on continue
    And     User click on confirm
    Then    User able to buy product successfully



