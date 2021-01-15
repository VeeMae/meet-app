import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {

    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {} }/>);
    })

    test('render NumberOfEvents div', () => {
       expect(NumberOfEventsWrapper.find('.NumberOfEvents')).toHaveLength(1)
    })

    test('default number of events is 32', () => {
        expect(NumberOfEventsWrapper.state('numOfEvents')).toBe(32);
    })

    test('render number of events label', () => {
        expect(NumberOfEventsWrapper.find('.eventNumLabel')).toHaveLength(1);
    })

    test('render number of events input box', () => {
        expect(NumberOfEventsWrapper.find('.eventNumInput')).toHaveLength(1);
    })

    test('renders text input correctly', () => {
        const query = NumberOfEventsWrapper.state('numOfEvents');
        expect(NumberOfEventsWrapper.find('.eventNumInput').prop('value')).toBe(query);
    });

    test('text input should change numOfEvents state', () => {
        NumberOfEventsWrapper.setState({ numOfEvents: 32 });

        const eventObject = { target: { value: 1 } }
        NumberOfEventsWrapper.find('.eventNumInput').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('numOfEvents')).toBe(1);
    });

    test('state is 0 when number < 0 and a console.error is thrown', () => {
        const eventObject = { target: { value: 0 } }
        NumberOfEventsWrapper.find('.eventNumInput').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('numOfEvents')).toBe(0);
    });

})
