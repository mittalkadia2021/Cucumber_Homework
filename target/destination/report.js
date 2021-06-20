$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Currency.feature");
formatter.feature({
  "line": 3,
  "name": "Currency verification",
  "description": "",
  "id": "currency-verification",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 15591196101,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be able to change currency from drop down",
  "description": "",
  "id": "currency-verification;user-should-be-able-to-change-currency-from-drop-down",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Currency"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Select any one currency from drop down",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Verify all product currency same as select currency from drop down",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepsDefs.user_on_home_page()"
});
formatter.result({
  "duration": 402750900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_Select_any_one_currency_from_drop_down()"
});
formatter.result({
  "duration": 2388483900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.verify_all_product_currency_same_as_select_currency_from_drop_down()"
});
formatter.result({
  "duration": 288049900,
  "status": "passed"
});
formatter.after({
  "duration": 2387121500,
  "status": "passed"
});
});