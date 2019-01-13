import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import {Link} from 'react-router-dom';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if(this.state.activeTab === 0){
            return (
                <div className="projects-grid" style={{fontFamily: 'Josefin Sans'}}>
                    {/*React Project */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', height:'600px', padding:'0'}}>
                        <CardTitle style={{color: '#fff', height: '400px',background: 'url(/img/react.png) center / cover'}}>
                            Personal Website Development
                        </CardTitle>
                        <CardText className='Text'>
                            Developed my personal website using React for the front-end and Nodejs express framework for the back-end.
                        </CardText>
                        <CardActions border>
                            <Button><a href="https://github.com/zyk19960912/My-Personal-Website" style={{color:'blue'}}>Github</a></Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    {/*CRCONC*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', height:'600px', padding:'0'}}>
                        <CardTitle style={{color: '#fff', height: '410px', background: 'url(/img/CRC.png) center / cover'}}>
                            CRC Oncology LLC Official Website
                        </CardTitle>
                        <CardText className='Text'>
                            Developed the official website (www.crconc.com) for CRC Oncology LLC, using html/CSS/JavaScript for the front-end and NodeJS express framework for the back-end.
                        </CardText>
                        <CardActions border>
                            <Button><a href="https://github.com/zyk19960912/CRCONC" style={{color:'blue'}}>Github</a></Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>

                    {/*Itravel*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', height:'600px', padding:'0'}}>
                        <CardTitle style={{color: '#fff', height: '400px', background: 'url(/img/travel.png) center / cover'}}>
                            Itravel web application
                        </CardTitle>
                        <CardText className='Text'>
                            Developed a travel-themed web application using html/CSS/jQuery and Nodejs/MongoDB.
                        </CardText>
                        <CardActions border>
                        <Button><a href="https://github.com/zyk19960912/Itravel" style={{color:'blue'}}>Github</a></Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }else if(this.state.activeTab === 1){
            return (
                <div className="projects-grid" style={{fontFamily: 'Josefin Sans'}}>
                    {/*React Project */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', height:'600px', padding:'0'}}>
                        <CardTitle style={{color: '#fff', height: '400px',background: 'url(/img/pet.jpg) center / cover'}}>
                            Pet Tinder Android App development
                        </CardTitle>
                        <CardText className='Text'>
                            Based on Android Studio and Firebase, the agile team CAMPr developed an Android App which aimed to provide convinence for those who wanted to list or adopt a pet.
                        </CardText>
                        <CardActions border>
                            <Button><a href="https://github.com/zyk19960912/CAMPr" style={{color:'blue'}}>Github</a></Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }else if(this.state.activeTab === 2){
            return (
                <div className="projects-grid" style={{fontFamily: 'Josefin Sans'}}>
                    {/*React Project */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', height:'600px', padding:'0'}}>
                        <CardTitle style={{color: '#fff', height: '400px',background: 'url(/img/network.jpg) center / cover'}}>
                            SurfStore Design
                        </CardTitle>
                        <CardText className='Text'>
                            Built SurfStore, which is a simple cloud file system and support C.R.U.D ops. It is based on rpyc and AWS.
                        </CardText>
                        <CardActions border>
                            <Button><a href="https://github.com/zyk19960912/SurfStore" style={{color:'blue'}}>Github</a></Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }else if(this.state.activeTab === 3){
            return (
                <div className="projects-grid" style={{fontFamily: 'Josefin Sans'}}>
                    {/*React Project */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', height:'600px', padding:'0'}}>
                        <CardTitle style={{color: '#000', height: '400px',background: 'url(/img/amazon.jpg) center / cover'}}>
                            Recommender System
                        </CardTitle>
                        <CardText className='Text'>
                            Predicted purchase and rating based on a clothing review data set from Amazon, which
                            contains 200,000 review samples. The results are evaluated on Kaggle platform.
                        </CardText>
                        <CardActions border>
                            <Button><a href="https://github.com/zyk19960912/Recommender-System" style={{color:'blue'}}>Github</a></Button>
                            <Button><a href="https://www.kaggle.com/c/cse158258-fa18-purchase-prediction" style={{color:'blue'}}>Kaggle</a></Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }else if(this.state.activeTab === 4){
            return (
                <div className="projects-grid" style={{fontFamily: 'Josefin Sans'}}>
                    {/*React Project */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', height:'600px', padding:'0'}}>
                        <CardTitle style={{color: '#fff', height: '400px',background: 'url(/img/speech.jpg) center / cover'}}>
                            ConvRBM Speech Recognition
                        </CardTitle>
                        <CardText className='Text'>
                            Modeled a feature extraction method in Matlab for speech signals called ConvRBM which is based on unsupervised learning. Proved the superiority of this novel model to MFCC model, especially in low SNR coonditions.
                        </CardText>
                        <CardActions border>
                            <Button><a href="https://github.com/zyk19960912/ConvRBM" style={{color:'blue'}}>Github</a></Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }


    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab:tabId})} ripple>
                    <Tab className="tab">Web Development</Tab>
                    <Tab className="tab">Android Development</Tab>
                    <Tab className="tab">SurfStore Design</Tab>
                    <Tab className="tab">Recommender System</Tab>
                    <Tab className="tab">Speech Recognition</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    };
}

export default Projects;