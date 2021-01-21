import React, { Component } from 'react';
import { InfoAlert } from './Alert';

class CitySearch extends Component {
    state = {
        query: '',
        suggestions: [],
        showSuggestions: undefined
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        const suggestions = this.props.locations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1
        });
        if (suggestions.length === 0) {
            this.setState({
                query: value,
                infoText: "City unavailable. Please type another city.",
                showSuggestions: false
            });
        } else {
            return this.setState({
                query: value,
                suggestions,
                infoText: '',
                showSuggestions: true
            });
        }
    };

    handleItemClicked = (suggestion) => {
        this.setState({
            query: suggestion,
            infoText: '',
            showSuggestions: false
        });

        this.props.updateEvents(null, suggestion);
    }

    render() {
        return (
            <div className="CitySearch">
                <InfoAlert text={this.state.infoText} />
                <label className="CitySearch-label">Search for a City:</label>
                <input
                    type="text"
                    className="city"
                    value={this.state.query}
                    onChange={this.handleInputChanged}
                    onFocus={() => { this.setState({showSuggestions: true}) }}
                />
                <ul  className="suggestions" style={this.state.showSuggestions ? {} : { display: 'none' }}>
                    {this.state.suggestions.map((suggestion) => (
                        <li key={suggestion} onClick={() => this.handleItemClicked(suggestion)}>{suggestion}</li>
                    ))}
                        <li key='all' onClick={() => this.handleItemClicked('all')}>
                            <b>See all cities</b>
                        </li>
                </ul>
            </div>
        );
    }
}

export default CitySearch;