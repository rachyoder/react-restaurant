import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <img
                    className="card-img-top"
                    src={this.props.imgSrc}
                    alt={this.props.imgAlt}
                />
                <div className="card-body">
					<h5 className="card-title">{this.props.title}</h5>
					<p className="card-text">{this.props.desc}</p>
                </div>
            </div>
        ); 
	}
}

export default Card;
