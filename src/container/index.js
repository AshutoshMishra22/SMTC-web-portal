import React from 'react';
import Navbar from './Navbar';
import Home from './Home';

function BaseComponent(params) {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<Home />
			</main>
		</>
	);
}
export default BaseComponent;
