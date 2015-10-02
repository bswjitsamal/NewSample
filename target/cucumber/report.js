$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("UserForm.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "As a user\r\nI want to be able to add new user in the system",
  "id": "",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Create a new user with datatable example",
  "description": "",
  "id": ";create-a-new-user-with-datatable-example",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@UserForm-DataTable"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user is on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "chooses to fill the user form",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "provides the user details as follows:",
  "rows": [
    {
      "cells": [
        "title",
        "initial",
        "firstName",
        "lastName"
      ],
      "line": 10
    },
    {
      "cells": [
        "Ms.",
        "Hello",
        "Padmakshi",
        "Samal"
      ],
      "line": 11
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "save the form",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "form should be saved in to the application",
  "keyword": "Then "
});
formatter.match({
  "location": "Try.user_is_on_Home_page()"
});
formatter.result({
  "duration": 26224151062,
  "status": "passed"
});
formatter.match({
  "location": "Try.chooses_to_fill_the_user_form()"
});
formatter.result({
  "duration": 1356232879,
  "status": "passed"
});
formatter.match({
  "location": "Try.provides_the_user_details_as_follows(Try$FormDetails\u003e)"
});
formatter.result({
  "duration": 781937713,
  "status": "passed"
});
formatter.match({
  "location": "Try.save_the_form()"
});
formatter.result({
  "duration": 186786441,
  "status": "passed"
});
formatter.match({
  "location": "Try.form_should_be_saved_in_to_the_application()"
});
formatter.result({
  "duration": 66480,
  "status": "passed"
});
});