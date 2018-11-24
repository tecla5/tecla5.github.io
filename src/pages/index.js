import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

let data = {
    mission: 'We develop flexible solutions designed to integrate smoothly with your existing business processes and tech stack . We care about your project and take care of it with craftsmanship and a personal touch.',
    goal: 'Customer satisfaction is our primary goal. We take great pride and care in delivering solutions, using an agile approach, with continual feedback from our clients.',
    faces: {
        planning: 'First we discuss and agree on the scope of the project with the client. From this we are able to break down the project in minor and major milestones to be delivered',
        design: 'From the plan we can start drafting a design of the system to be implemented. We iterate on the design with the customer until we are in agreement to proceed to implementation',
        build: 'The application design, business and tech requirements enable us to select the right technology stack for the job. We commit suitable developers to build the solution as specified.',
        liftoff: 'We build in a test driven, iterative approach. The client can follow the progress in each iteration and provide feedback until the app is ready for release.',            
    },
    story: 'ecla5 started as a consultancy in 2015 in Barcelona. We were a group of experienced developers, project managers and designers who wanted to work together to build great products. We started working for clients in Europe, first in London then in Barcelona. Our specialisation is building components or services that are easy to integrate in existing infrastructure/architecture. Since then we worked for multiple companies, mostly across Europe, delivering responsive web solutions (web/mobile), hybrid apps and various backend services. See our Product and Tech pages for more info.',
    portafolio: {
        CMS: 'The CMS is available as a REST API that can be integrated with your back office applications. The CMS includes support for media files and nested content blocks of any kind.',
        'i18n real-time service': 'This service allows your back office to make updates to text and translations and have the updates reflected across all your apps in real time!, No more release constraints to fix types or badly written text or wrong translations.',
        'Free water app': 'A demo app, using Google Maps to enable users to add and find free water (tap) locations and share them with other users. Useful when jogging around town!'
    },
    stacks:{
        JavaScript: 'We use the latest JavaScript standards from ECMA 2015 and up.',        
        TypeScript: 'At Tecla we love TypeScript as it provides instant developer feedback. Typescript means increased productivity and less bugs and errors.',        
        NodeJS: 'We like to use NodeJS to develop most micro services.',
        Go: 'We recommend Go for services that have high performance requirements.',
        'GCP/AWS': 'We prefer to deploy services on cloud platforms such as Google (GCP) or Amazon (AWS). ',
        'Docker & Kubernetes': 'Micro services should run on a containerised platform. We highly recommend using Kubernetes with Docker'
    }
}

class Homepage extends React.Component {
    render() {
        const siteTitle = "Gatsby Starter - Photon";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>Lorem ipsum dolor adipiscing<br />
                                amet dolor consequat</h2>
                            </header>
                            <p>Adipiscing a commodo ante nunc accumsan et interdum mi ante adipiscing. A nunc lobortis non nisl amet vis sed volutpat aclacus nascetur ac non. Lorem curae et ante amet sapien sed tempus adipiscing id accumsan.</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic01} alt="" /></span>
                        </div>
                    </div>
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ul className="major-icons">
                                <li><span className="icon style1 major fa-code"></span></li>
                                <li><span className="icon style2 major fa-bolt"></span></li>
                                <li><span className="icon style3 major fa-camera-retro"></span></li>
                                <li><span className="icon style4 major fa-cog"></span></li>
                                <li><span className="icon style5 major fa-desktop"></span></li>
                                <li><span className="icon style6 major fa-calendar"></span></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>Lorem ipsum dolor adipiscing<br />
                                amet dolor consequat</h2>
                            </header>
                            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
                            <p>Blandit faucibus proin. Ac aliquam integer adipiscing enim non praesent vis commodo nunc phasellus cubilia ac risus accumsan. Accumsan blandit. Lobortis phasellus non lobortis dit varius mi varius accumsan lobortis. Blandit ante aliquam lacinia lorem lobortis semper morbi col faucibus vitae integer placerat accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing curae consequat feugiat etiam dolore.</p>
                            <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Adipiscing amet consequat</h2>
                            </header>
                            <p>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={pic02} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic04} alt="" /></span>
                            <h3>Magna feugiat lorem</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Ipsum feugiat consequat?</h2>
                        </header>
                        <p>Sed lacus nascetur ac ante amet sapien.</p>
                        <ul className="actions uniform">
                            <li><a href="#" className="button special">Sign Up</a></li>
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;