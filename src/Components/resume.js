import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell className="resume-left-col" col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                                src="/img/landing.png"
                                alt="avatar"
                                style={{height:'300px'}}
                            />
                            <h2 style={{paddingTop: '2em', fontFamily: 'Josefin Sans'}}>Yankai Zhang</h2>
                            <h4 style={{fontFamily: 'Josefin Sans'}}>UCSD 1st year graduate student</h4>
                        </div>

                        <hr style={{borderTop: '3px solid #833fb2', width:'100%'}}/>
                        <p>Hello, visitors, Yankai here. Currently I‘m a graduate student in UCSD and my major is computer engineering.
                        I have been studying in this field for around 5 years, and I am proficient with C/C++ and Python. I also have abundant 
                        experiences in full-stack web development.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width:'100%'}}/>

                        <h5>Intended Work direction:</h5>
                        <p>Generally I'm open to any kind of work in related field. I expect to learn more in full-stack development and I'm also interested in cloud computing.
                        I expect to learn new things so definitely I am willing to take any work I have never done before.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width:'100%'}}/>

                        <h5>PS:</h5>
                        <p>I'm now actively seeking for 2019 summer software development full-time internship. Feel free to contact me if you think me an appropriate candidate.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width:'100%'}}/>

                        <h5>Address</h5>
                        <p>9137 Regent Roads, 92037, La Jolla, San Diego, CA,
                            The United States</p>
                        <h5>Phone</h5>
                        <p>(858)214-4843</p>
                        <h5>Email</h5>
                        <p>yaz003@eng.ucsd.edu</p>
                        <h5>Personal Website</h5>
                        <p>www.youngkey96.com</p>
                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        
                        <Education
                            startYear="Sep. 2018"
                            endYear="Mar. 2020"
                            schoolName="UCSD"
                            schoolDescription="Master of Science in Computer Engineering"
                            GPA="GPA: 3.33/4.0"
                        />

                        <Education
                            startYear="Sep. 2014"
                            endYear="June 2018"
                            schoolName="Zhejiang University"
                            schoolDescription="Bachelor of Engineering in Information Engineering"
                            GPA="overall GPA: 3.78/4.0"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Experience</h2>
                        <Experience
                            startYear="July 2018"
                            endYear="Aug. 2018"
                            jobName="CRC Oncology"
                            jobDescription="Software Engineer Intern"
                        />

                        <Experience
                            startYear="Oct. 2017"
                            endYear="Jan. 2018"
                            jobName="ZhongXing Telecommunication Corporation"
                            jobDescription="Software Test Engineer Intern"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Skills</h2>
                        <Skills
                            skill="C/C++"
                            progress={90}
                        />
                        <Skills
                            skill="Python"
                            progress={80}
                        />
                        <Skills
                            skill="html/CSS"
                            progress={80}
                        />
                        <Skills
                            skill="JavaScript"
                            progress={60}
                        />
                        <Skills
                            skill="MySQL"
                            progress={60}
                        />
                        <Skills
                            skill="NodeJS"
                            progress={40}
                        />
                        <Skills
                            skill="React"
                            progress={40}
                        />
                        <Skills
                            skill="Firebase"
                            progress={40}
                        />
                        <Skills
                            skill="Android Studio"
                            progress={80}
                        />
                        <Skills
                            skill="Matlab"
                            progress={90}
                        />
                        <Skills
                            skill="Linux"
                            progress={80}
                        />
                        <Skills
                            skill="Github"
                            progress={80}
                        />
                        <Skills
                            skill="Verilog HDL"
                            progress={80}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    };
}

export default Resume;