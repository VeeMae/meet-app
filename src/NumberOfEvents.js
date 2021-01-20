import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
    state = {
        numOfEvents: 32
    }

    inputHandler = (event) => {
        const value = event.target.value;
        this.props.updateEvents(null, value);
        this.setState({ numOfEvents: value });

        if (value < 1) {
            this.setState({
                infoText: 'Please input a number greater than 1.',
            })
        } else {
            this.setState({
                infoText: ''
            })
        }
    };

    render() {
        return (
            <div className="NumberOfEvents">
                <label className="eventNumLabel">Number of Events:</label>
                <input
                    className="eventNumInput"
                    type="number"
                    value={this.state.numOfEvents}
                    onChange={this.inputHandler}
                ></input>
                <div className='ErrorAlert'><ErrorAlert text={this.state.infoText}/></div>
            </div>
        )
    }
}

export default NumberOfEvents;