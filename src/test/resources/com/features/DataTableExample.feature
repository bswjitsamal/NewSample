Feature: 
  As a user
  I want to be able to add new clients in the system
  So that i can add accounting data for that client
  
   @Signup-DataTable
  Scenario: Sign-up a new user with datatable example
    Given the user is on landing page
    When she chooses to sign up
    And she provides the her details as follows:
      | firstName | lastName | email             | password | cnfpassword |
      | Monisa    | Samal    | monisa1@mail.com   | password | password    |
    And she signs-up
    Then she should be logged in to the application