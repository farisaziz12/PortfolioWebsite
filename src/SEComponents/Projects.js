import React, { Component } from 'react';
import './Projects.css'
import WODSHARE from './ProjectComponents/WODSHARE'
import DIGIDAVE from './ProjectComponents/DIGIDAVE';
import SELLO from './ProjectComponents/SELLO';
import CORTRACK from './ProjectComponents/CORTRACK';


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
                <CORTRACK/>
            </div>
        </div>
        );
    }
}

export default Projects;