$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Comments.feature");
formatter.feature({
  "line": 3,
  "name": "User able to add comments",
  "description": "",
  "id": "user-able-to-add-comments",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 5413350300,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "User able to add comments successfully",
  "description": "",
  "id": "user-able-to-add-comments;user-able-to-add-comments-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Comments"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User click on online store is open",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User type title and comment in the box",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click on new comment",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User able to see comments added in comment box",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepsDefs.user_on_home_page()"
});
formatter.result({
  "duration": 278486600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_click_on_online_store_is_open()"
});
formatter.result({
  "duration": 1469204800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_type_title_and_comment_in_the_box()"
});
formatter.result({
  "duration": 1480237000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.click_on_new_comment()"
});
formatter.result({
  "duration": 2081203900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_able_to_see_comments_added_in_comment_box()"
});
formatter.result({
  "duration": 1199731500,
  "status": "passed"
});
formatter.after({
  "duration": 1018096800,
  "status": "passed"
});
formatter.uri("src/test/resources/features/Currency.feature");
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
  "duration": 4255560000,
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
  "duration": 3994300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_Select_any_one_currency_from_drop_down()"
});
formatter.result({
  "duration": 1539114800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.verify_all_product_currency_same_as_select_currency_from_drop_down()"
});
formatter.result({
  "duration": 220521100,
  "status": "passed"
});
formatter.after({
  "duration": 799468500,
  "status": "passed"
});
formatter.uri("src/test/resources/features/LogIn.feature");
formatter.feature({
  "line": 3,
  "name": "Login Functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "User should not Login with a invalid credential",
  "description": "",
  "id": "login-functionality;user-should-not-login-with-a-invalid-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User click on login",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User type \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should not able to login",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User should get \"\u003cerror_message\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "login-functionality;user-should-not-login-with-a-invalid-credential;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "error_message"
      ],
      "line": 17,
      "id": "login-functionality;user-should-not-login-with-a-invalid-credential;;1"
    },
    {
      "cells": [
        "meera123@gmail.com",
        "",
        "Login was unsuccessful. Please correct the errors and try again.No customer account found"
      ],
      "line": 18,
      "id": "login-functionality;user-should-not-login-with-a-invalid-credential;;2"
    },
    {
      "cells": [
        "",
        "12234",
        "Please enter your email"
      ],
      "line": 19,
      "id": "login-functionality;user-should-not-login-with-a-invalid-credential;;3"
    },
    {
      "cells": [
        "1111@gmail.com",
        "abc1111",
        "Login was unsuccessful. Please correct the errors and try again.No customer account found"
      ],
      "line": 20,
      "id": "login-functionality;user-should-not-login-with-a-invalid-credential;;4"
    },
    {
      "cells": [
        "",
        "",
        "Please enter your email"
      ],
      "line": 21,
      "id": "login-functionality;user-should-not-login-with-a-invalid-credential;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3499382000,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepsDefs.userIsOnHomepage()"
});
formatter.result({
  "duration": 1876700,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User should not Login with a invalid credential",
  "description": "",
  "id": "login-functionality;user-should-not-login-with-a-invalid-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User click on login",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User type \"meera123@gmail.com\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should not able to login",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User should get \"Login was unsuccessful. Please correct the errors and try again.No customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepsDefs.userClickOnLogin()"
});
formatter.result({
  "duration": 1338749400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "meera123@gmail.com",
      "offset": 11
    },
    {
      "val": "",
      "offset": 36
    }
  ],
  "location": "MyStepsDefs.userTypeAnd(String,String)"
});
formatter.result({
  "duration": 216960100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.userClickOnLoginButton()"
});
formatter.result({
  "duration": 119727300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.userShouldNotAbleToLogin()"
});
formatter.result({
  "duration": 57200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.No customer account found",
      "offset": 17
    }
  ],
  "location": "MyStepsDefs.userShouldGet(String)"
});
formatter.result({
  "duration": 55189700,
  "status": "passed"
});
formatter.after({
  "duration": 790757100,
  "status": "passed"
});
formatter.before({
  "duration": 4169222100,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepsDefs.userIsOnHomepage()"
});
formatter.result({
  "duration": 1894200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User should not Login with a invalid credential",
  "description": "",
  "id": "login-functionality;user-should-not-login-with-a-invalid-credential;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User click on login",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User type \"\" and \"12234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should not able to login",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User should get \"Please enter your email\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepsDefs.userClickOnLogin()"
});
formatter.result({
  "duration": 1301306600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 11
    },
    {
      "val": "12234",
      "offset": 18
    }
  ],
  "location": "MyStepsDefs.userTypeAnd(String,String)"
});
formatter.result({
  "duration": 230993800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.userClickOnLoginButton()"
});
formatter.result({
  "duration": 121219100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.userShouldNotAbleToLogin()"
});
formatter.result({
  "duration": 31900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter your email",
      "offset": 17
    }
  ],
  "location": "MyStepsDefs.userShouldGet(String)"
});
formatter.result({
  "duration": 68312800,
  "status": "passed"
});
formatter.after({
  "duration": 908405500,
  "status": "passed"
});
formatter.before({
  "duration": 4639421700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepsDefs.userIsOnHomepage()"
});
formatter.result({
  "duration": 1029400,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should not Login with a invalid credential",
  "description": "",
  "id": "login-functionality;user-should-not-login-with-a-invalid-credential;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User click on login",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User type \"1111@gmail.com\" and \"abc1111\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should not able to login",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User should get \"Login was unsuccessful. Please correct the errors and try again.No customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepsDefs.userClickOnLogin()"
});
formatter.result({
  "duration": 1764033600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1111@gmail.com",
      "offset": 11
    },
    {
      "val": "abc1111",
      "offset": 32
    }
  ],
  "location": "MyStepsDefs.userTypeAnd(String,String)"
});
formatter.result({
  "duration": 191171500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.userClickOnLoginButton()"
});
formatter.result({
  "duration": 75775900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.userShouldNotAbleToLogin()"
});
formatter.result({
  "duration": 16400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.No customer account found",
      "offset": 17
    }
  ],
  "location": "MyStepsDefs.userShouldGet(String)"
});
formatter.result({
  "duration": 48807200,
  "status": "passed"
});
formatter.after({
  "duration": 896625900,
  "status": "passed"
});
formatter.before({
  "duration": 4541922000,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepsDefs.userIsOnHomepage()"
});
formatter.result({
  "duration": 1078000,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should not Login with a invalid credential",
  "description": "",
  "id": "login-functionality;user-should-not-login-with-a-invalid-credential;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User click on login",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User type \"\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should not able to login",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User should get \"Please enter your email\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "MyStepsDefs.userClickOnLogin()"
});
formatter.result({
  "duration": 695251700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 11
    },
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "MyStepsDefs.userTypeAnd(String,String)"
});
formatter.result({
  "duration": 237948900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.userClickOnLoginButton()"
});
formatter.result({
  "duration": 181973200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.userShouldNotAbleToLogin()"
});
formatter.result({
  "duration": 60600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please enter your email",
      "offset": 17
    }
  ],
  "location": "MyStepsDefs.userShouldGet(String)"
});
formatter.result({
  "duration": 60799100,
  "status": "passed"
});
formatter.after({
  "duration": 810156000,
  "status": "passed"
});
formatter.uri("src/test/resources/features/PurchaseJewellery.feature");
formatter.feature({
  "line": 3,
  "name": "Register User able Purchase jewellery successfully",
  "description": "",
  "id": "register-user-able-purchase-jewellery-successfully",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 3412526100,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Register user able to purchase jewellery",
  "description": "",
  "id": "register-user-able-purchase-jewellery-successfully;register-user-able-to-purchase-jewellery",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@JewelleryPurchase"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User click on jewellery category",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User click on Vintage Style Engagement Ring product",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on checkout",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enter register details",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User click on Sopping cart checkbox and checkout",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enter Billing Address details",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User select shipping method and click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User select payment method and click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enter payment information and click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click on confirm",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User able to buy product successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepsDefs.user_on_home_page()"
});
formatter.result({
  "duration": 2865200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_click_on_jewellery_category()"
});
formatter.result({
  "duration": 1420414600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_click_on_Vintage_Style_Engagement_Ring_product()"
});
formatter.result({
  "duration": 2840547200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_click_on_checkout()"
});
formatter.result({
  "duration": 3637565200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_enter_register_details()"
});
formatter.result({
  "duration": 10024261000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_click_on_continue()"
});
formatter.result({
  "duration": 1333384500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_click_on_Sopping_cart_check_box_and_checkout()"
});
formatter.result({
  "duration": 3518528300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_enter_Billing_Address_details()"
});
formatter.result({
  "duration": 1784395100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_select_shipping_method_and_click_on_continue()"
});
formatter.result({
  "duration": 1170651400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_select_payment_method_and_click_on_continue()"
});
formatter.result({
  "duration": 1048184200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_enter_payment_information_and_click_on_continue()"
});
formatter.result({
  "duration": 1583582200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_click_on_confirm()"
});
formatter.result({
  "duration": 1107101400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_able_to_buy_product_successfully()"
});
formatter.result({
  "duration": 1415542500,
  "status": "passed"
});
formatter.after({
  "duration": 915721600,
  "status": "passed"
});
formatter.uri("src/test/resources/features/registation.feature");
formatter.feature({
  "line": 2,
  "name": "User able to register successfully.",
  "description": "",
  "id": "user-able-to-register-successfully.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 3697392900,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "user should be able to register successfully",
  "description": "",
  "id": "user-able-to-register-successfully.;user-should-be-able-to-register-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Registration"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on register page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters all required register details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should able to register successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepsDefs.user_is_on_register_page()"
});
formatter.result({
  "duration": 896804800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_enters_all_required_register_details()"
});
formatter.result({
  "duration": 7533773700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.user_should_able_to_register_successfully()"
});
formatter.result({
  "duration": 69078800,
  "status": "passed"
});
formatter.after({
  "duration": 955226700,
  "status": "passed"
});
});