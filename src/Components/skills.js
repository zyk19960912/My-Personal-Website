import React, {Component} from 'react';
import {Grid, Cell, ProgressBar} from 'react-mdl';

class Skills extends Component {
    render() {
        return (
            <Grid>
                <Cell col={12} style={{fontFamily: 'Josefin Sans'}}>
                    <div style={{display: 'flex', fontSize: "18px", marginLeft:"55px"}}>{this.props.skill}
                        <ProgressBar style={{margin: 'auto', width: '75%', marginRight:"55px"}}
                        progress={this.props.progress}/>
                    </div>
                </Cell>
            </Grid>
        )
    }
}

export default Skills;