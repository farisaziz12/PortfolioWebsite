import React from 'react';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import { Router, Route, Link, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      {/* <Router> 
        <Switch> */}
          <Header/>
          <Body/>
        {/* </Switch>
      </Router> */}
    </>
  );
}

export default App;
