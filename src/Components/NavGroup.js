import React from 'react';
import PopulateItems from './PopulateItems.js';

class NavGroup extends React.Component {
    render() {
        return (
            <div id="montserrat">
                <ul className="nav nav-tabs" id="menu" role="tablist">
                    <PopulateItems items={this.props.menuCats} />
                </ul>
                <div className="tab-content" id="menuContent">

                </div>
            </div>
        );
    }
}

export default NavGroup;