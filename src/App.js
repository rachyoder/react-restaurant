import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import Header from './Components/Header/Header.js';
import Navbar from './Components/Navbar.js';

class App extends React.Component {

	render() {

		return (
			<div className="App">
				<Header />
				<Navbar brand="Restaurant"/>
			</div>
		);
	}
}


export default App;
