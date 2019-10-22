import React from 'react';

import { Tabs, Tab } from 'react-bootstrap-tabs';
import PopulateTable from './PopulateTable.js';


class NavGroup extends React.Component {
    render() {
        return (
            <div id="montserrat">
                <Tabs onSelect={(index, label) => console.log(label + " selected")}>
                    <Tab label="Appetizers">
                        <PopulateTable
                            menu="appetizers"
                            check={this.props.check} />
                    </Tab>
                    <Tab label="Breakfast">
                        <PopulateTable
                            menu="breakfast"
                            check={this.props.check} />
                    </Tab>
                    <Tab label="Lunch">
                        <PopulateTable
                            menu="lunch"
                            check={this.props.check} />
                    </Tab>
                    <Tab label="Main Course">
                        <PopulateTable
                            menu="main course"
                            check={this.props.check} />
                    </Tab>
                    <Tab label="Sides">
                        <PopulateTable
                            menu="sides"
                            check={this.props.check} />
                    </Tab>
                    <Tab label="Dessert">
                        <PopulateTable
                            menu="dessert"
                            check={this.props.check} />
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default NavGroup;