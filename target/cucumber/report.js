$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DataTableExample.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "As a user\r\nI want to be able to add new clients in the system\r\nSo that i can add accounting data for that client",
  "id": "",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "Sign-up a new user with datatable example",
  "description": "",
  "id": ";sign-up-a-new-user-with-datatable-example",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Signup-DataTable"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "the user is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "she chooses to sign up",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "she provides the her details as follows:",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "email",
        "password",
        "cnfpassword"
      ],
      "line": 11
    },
    {
      "cells": [
        "Monisa",
        "Samal",
        "monisa1@mail.com",
        "password",
        "password"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "she signs-up",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "she should be logged in to the application",
  "keyword": "Then "
});
formatter.match({
  "location": "NewClientWorkflow.the_user_is_on_landing_page()"
});
formatter.result({
  "duration": 26713902331,
  "status": "passed"
});
formatter.match({
  "location": "NewClientWorkflow.she_chooses_to_sign_up()"
});
formatter.result({
  "duration": 2221559149,
  "status": "passed"
});
formatter.match({
  "location": "DataTableExample.she_provides_the_her_details_as_follows(DataTableExample$UserDetails\u003e)"
});
formatter.result({
  "duration": 9716256545,
  "status": "passed"
});
formatter.match({
  "location": "NewClientWorkflow.she_signs_up()"
});
formatter.result({
  "duration": 3438084307,
  "status": "passed"
});
formatter.match({
  "location": "NewClientWorkflow.she_should_be_logged_in_to_the_application()"
});
formatter.result({
  "duration": 1597042665,
  "status": "passed"
});
formatter.uri("NewClientWorkflow.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "As a user\r\nI want to be able to add new clients in the system\r\nSo that i can add accounting data for that client",
  "id": "",
  "keyword": "Feature"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "the user is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "she chooses to sign up",
  "keyword": "When "
});
formatter.match({
  "location": "NewClientWorkflow.the_user_is_on_landing_page()"
});
formatter.result({
  "duration": 1169171523,
  "status": "passed"
});
formatter.match({
  "location": "NewClientWorkflow.she_chooses_to_sign_up()"
});
formatter.result({
  "duration": 185007232,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Sign up a new user",
  "description": "",
  "id": ";sign-up-a-new-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Signup-Simple"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "she provides the first name as \"Biswajit\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "she provides the last name as \"Samal\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "she provides the email as \"biswajitsamal7@mail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "she provides the password as \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "she provides the confirm password again as \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "she signs-up",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "she should be logged in to the application",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Biswajit",
      "offset": 32
    }
  ],
  "location": "NewClientWorkflow.she_provides_the_first_name_as(String)"
});
formatter.result({
  "duration": 713042475,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samal",
      "offset": 31
    }
  ],
  "location": "NewClientWorkflow.she_provides_the_last_name_as(String)"
});
formatter.result({
  "duration": 104199408,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "biswajitsamal7@mail.com",
      "offset": 27
    }
  ],
  "location": "NewClientWorkflow.she_provides_the_email_as(String)"
});
formatter.result({
  "duration": 177940678,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 30
    }
  ],
  "location": "NewClientWorkflow.she_provides_the_password_as(String)"
});
formatter.result({
  "duration": 123414413,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 44
    }
  ],
  "location": "NewClientWorkflow.she_provides_the_confirm_password_again_as(String)"
});
formatter.result({
  "duration": 101361250,
  "status": "passed"
});
formatter.match({
  "location": "NewClientWorkflow.she_signs_up()"
});
formatter.result({
  "duration": 3174173251,
  "status": "passed"
});
formatter.match({
  "location": "NewClientWorkflow.she_should_be_logged_in_to_the_application()"
});
formatter.result({
  "duration": 1523414315,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Data driving new user sign-up",
  "description": "",
  "id": ";data-driving-new-user-sign-up",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@Signup-DataDriven"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "she provides the first name as \"\u003cfirstName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "she provides the last name as \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "she provides the email as \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "she provides the password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "she provides the confirm password again as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "she signs-up",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "she should be logged in to the application",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": ";data-driving-new-user-sign-up;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "email",
        "password"
      ],
      "line": 31,
      "id": ";data-driving-new-user-sign-up;;1"
    },
    {
      "cells": [
        "Satyajit",
        "Samal",
        "satyaji8t@mail.com",
        "password"
      ],
      "line": 32,
      "id": ";data-driving-new-user-sign-up;;2"
    },
    {
      "cells": [
        "Biswajit",
        "samal",
        "biswajit8@mail.com",
        "password"
      ],
      "line": 33,
      "id": ";data-driving-new-user-sign-up;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "the user is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "she chooses to sign up",
  "keyword": "When "
});
formatter.match({
  "location": "NewClientWorkflow.the_user_is_on_landing_page()"
});
formatter.result({
  "duration": 1020964534,
  "status": "passed"
});
formatter.match({
  "location": "NewClientWorkflow.she_chooses_to_sign_up()"
});
formatter.result({
  "duration": 199487900,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Data driving new user sign-up",
  "description": "",
  "id": ";data-driving-new-user-sign-up;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@Signup-DataDriven"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "she provides the first name as \"Satyajit\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "she provides the last name as \"Samal\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "she provides the email as \"satyaji8t@mail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "she provides the password as \"password\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "she provides the confirm password again as \"password\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "she signs-up",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "she should be logged in to the application",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Satyajit",
      "offset": 32
    }
  ],
  "location": "NewClientWorkflow.she_provides_the_first_name_as(String)"
});
formatter.result({
  "duration": 762190612,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samal",
      "offset": 31
    }
  ],
  "location": "NewClientWorkflow.she_provides_the_last_name_as(String)"
});
formatter.result({
  "duration": 113888546,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "satyaji8t@mail.com",
      "offset": 27
    }
  ],
  "location": "NewClientWorkflow.she_provides_the_email_as(String)"
});
formatter.result({
  "duration": 563577233,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 30
    }
  ],
  "location": "NewClientWorkflow.she_provides_the_password_as(String)"
});
formatter.result({
  "duration": 126754601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 44
    }
  ],
  "location": "NewClientWorkflow.she_provides_the_confirm_password_again_as(String)"
});
formatter.result({
  "duration": 265382929,
  "status": "passed"
});
formatter.match({
  "location": "NewClientWorkflow.she_signs_up()"
});
formatter.result({
  "duration": 1996583065,
  "status": "passed"
});
formatter.match({
  "location": "NewClientWorkflow.she_should_be_logged_in_to_the_application()"
});
formatter.result({
  "duration": 1536226110,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "the user is on landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "she chooses to sign up",
  "keyword": "When "
});
formatter.match({
  "location": "NewClientWorkflow.the_user_is_on_landing_page()"
});
formatter.result({
  "duration": 936892290,
  "status": "passed"
});
formatter.match({
  "location": "NewClientWorkflow.she_chooses_to_sign_up()"
});
formatter.result({
  "duration": 158993554,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Data driving new user sign-up",
  "description": "",
  "id": ";data-driving-new-user-sign-up;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@Signup-DataDriven"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "she provides the first name as \"Biswajit\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "she provides the last name as \"samal\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "she provides the email as \"biswajit8@mail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "she provides the password as \"password\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "she provides the confirm password again as \"password\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "she signs-up",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "she should be logged in to the application",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Biswajit",
      "offset": 32
    }
  ],
  "location": "NewClientWorkflow.she_provides_the_first_name_as(String)"
});
formatter.result({
  "duration": 713441362,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "samal",
      "offset": 31
    }
  ],
  "location": "NewClientWorkflow.she_provides_the_last_name_as(String)"
});
formatter.result({
  "duration": 94326471,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "biswajit8@mail.com",
      "offset": 27
    }
  ],
  "location": "NewClientWorkflow.she_provides_the_email_as(String)"
});
formatter.result({
  "duration": 148149307,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 30
    }
  ],
  "location": "NewClientWorkflow.she_provides_the_password_as(String)"
});
formatter.result({
  "duration": 139671007,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 44
    }
  ],
  "location": "NewClientWorkflow.she_provides_the_confirm_password_again_as(String)"
});
formatter.result({
  "duration": 99562349,
  "status": "passed"
});
formatter.match({
  "location": "NewClientWorkflow.she_signs_up()"
});
formatter.result({
  "duration": 2040188338,
  "status": "passed"
});
formatter.match({
  "location": "NewClientWorkflow.she_should_be_logged_in_to_the_application()"
});
formatter.result({
  "duration": 1461409410,
  "status": "passed"
});
});