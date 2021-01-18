import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import React from 'react';
import { mockData } from '../mock-data';
import { mount } from 'enzyme';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default', ({ given, when, then }) => {
        let AppWrapper;
        given('the main page is open, whether filtered by city or not', () => {
            AppWrapper = mount(<App />);
        });

        when('the user scrolls through the app', () => {

        });

        then('the user should see a list of all upcoming events with their details hidden', () => {
            expect(AppWrapper.find('.eventExpanded')).toHaveLength(0);
        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
        let AppWrapper;
        given('the main page is open, whether filtered by city or not', () => {
            AppWrapper = mount(<App />);

        });

        when('the user clicks on the “Show Details” button for any displayed event', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
            AppWrapper.find('.event .details-btn').at(0).simulate('click');
        });

        then('the user should see an expanded view of that event’s details', () => {
            expect(AppWrapper.find('.event .eventExpanded')).toHaveLength(1);
        });
    });


    test('User can collapse an event to hide its details', ({ given, when, then, and }) => {
        let AppWrapper;
        given('an event has been expanded', async () => {
            AppWrapper = await mount(<App />);
            await AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
            AppWrapper.find('.event .details-btn').at(0).simulate('click');
            expect(AppWrapper.find('.event .eventExpanded')).toHaveLength(1);
        });

        when('the user clicks on the “Hide Details” button for that event', () => {
            AppWrapper.find('.event .details-btn').at(0).simulate('click');
        });

        then('the user should see the event has been collapsed', () => {
            expect(AppWrapper.find('.event .eventExpanded')).toHaveLength(0);
        });

        and('its details are hidden', () => {
            expect(AppWrapper.find('.event .eventExpanded')).toHaveLength(0);
        });
    });

});