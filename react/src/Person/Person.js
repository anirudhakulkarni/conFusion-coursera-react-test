import React from 'react';
import Radium from 'radium';
import './Person.css';
const person = (props) => {
	const style = {
		width: '200px',
		'@media (min-width: 500px)': {
			width: '50px',
		},
	};
	return (
		<div className="Person" style={style}>
			<h3 onClick={props.click}>
				I am <i>{props.name}</i> and I am {props.age} years old
			</h3>
			<p>{props.children}</p>
			<input type={'text'} onChange={props.changed} />
		</div>
	);
};
export default Radium(person);
