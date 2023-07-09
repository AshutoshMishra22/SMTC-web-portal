import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import { Header } from './indexStyle';

function BaseComponent(params) {
	return (
		<>
			<Header>
				<Navbar />
			</Header>
			<main>
				<Home />
			</main>
		</>
	);
}
export default BaseComponent;
