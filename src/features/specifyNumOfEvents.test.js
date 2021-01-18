import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import React from 'react';
import { mount } from 'enzyme';

const feature = loadFeature('./src/features/specifyNumOfEvents.feature');

defineFeature(feature, test => {

    test('When user hasn’t specified a number, 32 is the default number', ({ given, and, when, then }) => {
        let AppWrapper;
        given('the main page is open', () => {
            AppWrapper = mount(<App />);
        });

        and('the user hasn’t specified a number in the “Number of Events” field', () => {

        });

        when('the user scrolls through the app', () => {

        });

        then('the user should see a default of 32 (2 if using mockData) events displayed on the main page', () =>{
            AppWrapper.update();
            expect(AppWrapper.find('.event').length).toBe(2);
        });
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
        let AppWrapper;
        given('the main page is open', () => {
            AppWrapper = mount(<App />);
        });

        when('the user types in a specific number of events in the “Number of Events” field', () => {
            const targetObject = { target: { value: 1 } };
            AppWrapper.find('.eventNumInput').simulate('change', targetObject);
        });

        then('the user should see that specific amount of events displayed on the main page', () => {
            const numOfEventsWrapper = AppWrapper.find('NumberOfEvents');
            numOfEventsWrapper.setState({ numOfEvents: 1 });
            expect(numOfEventsWrapper.state('numOfEvents')).toBe(1);
        });
    });

});