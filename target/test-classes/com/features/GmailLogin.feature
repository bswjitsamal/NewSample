Feature: Test gmail
In order to test gmail


Scenario: Test gmail

    Given I go to url
    When I enter the below details as follows
     | username | password |
     |aaa       |bbb       |
     |xxx       |yyy       |
    Then it should login
