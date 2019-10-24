import React from 'react';
import './Map.css';

export default class Map extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <hr />
                        <h2 className="text-center my-3" id="display">Where To Find Us</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <iframe
                        className="map"
                        title="map"
                        width="100%"
                        height="600"
                        src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=348%20E.%20Main%20St%20Lexington%2C%20KY+(Bourgeoisie)&amp;ie=UTF8&amp;t=&amp;z=16&amp;iwloc=B&amp;output=embed"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0" />
                </div>
            </div>
        );
    }
}