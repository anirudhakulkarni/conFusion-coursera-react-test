import React from 'react';
import './Navbar.css';
const navbar = (props) => {
	return (
		<div className="Navbar">
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Feed</li>
				<li>Sign up</li>
				<li>Sign in</li>
				<li>Contact us</li>
				<li>Team</li>
			</ul>
		</div>
	);
};
export default navbar;
