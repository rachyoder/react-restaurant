import React from 'react';
import chop from './chop.jpg';
import dining from './dining.jpg';
import './AboutUs.css';

export default class AboutUs extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row my-4">
                    <div className="col-md-8 order-md-last my-4">
                        <div className="aboutRight">
                            <h3 id="display" className="aboutHead">The Finest Ingredients...</h3>
                            <p id="montserrat" className="aboutBody">

                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 order-md-first my-4">
                        <div className="imgStyle ">
                            <img className="aboutImg" src={chop}></img>
                        </div>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col-md-8 my-4">

                    </div>
                    <div className="col-md-4 my-4">
                        <div className="imgStyle">
                            <img className="aboutImg" src={dining}></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}