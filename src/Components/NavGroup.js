import React from 'react';

import { Tabs, Tab } from 'react-bootstrap-tabs';
import PopulateTable from './PopulateTable.js';


class NavGroup extends React.Component {
    render() {
        return (
            <div id="montserrat">
                <Tabs>
                    <Tab label="Appetizers">
                        <PopulateTable
                            menu="appetizers" />
                    </Tab>
                    <Tab label="Breakfast">
                        <PopulateTable
                            menu="breakfast" />
                    </Tab>
                    <Tab label="Lunch">
                        <PopulateTable
                            menu="lunch" />
                    </Tab>
                    <Tab label="Main Course">
                        <PopulateTable
                            menu="main course" />
                    </Tab>
                    <Tab label="Sides">
                        <PopulateTable
                            menu="sides" />
                    </Tab>
                    <Tab label="Dessert">
                        <PopulateTable
                            menu="dessert" />
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default NavGroup;