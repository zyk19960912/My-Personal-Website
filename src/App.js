import React, {Component} from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import './App.css';
import Main from './Components/main';
import {Link} from 'react-router-dom';

class App extends Component{
    render(){
        return (
            <div className="demo-big-content">
                <Layout>
                    <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white', fontSize:'40px', fontWeight:'bold',fontFamily:'Oxygen'}} to="/">Staples Center</Link>} scroll>
                        <Navigation>
                            <Link style={{fontSize:'30px', fontFamily:'Josefin Sans'}} to="/resume">Resume</Link>
                            <Link style={{fontSize:'30px', fontFamily:'Josefin Sans'}} to="/aboutme">About Me</Link>
                            <Link style={{fontSize:'30px', fontFamily:'Josefin Sans'}} to="/projects">Projects</Link>
                            <Link style={{fontSize:'30px', fontFamily:'Josefin Sans'}} to="/contact">Contact</Link>
                        </Navigation>
                    </Header>
                    <Drawer title={<Link style={{textDecoration: 'none', color: 'black', fontSize:'20px', fontWeight:'bold',fontFamily:'Oxygen'}} to="/">Staples Center</Link>}>
                        <Navigation>
                            <Link style={{fontSize:'30px', fontFamily:'Josefin Sans'}} to="/resume">Resume</Link>
                            <Link style={{fontSize:'30px', fontFamily:'Josefin Sans'}} to="/aboutme">About Me</Link>
                            <Link style={{fontSize:'30px', fontFamily:'Josefin Sans'}} to="/projects">Projects</Link>
                            <Link style={{fontSize:'30px', fontFamily:'Josefin Sans'}} to="/contact">Contact</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Main />
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default App;