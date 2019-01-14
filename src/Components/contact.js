import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Yankai Zhang</h2>
                        <img 
                            src="/img/contact.jpg"
                            alt="avatar"
                            style={{height:'500px'}}
                        />
                        
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton', marginLeft:'50px'}}>
                                        <i className="fa fa-phone-square fa-fw" aria-hidden="true" style={{marginRight: '50px'}}/>
                                        (858)214-4843
                                    </ListItemContent>
                                </ListItem>
            
                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton', marginLeft:'50px'}}>
                                        <i className="fa fa-envelope-square fa-fw" aria-hidden="true" style={{marginRight: '50px'}}/>
                                        yaz003@eng.ucsd.edu
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton', marginLeft:'50px'}}>
                                        <i className="fa fa-weixin fa-fw" aria-hidden="true" style={{marginRight: '50px'}}/>
                                        Youngkey
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'35px', fontFamily: 'Anton', marginLeft:'50px'}}>
                                        <i className="fa fa-qq fa-fw" aria-hidden="true" style={{marginRight: '48px'}}/>
                                        834857848
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'35px', fontFamily: 'Anton', marginLeft:'50px'}}>
                                        <i className="fa fa-internet-explorer" aria-hidden="true" style={{marginRight: '40px'}}/>
                                        www.youngkey96.com
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    };
}

export default Contact;