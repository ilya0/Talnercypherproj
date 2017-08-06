import React, { Component } from 'react';
import logo from './logo.svg';
import Projects from './Components/Projects';
import './App.css';

class App extends Component {

  // this is where the intial state keys are held
constructor(){
  super();
    this.state = {

      projects:[
      {
        Title: "Buisness Website",
        Category: " Web Design"
      }
      ,
      {
        Title:"Social app",
        Category:"Mobile"
      } ,
      {
        Title:"Ecommerce Shopping ",
        Category:"Web Dev"
      }

      ]

    }

};

  render() {
    return (

      <div className="App">
         <Projects projects={this.state.projects}/>

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>


        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>


    );
  }
}

export default App;
