import React, {Component} from 'react';

class NumberOfEvents extends Component {
    state = {
        numOfEvents: 32
    }

    inputHandler = (event) => {
        const value = event.target.value;
        this.setState({ numOfEvents: value });

        if (value < 1 && this.state.numOfEvents === 0) {
            console.error('Please choose a number greater than 0');
        } else {
            this.setState.numOfEvents = value;
        }

        this.props.updateEvents(null, value);
    }

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
            </div>
        )
    }
}

export default NumberOfEvents;