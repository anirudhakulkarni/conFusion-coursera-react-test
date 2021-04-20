import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';

import './App.css';
import Person from './Person/Person';
import Navbar from './Navbar/Navbar';
class App extends Component {
	state = {
		persons: [
			{ name: 'Anirudha', age: 26, id: '16541350' },
			{ name: 'Rahul', age: 19, id: '65411350s' },
			{ name: 'Anirudha', age: 26, id: '654v1350ss' },
			{ name: 'Rahul', age: 19, id: '65413450' },
			{ name: 'Anirudha', age: 26, id: '625v4135s0' },
			{ name: 'Rahul', age: 19, id: '654135v0a' },
			{ name: 'Anirudha', age: 26, id: '6541v3dg50' },
			{ name: 'Rahul', age: 19, id: '654135ve0' },
			{ name: 'Anirudha', age: 26, id: '65xvr41350' },
			{ name: 'Rahul', age: 19, id: '65413x5a0' },
			{ name: 'Anirudha', age: 26, id: '654vzhr1350' },
			{ name: 'Rahul', age: 19, id: '654135t0sh' },
		],
		showpersons: false,
	};

	deletePersonHandler = (personIndex) => {
		const persons = [...this.state.persons]; //= this.state.persons.slice;//
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	};
	nameChaneHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex((p) => {
			return p.id === id;
		});
		const person = { ...this.state.persons[personIndex] };

		person.name = event.target.value;
		const persons = [...this.state.persons];
		persons[personIndex] = person;
		this.setState({ persons: persons });
	};

	togglePersonHandler = () => {
		const doesShow = this.state.showpersons;
		this.setState({ showpersons: !doesShow });
	};

	render() {
		const style = {
			backgroundColor: 'green',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer',
			color: 'white',
			':hover': {
				backgroundColor: 'lightgreen',
				color: 'black',
			},
		};

		let persons = null;
		if (this.state.showpersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
							<Person
								//style={style}
								click={() => this.deletePersonHandler(index)}
								name={person.name}
								age={person.age}
								key={person.id} //get it from database
								changed={(event) => this.nameChaneHandler(event, person.id)}
							/>
						);
					})}
				</div>
			);
			style.backgroundColor = 'red';
			style[':hover'] = {
				backgroundColor: 'salmon',
				color: 'black',
			};
		}
		const classes = [];
		if (this.state.persons.length <= 2) {
			classes.push('red');
		}
		if (this.state.persons.length <= 1) {
			classes.push('bold');
		}

		return (
			<StyleRoot>
				<div className="App">
					<Navbar />
					<div className="main">
						<h1> Hi, I am a React App</h1>
						<p className={classes.join(' ')}>This is working</p>
						<button style={style} onClick={this.togglePersonHandler}>
							Switch Name
						</button>
						{persons};
					</div>
				</div>
			</StyleRoot>
		);
		//return React.createElement('div',null,React.createElement('h1',null,'Is how are you'));
	}
}
export default Radium(App);
