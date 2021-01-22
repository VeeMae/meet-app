import React, { Component } from 'react';
import { WarningAlert } from './Alert';
import Moment from 'moment';

class Event extends Component {
    state = {
        showDetails: false
    }

    handleShowDetails = () => {
        if (this.state.showDetails === false) {
            this.setState({
                showDetails: true,
                infoText: 'Please make sure to check the timezone to participate in the event at the proper time. Thank you!'
            });

        }
        else {
            this.setState({
                showDetails: false,

            })
        }
    };

    render() {
        const { event } = this.props;
        const eventTime = Moment(event.start.dateTime).format('MM-DD-YYYY');

        return (
            <div className="event">
                <div className="eventCard">
                    <h1 className="eventCard--name">{event.summary}</h1>
                    <p className="eventCard--date"><span>Starts at: </span>{eventTime}</p>
                    <p className="eventCard--date"><span>Timezone: </span>{event.start.timeZone}</p>
                    <p className="eventCard--location"><span>Location: </span>{event.location}</p>

                    {!this.state.showDetails &&
                        <button className="details-btn" onClick={() => this.handleShowDetails()}>Show Details</button>
                    }

                    {this.state.showDetails &&
                        (<div className="eventExpanded">
                            <WarningAlert text={this.state.infoText} />
                            <button className="eventCard--link"><a href={event.htmlLink}>Click to Attend Event</a></button>
                            <p className="eventCard--description"><span>Description: </span>{event.description}</p>
                            <p className="eventCard--organizer"><span>Organizer: </span>{event.organizer.email}</p>
                            <button className="details-btn" onClick={() => this.handleShowDetails()}>Hide Details</button>

                        </div>)

                    }
                </div>
            </div>
        );
    }
}

export default Event;