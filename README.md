# Meet Application

## Objective
Build a serverless, progressive web application with React using a test-driven development technique. The application uses the Google Calendar API to fetch upcoming events. Users will be able to filter events by city, show/hide event details, specify the number of events shown, use the app offline, add an app shortcut to the home screen, and view a chart showing the number of upcoming events by city. 

![Meet Application Demo](/meet-app-gif.gif)

## How To Use

- Go to this link: https://veemae.github.io/meet-app/
- Sign in using Google Accounts to interact with the application.
- <strong>Disclaimer:</strong> This application has not been verified by Google because it is being hosted on Github, and therefore, not a domain I own. Since Github owns the domain it is being hosted on, the app is flagged as unsafe at the moment. However, this does NOT actually pose any negative risks, since the Google Calendar API being used for this application is owned and created by CareerFoundry for its Web Dev program. This means, the application does not collect any data from its users, whatsoever, and is only being strictly used for educational purposes. So, please continue forward to signing in with your Google account in order to interact with the app. I repeat- no data is collected, so using the app is strictly for educational and demo purposes, and will not affect the users in any negative way. Thank you!

## User Stories 

<b>Feature 1: Filter events by city</b>
<br/>
As a user, I should be able to filter events by city so that I can see the list of events that take place in that city.
<br/>
<br/>
<b>Feature 2: Show/hide an event’s details</b>
<br/>
As a user, I should be able to show/hide event details so that I can see more/less information about an event. 
<br/>
<br/>
<b>Feature 3: Specify number of events</b>
<br/>
As a user, I should be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once. 
<br/>
<br/>
<b>Feature 4: Use the app offline</b>
<br/>
As a user, I should be able to use the app when offline so that I can see the events I viewed the last time I was online. 
<br/>
<br/>
<b>Feature 5: Data visualization</b>
<br/>
As a user, I should be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city. 
<br/>
<br/>
<b>Feature 6: Add an app shortcut to the home screen</b>
<br/>
As a user, I should be able to add the app shortcut to my home screen so that I can open the app faster. 
<br/>
<br/>
## Test Scenarios
<b>Feature 1: Filter events by city</b>
<br/>
Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities
<br/>
Given user hasn’t searched for any city
<br/>
When the user opens the app
<br/>
Then the user should see a list of all upcoming events
<br/>
<br/>
Scenario 2: User should see a list of suggestions when they search for a city
<br/>
Given the main page is open
<br/>
When the user starts typing in the city textbox
<br/>
Then the user should see a list of cities that match what they’ve typed
<br/>
<br/>
Scenario 3: User can select a city from the suggested list
<br/>
Given the user was typing “Berlin” in the city textbox and the list of suggested cities is showing
<br/>
When the user selects a city from the list (e.g., “Berlin, Germany”)
<br/>
Then their city should be changed to that city and the user should receive a list of upcoming events in that city 
<br/>
<br/>
<b>Feature 2: Show/hide an event’s details</b>
<br/>
Scenario 1: An event element is collapsed by default 
<br/>
Given the main page is open, whether filtered by city or not
<br/>
When the user scrolls through the app
<br/>
Then the user should see a list of all upcoming events with their details hidden
<br/>
<br/>
Scenario 2: User can expand an event to see its details
<br/>
Given the main page is open, whether filtered by city or not
<br/>
When the user clicks on the “Show Details” button for any displayed event
<br/>
Then the user should see an expanded view of that event’s details
<br/>
<br/>
Scenario 3: User can collapse an event to hide its details
<br/>
Given an event has been expanded
<br/>
When the user clicks on the “Hide Details” button for that event 
<br/>
Then the user should see the event has been collapsed and its details are hidden 
<br/>
<br/>
<b>Feature 3: Specify number of events</b>
<br/>
Scenario 1: When user hasn’t specified a number, 32 is the default number 
<br/>
Given the main page is open and the user hasn’t specified a number in the “Number of Events” field
<br/>
When the user scrolls through the app
<br/>
Then the user should see a default of 32 events displayed on the main page
<br/>
<br/>
Scenario 2: User can change the number of events they want to see
<br/>
Given the main page is open
<br/>
When the user types in a specific number of events in the “Number of Events” field
<br/>
Then the user should see that specific amount of events displayed on the main page 
<br/>
<br/>
<b>Feature 4: Use the app when offline</b>
<br/>
Scenario 1: Show cached data when there’s no internet connection
<br/>
Given the user is in an area without internet connection
<br/>
When the user opens the app
<br/>
Then the user should see the events they viewed the last time they were online
<br/>
<br/>
Scenario 2: Show error when user changes the settings 
<br/>
Given the user is in an area without internet connection
<br/>
When the user changes the city in the city box
<br/>
Then the user should see an error loading the new data
<br/>
<br/>
<b>Feature 5: Data Visualization</b>
<br/>
Scenario 1: Show a chart with the number of upcoming events in each city
<br/>
Given the user is on the main page
<br/>
When the user scrolls with or without filters by city
<br/>
Then the user should see a chart showing the number of upcoming events in each city 
<br/>
<br/>

