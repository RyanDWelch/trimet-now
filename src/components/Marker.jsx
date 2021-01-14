import React, { Component } from 'react';

export default class Marker extends React.Component {

    render() {
        return (
            <div
                alt={this.props.text}
                key={this.props.vehicleID}
                className={this.props.type + " " + this.props.type + this.props.data.routeNumber + " vehicle" + " " + "marker2"}
                onClick={(e) => this.props.onClick(this.props.data.vehicleID)}
            >
                <div className="routeNumber">{this.props.data.routeNumber}</div>
                <div className="vehicle-infobox">
                <div>{this.props.data.signMessageLong}</div>
                <div>{this.props.data.vehicleID}</div>
                </div>
            </div>
        )
    }
}