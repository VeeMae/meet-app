import React, { Component } from 'react';
import { WarningAlert } from './Alert';

class Event extends Component {
    state = {
        showDetails: false
    }

    handleShowDetails = () => {
        if (this.state.showDetails === false) {
            this.setState({ showDetails: true });
        }
        else {
            this.setState({
                showDetails: false,
                infoText: 'Please make sure to check the timezone to participate in the event at the proper time. Thank you!'
            })
        }
    };

    render() {
        const { event } = this.props;

        return (
            <div className="event">
                <div className="eventCard">
                    <h1 className="eventCard--name">{event.summary}</h1>
                    <p className="eventCard--date">Starts at: {event.start.dateTime}</p>
                    <p className="eventCard--date">Timezone: {event.start.timeZone}</p>
                    <p className="eventCard--location">Location: {event.location}</p>

                    {!this.state.showDetails &&
                        <button className="details-btn" onClick={() => this.handleShowDetails()}>Show Details</button>
                    }

                    {this.state.showDetails &&
                        (<div className="eventExpanded">
                            <WarningAlert text={this.state.infoText} />
                            <p className="eventCard--link"><a href={event.htmlLink}>Link to Calendar Invite</a></p>
                        <p className="eventCard--description">Description: {event.description}</p>
                        <p className="eventCard--organizer">Organizer: {event.organizer.email}</p>
                            <button className="details-btn" onClick={() => this.handleShowDetails()}>Hide Details</button>

                        </div>)

                    }
                </div>
            </div>
        );
    }
}

export default Event;