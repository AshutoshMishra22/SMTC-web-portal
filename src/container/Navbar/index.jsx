import React from 'react';
import { Anchor, Image } from '../../component';
import { Nav } from './NavbarStyle';
function Navbar() {
	const navbarList = ['Home', 'About', 'Contact Us', 'Blog'];
	return (
		<Nav>
			<Image
				src='https://cracku.in/latest-govt-jobs/wp-content/uploads/2019/07/Government-of-India.jpg'
				alt='LOGO'
			/>
			<ul className='navigation-list'>
				{navbarList.map((item, index) => (
					<li key={`${item}-${index}`}>
						<Anchor href={`/${item}`}>{item}</Anchor>
					</li>
				))}
			</ul>
		</Nav>
	);
}
export default Navbar;
