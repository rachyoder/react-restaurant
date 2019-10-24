import React from 'react';
import axios from 'axios';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import Header from './Components/Header/Header.js';
import Navbar from './Components/Navbar.js';
import NavGroup from './Components/NavGroup/NavGroup.js';
import Map from './Components/Map/Map';
import ContactCard from './Components/ContactCard';
import AboutUs from './Components/AboutUs/AboutUs';


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
				name: 'main_course'
			}, {
				name: 'sides'
			}, {
				name: 'dessert'
			}],
			menu: []
		}
	}

	componentDidMount() {
		this.state.mealTypes.map((mealType, idx) => {
			if (!(localStorage.getItem(mealType.name))) {
				axios.get('https://entree-f18.herokuapp.com/v1/menu/12')
					.then(res => {
						const menu = res.data;
						localStorage.setItem(mealType.name, JSON.stringify(menu));
						this.setState({menu: "filled"});
					})
			}
		})
	}

	render() {
		return (
			<div className="App">
				<Header title="Bourgeoisie" lead="High End Dining at High End Prices" />
				<Navbar brand="Bourgeoisie" />
				<section id="aboutUs">
					<AboutUs />
				</section>
				<section id="menu">
					<NavGroup />
				</section>
				<section id="location">
					<Map />
				</section>
				<section id="contact">
					<ContactCard />
				</section>
			</div>
		);
	}
}

export default App;
