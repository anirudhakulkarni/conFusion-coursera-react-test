import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  const app = {
    persons:[
      {name:"Anirudha",age:"19"},
      {name:"Aman", age:"20"}
    ]
  };
  switchNameHandler=()=>{
    //console.log("test");
    this.setState({ persons:[
      {name:"1Anirudha",age:"19"},
      {name:"1Aman", age:"20"}
    ]})
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, this is a React App</h1>
        <p>This is gonna be interesting! </p>
        <button onClick ={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>


      </div>
    );
  }
}

export default App;
