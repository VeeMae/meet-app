import React, { Component } from 'react';
import { getEvents } from './api';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventGenre from './EventGenre';
import { OfflineWarning } from './Alert';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';


class App extends Component {
    state = {
        events: [],
        locations: [],
        numOfEvents: 32,
        currentLocation: 'all'
    }

    componentDidMount() {
        this.mounted = true;
        if (this.mounted) {
          this.updateEvents();
        }
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
            // If no eventCount argument is passed to updateEvents() (like when componentDidMount() calls it),
            // It will default to slicing the numOfEvents that is already in the state.
            const numEvents = eventCount || this.state.numOfEvents;
            const filteredEvents = locationEvents.slice(0, numEvents);
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

    getData = () => {
        const { locations, events } = this.state;
        const data = locations.map((location) => {
            const number = events.filter((event) => event.location === location).length;
            const city = location.split(' ').shift();
            return { city, number };
        })
        return data;
    }


    render() {
         return (
             <div className="App">
                 <h1>Meet App</h1>
                 <h3>A Place to Find Events Near Your City</h3>
                <OfflineWarning text={this.state.infoText} />
                <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
                <NumberOfEvents numOfEvents={this.state.numOfEvents} updateEvents={this.updateEvents} />

                <h2>Events in Each City</h2>
                 <div className="data-vis-wrapper">
                    <EventGenre events={this.state.events} />
                    <ResponsiveContainer height={400}>
                        <ScatterChart margin={{ top: 20, right: 0, bottom: 20, left: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="category" dataKey="city" name="City" />
                            <YAxis type="number" dataKey="number" name="Number of events" allowDecimals={false} />
                            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                            <Scatter data={this.getData()} fill="#8884d8" />
                        </ScatterChart>
                    </ResponsiveContainer>
                </div>

                <EventList events={this.state.events} />
            </div>
        );
     }
}

export default App;
