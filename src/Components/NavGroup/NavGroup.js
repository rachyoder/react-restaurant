import React from 'react';

import { Tabs, Tab } from 'react-bootstrap-tabs';
import PopulateTable from './PopulateTable.js';

import './NavGroup.css';

import appetizer from './appetizer.jpg';
import breakfast from './breakfast.jpg';
import dessert from './dessert.jpg';
import lunch from './lunch.jpg';
import main_course from './main-course.jpg';
import sides from './sides.jpg';



class NavGroup extends React.Component {
    render() {
        return (
            <div id="montserrat">
                <Tabs>
                    <Tab className="cursor" label="Appetizers">
                        <PopulateTable
                            menu="appetizers"
                            src={appetizer} />
                    </Tab>
                    <Tab className="cursor" label="Breakfast">
                        <PopulateTable
                            menu="breakfast"
                            src={breakfast} />
                    </Tab>
                    <Tab className="cursor" label="Lunch">
                        <PopulateTable
                            menu="lunch"
                            src={lunch} />
                    </Tab>
                    <Tab className="cursor" label="Main Course">
                        <PopulateTable
                            menu="main_course"
                            src={main_course} />
                    </Tab>
                    <Tab className="cursor" label="Sides">
                        <PopulateTable
                            menu="sides"
                            src={sides} />
                    </Tab>
                    <Tab className="cursor" label="Dessert">
                        <PopulateTable
                            menu="dessert"
                            src={dessert} />
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default NavGroup;