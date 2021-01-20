import React, { Component } from 'react';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = null;
    }

    getStyle = () => {
        return {
            color: this.color
        };
    }

    render() {
        return (
            <div className="Alert">
                <p style={this.getStyle()}>{this.props.text}</p>
            </div>
        )
    }
}

class InfoAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = '#125E8A'
    };
}


class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = '#B80003'
    };
}

class WarningAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = '#ED7D3A'
    };

     render() {
        return (
            <div className="ErrorAlert">
                <p style={this.getStyle()}>{this.props.text}</p>
            </div>
        )
    }
}

export { InfoAlert, ErrorAlert, WarningAlert };