import React, { Component } from 'react'
import AboutMe from './AboutMe';


class CFBody extends Component {
   state = {

   }

    render() {

        return (
            <>
            <div className="cf-background section">
            <div className="fixed"></div>
                <AboutMe/>
            </div>
            </>
        );
    }
}

export default CFBody;



