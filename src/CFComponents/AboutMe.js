import React, { Component } from 'react'
import ProfilePic from '../CFPics/profile-pic.jpg'
import Grid from "hedron";

class AboutMe extends Component {
    state = {  }
    render() {
        return (
            <>
                <h1 className='about-me-title'>About Me</h1>
                <div>
                    <div className='bio'>
                        <p>In 2015, by starting CrossFit, Faris began his journey to find his own health. Today, with a passion for learning, working out and coaching he strives to help others build their health and make their athletic dreams come true. Whether it’s your first muscle up or your first single under he takes pleasure in helping every step of the way.</p>
                    </div>


                    <div>
                        <img className='profile-pic' src={ProfilePic} />
                    </div>
                </div>
            </>
        );
    }
}

export default AboutMe;