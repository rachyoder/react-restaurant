import React from 'react';
import './Header.css';
import Jumbotron from '../Jumbotron/Jumbotron';

class Header extends React.Component {


    render() {
        return (
            <header className="masthead">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12  mt-5 text-center">
                            <Jumbotron title={this.props.title} lead={this.props.lead} />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;