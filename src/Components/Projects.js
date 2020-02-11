import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'

class Projects extends Component {
    state = {  }
    render() {
        return (
            <div className="section">
            <div className="fixed">
                <h1>Projects</h1>
                <Grid columns={3} divided>
                    <Grid.Row>
                    <Grid.Column>
                        1
                    </Grid.Column>
                    <Grid.Column>
                        2
                    </Grid.Column>
                    <Grid.Column>
                        3
                    </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                    <Grid.Column>
                        4
                    </Grid.Column>
                    <Grid.Column>
                        5
                    </Grid.Column>
                    <Grid.Column>
                        6
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </div>
        );
    }
}

export default Projects;