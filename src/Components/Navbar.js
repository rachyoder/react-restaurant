import React from 'react';

class NavbarItems extends React.Component {
    render() {
        return (
            this.props.items.map((item, idx) => {
                return (<li key={idx} className="nav-item">
                    <a href="#" className="nav-link px-2 mx-4">{item}</a>
                </li>)
            })
        );
    }
}

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarLeft: ["About Us", "Menu"],
            navbarRight: ["Location", "Contact"]
        }
    }

    render() {
        return (
            <nav className="navbar navbar-light navbar-expand-lg sticky-top">
                <div className="container">
                    <a className="navbar-brand d-lg-none" href="#">{this.props.brand}</a>
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
                        <ul className="navbar-nav mr-auto">
                            <NavbarItems items={this.state.navbarLeft} />
                        </ul>
                        <a className="navbar-brand d-none d-lg-flex mx-auto font-weight-bold" href="#">{this.props.brand}</a>
                        <ul class="navbar-nav ml-auto">
                            <NavbarItems items={this.state.navbarRight} />
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;