import React from 'react';
import './Jumbotron.css';

class Jumbotron extends React.Component {
    render(props) {
        return (
            <div className="jumbotron my-auto" id="jumbotron">
                <h1 className="display-4" id="display">{this.props.title}</h1>
                <p className="lead" id="montserrat">{this.props.lead}</p>
            </div>
        );
    }
}

export default Jumbotron;