import React from 'react';
import './App.css';
import SEBody from './SEComponents/SEBody';
import { Router, Route, Link, Switch } from 'react-router-dom'
import CFBody from './CFComponents/CFBody';
import Header from './MainComponents/Header';


class App extends React.Component{
  state = {
    width: window.innerWidth, 
    portfolioType: "SE"
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

  toggleContent = () => {
    this.setState({portfolioType: this.state.portfolioType === "SE"? "CF" : "SE"})
  }


  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    // if (isMobile) {
      return (
        <>
            {/* <Switch>  */}
              {/* <Route exact path='/'>  */}
                <Header type={this.state.portfolioType} toggleContent={this.toggleContent}/>
                {this.state.portfolioType === "SE"&&
                  <SEBody/>
                }
                {this.state.portfolioType === "CF"&&
                  <CFBody/>
                }
              {/* </Route>  */}
              {/* <Route exact path='/cf'> 
                
              </Route>  */}
             {/* </Switch> */}
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
