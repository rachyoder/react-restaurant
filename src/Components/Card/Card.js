import React from 'react';
import PopulateItems from '../PopulateItems';

class Card extends React.Component {
    render() {
        return (
            <div className="card cardStyle">
                <img
                    className="card-img-top"
                    src={this.props.imgSrc}
                    alt={this.props.imgAlt}
                />
                <div className="card-body">
                    <h5 id={this.props.font} className="card-title text-center cardTitle">{this.props.title}</h5>
                    <hr />
                    <p id={this.props.bodyFont} className="card-text text-center cardBody">{this.props.desc}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <PopulateItems items={this.props.contact} />
                </ul>
            </div>
        );
    }
}

export default Card;
