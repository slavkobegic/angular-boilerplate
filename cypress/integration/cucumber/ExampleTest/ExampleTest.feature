Feature: Main Page
  Show the main page

  Scenario: Opening the main page
    Given I visit the page
    Then I see "Angular Boilerplate" in the title
