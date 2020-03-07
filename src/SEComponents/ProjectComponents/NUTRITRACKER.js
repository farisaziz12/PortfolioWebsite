import React, {Component} from 'react';
import PopPop from 'react-poppop';
import './Button.css'
import './Text.css'

export default class NUTRITRACKER extends Component {
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
        <button class="gradient-multiline" onClick={() => this.toggleShow(true)}>Nutri-Tracker</button>
        <PopPop position="centerCenter"
                open={show}
                closeBtn={true}
                closeOnEsc={true}
                onClose={() => this.toggleShow(false)}
                closeOnOverlay={true}>
          <h1>Nutri-Tracker</h1>
          <p className='paragraph-text'>
          Nutritracker is a web application with the simple purpose of allowing users to login, create meal plans and track calorie and macronutrient consumption to allow them to better their diet and lose weight
          </p>
          <button class="gradient-multiline-button"><a href='https://nutri-tracker.netlify.com/login'>Check out the live website</a></button>
          <button class="gradient-multiline-button"><a href='https://github.com/farisaziz12/nutritracker_frontend'>Source Code</a></button>
        </PopPop>
      </div>
    )
  }
}