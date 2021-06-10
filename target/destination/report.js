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
formatter.before({
  "duration": 11815874300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepsDefs.userIsOnHomepage()"
});
formatter.result({
  "duration": 337047100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should not Login with a invalid credential",
  "description": "",
  "id": "login-functionality;user-should-not-login-with-a-invalid-credential;;2",
  "type": "scenario",
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
  "name": "User type \"meera123@gmail.com\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
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
  "duration": 1733613200,
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
  "duration": 161133600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.userClickOnLoginButton()"
});
formatter.result({
  "duration": 1547279700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.userShouldNotAbleToLogin()"
});
formatter.result({
  "duration": 49100,
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
  "duration": 141612500,
  "status": "passed"
});
formatter.after({
  "duration": 1565266500,
  "status": "passed"
});
formatter.before({
  "duration": 8635490200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepsDefs.userIsOnHomepage()"
});
formatter.result({
  "duration": 2722800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User should not Login with a invalid credential",
  "description": "",
  "id": "login-functionality;user-should-not-login-with-a-invalid-credential;;3",
  "type": "scenario",
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
  "name": "User type \"\" and \"12234\"",
  "matchedColumns": [
    0,
    1
  ],
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
  "duration": 1561109600,
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
  "duration": 99255200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.userClickOnLoginButton()"
});
formatter.result({
  "duration": 299044400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.userShouldNotAbleToLogin()"
});
formatter.result({
  "duration": 102000,
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
  "duration": 113303000,
  "status": "passed"
});
formatter.after({
  "duration": 1355916300,
  "status": "passed"
});
formatter.before({
  "duration": 7802229600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepsDefs.userIsOnHomepage()"
});
formatter.result({
  "duration": 5170000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User should not Login with a invalid credential",
  "description": "",
  "id": "login-functionality;user-should-not-login-with-a-invalid-credential;;4",
  "type": "scenario",
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
  "name": "User type \"1111@gmail.com\" and \"abc1111\"",
  "matchedColumns": [
    0,
    1
  ],
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
  "duration": 1783219500,
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
  "duration": 136619800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.userClickOnLoginButton()"
});
formatter.result({
  "duration": 1275017100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.userShouldNotAbleToLogin()"
});
formatter.result({
  "duration": 26700,
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
  "duration": 118756200,
  "status": "passed"
});
formatter.after({
  "duration": 1128959600,
  "status": "passed"
});
formatter.before({
  "duration": 7011742300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepsDefs.userIsOnHomepage()"
});
formatter.result({
  "duration": 2937400,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User should not Login with a invalid credential",
  "description": "",
  "id": "login-functionality;user-should-not-login-with-a-invalid-credential;;5",
  "type": "scenario",
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
  "name": "User type \"\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
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
  "duration": 1561916500,
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
  "duration": 116536100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.userClickOnLoginButton()"
});
formatter.result({
  "duration": 316097100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsDefs.userShouldNotAbleToLogin()"
});
formatter.result({
  "duration": 35000,
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
  "duration": 85978200,
  "status": "passed"
});
formatter.after({
  "duration": 1211649400,
  "status": "passed"
});
});