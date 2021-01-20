import React, { Component } from 'react';
import { extractLocations, getEvents } from './api';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { OfflineWarning } from './Alert';


class App extends Component {
    state = {
        events: [],
        locations: [],
        numOfEvents: 32,
        currentLocation: 'all'
    }

    updateEvents = (location, eventCount) => {
        if (location) {
          getEvents().then((events) => {
            const locationEvents = (location === 'all') ?
                events :
                events.filter((event) => event.location === location);
                const filteredEvents = locationEvents.slice(0, this.state.numOfEvents);
                return this.setState({
                 events: filteredEvents,
                 currentLocation: location,
                 locations: events.locations
                });
            });
        } else {
            getEvents().then((events) => {
                const locationEvents = (this.state.currentLocation === 'all') ? events : events.filter((event) => event.location === this.state.currentLocation);
                const filteredEvents = locationEvents.slice(0, eventCount);
                return this.setState({
                    events: filteredEvents,
                    numOfEvents: eventCount,
                    locations: events.locations
                });
            });
        }
    }

    componentDidMount() {
        this.mounted = true;
        getEvents().then((events) => {
            if (this.mounted) {
                this.setState({
                    events: events.slice(0, this.state.numOfEvents),
                    locations: extractLocations(events)
                });
            }
        });
        window.addEventListener('offline', this.networkChangeHandler());
        window.addEventListener('online', this.networkChangeHandler());

    }

    componentWillUnmount(){
        this.mounted = false;
    }

    networkChangeHandler = () => {
        if (navigator.onLine === false) {
            return this.setState({
                infoText: 'No network connection detected. In order to get a list of updated events, please connect to a network.'
            });
        } else {
            return this.setState({
                infoText: ''
            });
        }
    }


    render() {
         return (
             <div className="App">
                 <OfflineWarning text={this.state.infoText} />
                 <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
                 <NumberOfEvents numOfEvents={this.state.numOfEvents} updateEvents={this.updateEvents}/>
                 <EventList events={this.state.events}/>
            </div>
        );
     }
}

export default App;
