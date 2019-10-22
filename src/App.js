import React from 'react';
import axios from 'axios';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import Header from './Components/Header/Header.js';
import Navbar from './Components/Navbar.js';
import NavGroup from './Components/NavGroup/NavGroup.js';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mealTypes: [{
				name: 'appetizers'
			}, {
				name: 'breakfast'
			}, {
				name: 'lunch'
			}, {
				name: 'main course'
			}, {
				name: 'sides'
			}, {
				name: 'dessert'
			}]
		}
	}

	componentDidMount() {
		this.state.mealTypes.map((mealType, idx) => {
			if (!(localStorage.getItem(mealType.name))) {
				axios.get('https://entree-f18.herokuapp.com/v1/menu/12')
					.then(res => {
						const menu = res.data;
						localStorage.setItem(mealType.name, JSON.stringify(menu));
					})
			}
		})
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Navbar brand="Restaurant" />
				<section id="menu">
					<NavGroup />
				</section>
			</div>
		);
	}
}

export default App;
