import React from "react";
import Welcome from "./components/welcome/Welcome";
import Student from "./components/student/Student";
import Name from "./components/Name";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Welcome to Full Stack Development - 1</h1>
      
      <React.Fragment>
        <Welcome />
        <Name fnm="Jon" lnm="Seltzer"/>
        <Student college="George Brown College"/>
      </React.Fragment>
      </header>
    </div>
  );
}

export default App;
