import React, { Component } from 'react';
import './Projects.css'
import WODSHARE from './ProjectComponents/WODSHARE'
import DIGIDAVE from './ProjectComponents/DIGIDAVE';
import SELLO from './ProjectComponents/SELLO';
import NUTRITRACKER from './ProjectComponents/NUTRITRACKER';


class Projects extends Component {
    state = {  }
    render() {
        return (
            <div className="section">
            <div className="fixed">
                <h1>Projects</h1>
                <WODSHARE/>
                <DIGIDAVE/>
                <SELLO/>
                <NUTRITRACKER/>
            </div>
        </div>
        );
    }
}

export default Projects;
            //     <Grid columns={4} divided>
            //         <Grid.Row>
            //         <Grid.Column>
            //             <h3>WODSHARE</h3>
            //         </Grid.Column>
            //         <Grid.Column>
            //             <h3>DigiDave</h3>
            //         </Grid.Column>
            //         <Grid.Column>
            //             <h3>Sello</h3>
            //         </Grid.Column>
            //         <Grid.Column>
            //             <h3>Nutri-Tracker</h3>
            //         </Grid.Column>
            //         </Grid.Row>
            // </Grid>