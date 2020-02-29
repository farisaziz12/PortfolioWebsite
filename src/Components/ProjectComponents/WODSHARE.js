import React, {Component} from 'react';
import PopPop from 'react-poppop';
import './Button.css'

export default class WODSHARE extends Component {
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
        <button class="gradient-multiline" onClick={() => this.toggleShow(true)}>WODSHARE</button>
        <PopPop position="centerCenter"
                open={show}
                closeBtn={true}
                closeOnEsc={true}
                onClose={() => this.toggleShow(false)}
                closeOnOverlay={true}>
          <h1>WODSHARE</h1>
          <p className='paragraph-text'>
          WODSHARE is a web application aimed around solving the the current standard (google/excel sheets) that personal trainers use for training athletes online or in a gym setting. It allows coaches to monitor athlete’s progress, assign workout programs and easily manage working with several clients.
          </p>
          <button class="gradient-multiline-button"><a href='https://wodshare.netlify.com'>Check out the live website</a></button>
          <button class="gradient-multiline-button"><a href='https://github.com/farisaziz12/WODSHARE_frontend'>Source Code</a></button>
        </PopPop>
      </div>
    )
  }
}