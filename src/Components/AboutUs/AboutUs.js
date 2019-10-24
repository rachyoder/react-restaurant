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
                        <div className="aboutRight ml-lg-5">
                            <h3 id="display" className="aboutHead">The Finest Ingredients...</h3>
                            <p id="montserrat" className="aboutBody">
                                Bourgeoisie Fine Dining has always catered to the most specific of tastes. We pride ourselves in fulfilling even the most snobbish of patrons whimsical desires. Our fresh ingredients will have you savouring every bite of your meal. Even our chefs are trained in the art of Fine Dining, taken at birth and held in the Catacombs of Paris, training and becoming indoctrinated into highly trained Chefs. 
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
                    <div className="aboutLeft ml-lg-5">
                            <h3 id="display" className="aboutHead">Quality Dining...</h3>
                            <p id="montserrat" className="aboutBody">
                                Our dining area has hosted many influential and famous patrons from A.A. Milne to Z.Z. Top. Our World-Class staff can and will cater to your every desire and whim to enusre you are wholly satisfied with your dining experience. To ensure total satisfaction with your meal, we thoroughly vet any potential patrons to make sure they meet the standards of our high class establishment.
                            </p>
                        </div>
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