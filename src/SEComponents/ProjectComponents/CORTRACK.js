import React, {Component} from 'react';
import PopPop from 'react-poppop';
import './Button.css'
import './Text.css'

export default class CORTRACK extends Component {
    state = {
      show: false
    }


  toggleShow = show => {
    this.setState({show});
  }

  render() {
    const {show} = this.state;
    return (
      <div>
        <button class="gradient-multiline" onClick={() => this.toggleShow(true)}>CorTack</button>
        <PopPop position="centerCenter"
                open={show}
                closeBtn={true}
                closeOnEsc={true}
                onClose={() => this.toggleShow(false)}
                closeOnOverlay={true}>
          <h1>CorTack</h1>
          <p className='paragraph-text'>
          CorTrack is a web application built with a React.js frontend and a Node.js backend with the purpose of providing an intuitive way to get all the information you need on the COVID-19 pandemic. 
          It includes an interactive map with information on cases around the globe and a section for searching specific news and data per country.
          </p>
          <button class="gradient-multiline-button"><a href='https://cortrack.netlify.com/'>Check out the live website</a></button>
          <button class="gradient-multiline-button"><a href='https://github.com/farisaziz12/cortrack_frontend'>Source Code</a></button>
        </PopPop>
      </div>
    )
  }
}