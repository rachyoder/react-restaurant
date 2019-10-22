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
				name: 'appetizers',
				href: '#appetizers',
				className: 'nav-link active',
				class: 'tab-pane fade show active',
				id: "appetizers-tab",
				role: 'tab',
				select: 'true'
			}, {
				name: 'breakfast',
				href: '#breakfast',
				className: 'nav-link',
				class: 'tab-pane fade',
				id: 'breakfast-tab',
				role: 'tab',
				select: 'false'
			}, {
				name: 'lunch',
				href: '#lunch',
				className: 'nav-link',
				class: 'tab-pane fade',
				id: 'lunch-tab',
				role: 'tab',
				select: 'false'
			}, {
				name: 'main course',
				href: '#main-course',
				className: 'nav-link',
				class: 'tab-pane fade',
				id: 'main-course-tab',
				role: 'tab',
				select: 'false'
			}, {
				name: 'sides',
				href: '#sides',
				className: 'nav-link',
				class: 'tab-pane fade',
				id: 'sides-tab',
				role: 'tab',
				select: 'false'
			}, {
				name: 'dessert',
				href: '#dessert',
				className: 'nav-link',
				class: 'tab-pane fade',
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
