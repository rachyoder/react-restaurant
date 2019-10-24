import React from 'react';
import './Header.css';
import Jumbotron from '../Jumbotron/Jumbotron';
import Navbar from './Navbar';

class Header extends React.Component {


    render() {
        return (
            <React.Fragment>
                <header className="masthead">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12  mt-3 text-center">
                                <Jumbotron title={this.props.title} lead={this.props.lead} />
                            </div>
                        </div>
                    </div>
                </header>
                <Navbar brand="Bourgeoisie" />
            </React.Fragment>
        );
    }
}

export default Header;