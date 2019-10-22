import React from 'react';
import axios from 'axios';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import Header from './Components/Header/Header.js';
import Navbar from './Components/Navbar.js';
import NavGroup from './Components/NavGroup.js';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mealTypes: [{
				name: 'Appetizers',
				href: '#appetizers',
				className: 'nav-link active',
				id: "appetizers-tab",
				role: 'tab',
				select: 'true'
			}, {
				name: 'Breakfast',
				href: '#breakfast',
				className: 'nav-link',
				id: 'breakfast-tab',
				role: 'tab',
				select: 'false'
			}, {
				name: 'Lunch',
				href: '#lunch',
				className: 'nav-link',
				id: 'lunch-tab',
				role: 'tab',
				select: 'false'
			}, {
				name: 'Main course',
				href: '#main-course',
				className: 'nav-link',
				id: 'main-course-tab',
				role: 'tab',
				select: 'false'
			}, {
				name: 'Sides',
				href: '#sides',
				className: 'nav-link',
				id: 'sides-tab',
				role: 'tab',
				select: 'false'
			}, {
				name: 'Dessert',
				href: '#dessert',
				className: 'nav-link',
				id: 'dessert-tab',
				role: 'tab',
				select: 'false'
			}],
			menu: []
		}
	}

	componentDidMount() {
		axios.get('https://entree-f18.herokuapp.com/v1/menu/12')
			.then(res => {
				this.state.mealTypes.map((mealType, idx) => {
					const menu = res.data;
					this.setState({ menu });
					localStorage.setItem(mealType.name, JSON.stringify(this.state.menu));
				})
			})
	}

	render() {

		return (
			<div className="App">
				<Header />
				<Navbar brand="Restaurant" />
				<NavGroup menuCats={this.state.mealTypes} />
			</div>
		);
	}
}


export default App;
