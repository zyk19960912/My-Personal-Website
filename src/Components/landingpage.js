import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';

class LandingPage extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <video autoPlay loop muted playsInline className="myvideo" style={{height: "800px"}}>
                    <source src="/video/main.mp4" type="video/mp4"/>
                </video>
                <Grid className="landing-grid">
                    <Cell col={4}>
                        <img 
                            src="/img/chan.jpg"
                            alt="Eason Chan"
                            className="avatar-img"
                        />
                    </Cell>
                    <Cell col={4}>
                        <img 
                            src="/img/landing.jpg"
                            alt="Kobe"
                            className="avatar-img"
                        />
                    </Cell>
                    <Cell col={4}>
                        <img 
                            src="/img/Downey.jpg"
                            alt="Downey"
                            className="avatar-img"
                        />
                    </Cell>

                    <div class="banner-text">
                        <div class="Name">
                            <div>
                                <h1>Yankai Zhang</h1>
                            </div>
                            
                            <div>
                                <h1>English Name: Kevin</h1>
                            </div>
                        </div>
                        
                        <hr/>

                        <p>C/C++ | Python | Java | HTML/CSS | JavaScript |  MySQL</p>
                        <p>React | NodeJS | Firebase | MongoDB | AWS | Android Studio | Matlab</p>
                        <div className="social-links">
                            {/* LinkedIn*/}
                            <a href="https://www.linkedin.com/in/yankai-zhang1023/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                            </a>

                            {/* Github*/}
                            <a href="https://github.com/zyk19960912" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"/>
                            </a>

                            {/* Freecodecamp*/}
                            <a href="https://www.facebook.com/yankai.zhang.10048" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook-square" aria-hidden="true"/>
                            </a>

                            {/* Youtube*/}
                            <a href="https://twitter.com/Youngkey123" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-twitter-square" aria-hidden="true"/>
                            </a>

                        </div>

                    </div>
                </Grid>
            </div>

        )
    };
}

export default LandingPage;