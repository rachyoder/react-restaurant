import React from 'react';

import { Tabs, Tab } from 'react-bootstrap-tabs';
import PopulateTable from './PopulateTable.js';

import './NavGroup.css';


class NavGroup extends React.Component {
    render() {
        return (
            <div id="montserrat">
                <Tabs>
                    <Tab className="cursor" label="Appetizers">
                        <PopulateTable
                            menu="appetizers" />
                    </Tab>
                    <Tab className="cursor" label="Breakfast">
                        <PopulateTable
                            menu="breakfast" />
                    </Tab>
                    <Tab className="cursor" label="Lunch">
                        <PopulateTable
                            menu="lunch" />
                    </Tab>
                    <Tab className="cursor" label="Main Course">
                        <PopulateTable
                            menu="main course" />
                    </Tab>
                    <Tab className="cursor" label="Sides">
                        <PopulateTable
                            menu="sides" />
                    </Tab>
                    <Tab className="cursor" label="Dessert">
                        <PopulateTable
                            menu="dessert" />
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default NavGroup;