$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/LogIn.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "User should not Login with a invalid credential",
  "description": "",
  "id": "login-functionality;user-should-not-login-with-a-invalid-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User click on login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User type \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should not able to login",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User should get \"\u003cerror_message\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
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
      "line": 15,
      "id": "login-functionality;user-should-not-login-with-a-invalid-credential;;1"
    },
    {
      "cells": [
        "meera123@gmail.com",
        "",
        "Login was unsuccessful. Please correct the errors and try again.No customer account found"
      ],
      "line": 16,
      "id": "login-functionality;user-should-not-login-with-a-invalid-credential;;2"
    },
    {
      "cells": [
        "",
        "12234",
        "Please enter your email"
      ],
      "line": 17,
      "id": "login-functionality;user-should-not-login-with-a-invalid-credential;;3"
    },
    {
      "cells": [
        "1111@gmail.com",
        "abc1111",
        "Login was unsuccessful. Please correct the errors and try again.No customer account found"
      ],
      "line": 18,
      "id": "login-functionality;user-should-not-login-with-a-invalid-credential;;4"
    },
    {
      "cells": [
        "",
        "",
        "Please enter your email"
      ],
      "line": 19,
      "id": "login-functionality;user-should-not-login-with-a-invalid-credential;;5"
    }
  ],
  "keyword": "Examples"
});
