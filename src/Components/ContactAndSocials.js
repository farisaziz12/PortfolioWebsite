import React from 'react'
import '../App.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'


export default function ContactAndSocials() {
    return (
        <div className="section">
            <div className="fixed">
                <h1>Contact me and checkout my socials!</h1> <br/><br/><br/><br/>
                <div>
                    <button className="button">
                        <a href={"https://github.com/farisaziz12"}>
                            <span className="respect" data-title="Click Me!">GitHub</span>
                        </a>
                    </button>
                    <button className="button">
                        <a href={"https://www.linkedin.com/in/faris-aziz-9a2a1499"}> 
                            <span className="respect" data-title="Me!">LinkedIn</span>
                        </a>
                    </button> 
                    <button className="button">
                        <a href={"mailto:farisaziz12@gmail.com?subject=Hire%20Me!"}>
                            <span className="respect" data-title="Or Me!">Email</span>
                        </a>
                    </button>
                </div>
            

            </div>
        </div>
    )
}
