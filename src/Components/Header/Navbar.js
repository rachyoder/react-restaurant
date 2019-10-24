import React from 'react';
import PopulateItems from '../PopulateItems';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarLeft: [{
                name: "About Us",
                href: "#aboutUs",
                className: "nav-link mx-4 px-2"
            }, {
                name: "Menu",
                href: "#menu",
                className: "nav-link mx-4 px-2"
            }],
            navbarRight: [{
                name: "Contact",
                href: "#contact",
                className: "nav-link mx-4 px-2"
            }, {
                name: "Location",
                href: "#location",
                className: "nav-link mx-4 px-2"
            }]
        }
    }

    render() {
        return (
            <nav className="navbar navbar-light navbar-expand-md bg-light sticky-top mb-4">
                <div className="container">
                    <a className="navbar-brand d-md-none" id="display" href="#">{this.props.brand}</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto" id="montserrat">
                            <PopulateItems items={this.state.navbarLeft} />
                        </ul>
                        <a className="navbar-brand d-none d-md-flex mx-auto font-weight-bold" id="display" href="#">{this.props.brand}</a>
                        <ul className="navbar-nav ml-auto" id="montserrat">
                            <PopulateItems items={this.state.navbarRight} />
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;