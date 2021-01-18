Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number
Given the main page is open
And the user hasn’t specified a number in the “Number of Events” field
When the user scrolls through the app
Then the user should see a default of 32 (2 if using mockData) events displayed on the main page

Scenario: User can change the number of events they want to see
Given the main page is open
When the user types in a specific number of events in the “Number of Events” field
Then the user should see that specific amount of events displayed on the main page