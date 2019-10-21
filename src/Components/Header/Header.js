import React from 'react';
import './Header.css';
import Jumbotron from '../Jumbotron/Jumbotron';

class Header extends React.Component {


    render() {
        return (
            <header className="masthead">
                <div className="container">
                    <div className="row h-100 align-items-center">
                        <div className="col-12  mt-5 text-center">
                            <Jumbotron title="Restaurant" lead="The best place to find food at exuberant rates!" />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;