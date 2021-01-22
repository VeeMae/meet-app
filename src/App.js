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

    componentDidMount() {
        this.mounted = true;
        getEvents().then((response) => {
          if (this.mounted) {
            this.setState({
              events: response.events.slice(0, this.state.numOfEvents),
              locations: response.locations,
            });
          }
        });
        window.addEventListener('offline', this.networkChangeHandler());
        window.addEventListener('online', this.networkChangeHandler());
      }

    componentWillUnmount(){
        this.mounted = false;
    }

    updateEvents = (location, eventCount) => {
        if (location) {
          getEvents().then((response) => {
            const locationEvents =
              location === 'all'
                ? response.events
                : response.events.filter((event) => event.location === location);
            const filteredEvents = locationEvents.slice(0, this.state.numOfEvents);
            return this.setState({
              events: filteredEvents,
              currentLocation: location,
              locations: response.locations,
            });
          });
        } else {
          getEvents().then((response) => {
            const locationEvents =
              this.state.currentLocation === 'all'
                ? response.events
                : response.events.filter(
                    (event) => event.location === this.state.currentLocation
                  );
            const filteredEvents = locationEvents.slice(0, eventCount);
            return this.setState({
              events: filteredEvents,
              numOfEvents: eventCount,
              locations: response.locations,
            });
          });
        }
      };

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
                <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
                <NumberOfEvents numOfEvents={this.state.numOfEvents} updateEvents={this.updateEvents}/>
                 <EventList events={this.state.events} />
            </div>
        );
     }
}

export default App;
