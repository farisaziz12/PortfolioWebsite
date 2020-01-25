import React from 'react';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import { Router, Route, Link, Switch } from 'react-router-dom'

class App extends React.Component{
  state = {
    width: window.innerWidth
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };


  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    // if (isMobile) {
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
    // } else {
      // return (
      //   <>
      //   <Header/>
      //   <Body/>       
      //   </>
      // )
    // }
  }
}

export default App;
