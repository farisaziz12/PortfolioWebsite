import React, {Component} from 'react';
import PopPop from 'react-poppop';
import './Button.css'

export default class DIGIDAVE extends Component {
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
        <button class="gradient-multiline" onClick={() => this.toggleShow(true)}>DigiDave</button>
        <PopPop position="centerCenter"
                open={show}
                closeBtn={true}
                closeOnEsc={true}
                onClose={() => this.toggleShow(false)}
                closeOnOverlay={true}>
          <h1>DigiDave</h1>
          <p>
          DigiDave is a friendly voice based digital assistant, which can play music, tell you a joke, the weather, do basic math calculations and more!
          </p>
          <button class="gradient-multiline-button"><a href='https://digidave.netlify.com'>Check out the live website</a></button>
          <button class="gradient-multiline-button"><a href='https://github.com/farisaziz12/digidave_frontend'>Source Code</a></button>
        </PopPop>
      </div>
    )
  }
}