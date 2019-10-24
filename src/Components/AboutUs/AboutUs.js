import React from 'react';
import chop from './chop.jpg';

export default class AboutUs extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 order-md-last">
                        <img id="aboutImg" src={chop}></img>
                    </div>
                    <div className="col-md-8 order-md-first">

                    </div>
                </div>
            </div>
        );
    }
}