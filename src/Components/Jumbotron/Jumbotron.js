import React from 'react';
import './Jumbotron.css';

class Jumbotron extends React.Component {
    render() {
        return (
            <div className="jumbotron mt-5" id="jumbotron">
                <h1 className="display-4" id="display">{this.props.title}</h1>
                <p className="lead" id="montserrat">{this.props.lead}</p>
            </div>
        );
    }
}

export default Jumbotron;