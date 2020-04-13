import React from 'react'
import { Grid } from 'semantic-ui-react'
import '../App.css'



export default function ContactAndSocials() {
    return (
        <div className="section">
            <div className="fixed">
                    <h1>Contact me and checkout my socials!</h1> 
                <div className='contact-div'>
                    
                    <div>
                        <Grid >
                            <Grid.Row>
                                <Grid.Column>
                                <button className="button">
                                    <a href={"https://github.com/farisaziz12"}>
                                        <span className="respect" data-title="Click Me!">GitHub</span>
                                    </a>
                                </button>
                                </Grid.Column>
                                <Grid.Column>
                                <button className="button">
                                    <a href={"https://www.linkedin.com/in/farisaziz12"}> 
                                        <span className="respect" data-title="Me!">LinkedIn</span>
                                    </a>
                                </button> 
                                </Grid.Column>
                                <Grid.Column>
                                <button className="button">
                                    <a href={"mailto:farisaziz12@gmail.com?subject=Hire%20Me!"}>
                                        <span className="respect" data-title="Or Me!">Email</span>
                                    </a>
                                </button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </div>


                </div>

            </div>
        </div>
    )
}
