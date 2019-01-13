import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Education extends Component{
    render(){
        return(
            <Grid>
                <Cell col={4} style={{fontFamily: 'Josefin Sans'}}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8} style={{fontFamily: 'Josefin Sans'}}>
                    <h4 style={{marginTop: '0px',fontFamily: 'Josefin Sans'}}>{this.props.schoolName}</h4>
                    <p>{this.props.schoolDescription}</p>
                    <p>{this.props.GPA}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Education;