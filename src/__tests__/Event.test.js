import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {

    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockData[0]} />);
    })

    test('render event card', () => {
        expect(EventWrapper.find('.event')).toHaveLength(1);
    })

    test('render the contents of the event card', () => {
        EventWrapper.setState({ showDetails: false });
        expect(EventWrapper.find('.eventCard').children()).toHaveLength(5);
    })

    test('render the eventExpanded element', () => {
        EventWrapper.setState({ showDetails: true });
        expect(EventWrapper.find('.eventExpanded')).toHaveLength(1);
    })

    test('render the contents of the eventExpanded element', () => {
        EventWrapper.setState({ showDetails: true });
        expect(EventWrapper.find('.eventExpanded').children()).toHaveLength(3)
    })

    test('render the show and hide details button', () => {
        expect(EventWrapper.find('.details-btn')).toHaveLength(1);
    })

    test('show event details when clicking "Show Details" btn', () => {
        EventWrapper.setState({ showDetails: false });
        EventWrapper.find('.details-btn').simulate('click');
        expect(EventWrapper.state('showDetails')).toBe(true);
    })

    test('hide event details when clicking "Hide Details" btn', () => {
        EventWrapper.setState({ showDetails: true });
        EventWrapper.find('.details-btn').simulate('click');
        expect(EventWrapper.state('showDetails')).toBe(false);
    })

});
