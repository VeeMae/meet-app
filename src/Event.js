import React, { Component } from 'react';

class Event extends Component {
    state = {
        showDetails: false
    }

    handleShowDetails = () => {
        if (this.state.showDetails === false) {
            this.setState({ showDetails: true });
        }
        else {
            this.setState({ showDetails: false })
        }
    };

    render() {
        const event = this.props.event;

        return (
            <div className="event">
                <div className="eventCard">
                    <p className="eventCard--name">{event.summary}</p>
                    <p className="eventCard--date">{event.start}</p>
                    <p className="eventCard--location">{event.location}</p>

                    {!this.state.showDetails &&
                        <button className="details-btn" onClick={() => this.handleShowDetails()}>Show Details</button>
                    }

                    {this.state.showDetails &&
                        (<div className="eventExpanded">
                            <p className="eventCard--link">{event.htmlLink}</p>
                            <p className="eventCard--description">{event.description}</p>
                            <button className="details-btn" onClick={() => this.handleShowDetails()}>Hide Details</button>
                        </div>)
                    }
                </div>
            </div>
        );
    }
}

export default Event;