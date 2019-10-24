import React from 'react';
import Card from './Card.js';
import wine from './wine.jpg';
import './ContactCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class ContactCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contact: ["348 E. Main St., Lexington, KY","(859) 555-7689","finedining@bourgeoisie.com"]
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8 pr-0">
                        <Card font="display" bodyFont="montserrat" title="Reserve A Seat Today" desc="Call and request a seat at our Five Star Dining Establishment Today!" contact={this.state.contact} />
                    </div>
                    <div className="col-4 pl-0">
                        <img className="contactImg" src={wine} alt="person pouring a glass of wine"></img>
                    </div>
                </div>
            </div>
        );
    }
}