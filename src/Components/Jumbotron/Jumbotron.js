import React from 'react';
import './Jumbotron.css';

class Jumbotron extends React.Component {
    render() {
        return (
            <div className="jumbotron mt-5" id="jumbotron">
                <h1 className="display-4" id="display">{this.props.title}</h1>
                <p className="lead" id="montserrat">{this.props.lead}</p>
                <hr />
                <span id="montserrat" className="loc text-muted">348 E. Main St.</span>
                <span id="montserrat" className="time text-muted">8:30AM - 11:00PM</span>
            </div>
        );
    }
}

export default Jumbotron;