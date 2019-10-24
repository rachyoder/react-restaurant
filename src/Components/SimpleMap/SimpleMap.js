import React from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import './SimpleMap.css';

const mapStyles = {
    width: "100%",
    height: "100%"
};

class SimpleMap extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        }
    }

    onMarkerClick = (props, marker, e) => this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
    });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        return (
            <Map 
                google={this.props.google}
                zoom={16}
                style={mapStyles}
                initialCenter={{
                    lat: 38.042346,
                    lng: -84.492603
                }}
            >
                <Marker 
                    onClick={this.onMarkerClick}
                    name={"Bourgeoisie Fine Dining"}
                />
                <InfoWindow 
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4 id="display">{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyCGYJ1le-VCYvMyngZTYHJHETBmeVohnKA"
})(SimpleMap);