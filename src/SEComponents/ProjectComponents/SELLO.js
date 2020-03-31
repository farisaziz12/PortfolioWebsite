import React, {Component} from 'react';
import PopPop from 'react-poppop';
import './Button.css'

export default class SELLO extends Component {
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
        <button class="gradient-multiline" onClick={() => this.toggleShow(true)}>SELLO</button>
        <PopPop position="centerCenter"
                open={show}
                closeBtn={true}
                closeOnEsc={true}
                onClose={() => this.toggleShow(false)}
                closeOnOverlay={true}>
          <h1>SELLO</h1>
          <p className='paragraph-text'>
          Sello is a second-hand market web application, which allows user to create an account to sell and purchase products in a similar fashion to the website "Etsy"
          </p>
          <button class="gradient-multiline-button"><a href='https://sello-shop.herokuapp.com'>Check out the live website</a></button>
          <button class="gradient-multiline-button"><a href='https://github.com/Harrison-Hughes/Sello'>Source Code</a></button>
        </PopPop>
      </div>
    )
  }
}