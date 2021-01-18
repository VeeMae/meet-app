Feature: Show/hide an event’s details

Scenario: An event element is collapsed by default
Given the main page is open, whether filtered by city or not
When the user scrolls through the app
Then the user should see a list of all upcoming events with their details hidden

Scenario: User can expand an event to see its details
Given the main page is open, whether filtered by city or not
When the user clicks on the “Show Details” button for any displayed event
Then the user should see an expanded view of that event’s details

Scenario: User can collapse an event to hide its details
Given an event has been expanded
When the user clicks on the “Hide Details” button for that event
Then the user should see the event has been collapsed
And its details are hidden