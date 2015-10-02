Feature: 
  As a user
  I want to be able to add new user in the system
  
   @UserForm-DataTable
  Scenario: Create a new user with datatable example
    Given user is on Home page
    When  chooses to fill the user form
    And  provides the user details as follows:
     | title | initial | firstName | lastName |
     | Ms.   | Hello   |Padmakshi  | Samal    |
    And save the form 
    Then form should be saved in to the application