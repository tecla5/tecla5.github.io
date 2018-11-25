import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout'


import pic01 from '../assets/images/services/cloud.png'
import pic02 from '../assets/images/team/jcabrera.png'
import pic03 from '../assets/images/team/kmandrup.png'
import pic04 from '../assets/images/team/dcabrera.png'
import pic05 from '../assets/images/team/jzambrano.png'


import data from '../data/en/data.json'

class Homepage extends React.Component {
    render() {
        const siteTitle = "Tecla5 site"
        let imgdev = [pic02,pic03,pic04,pic05]


        return (
            <Layout>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>{data.mission}</h2>
                            </header>
                            <p>{data.home.philosophy1}</p>
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
                                <h2>{data.home.vision1}<br />
                                {data.home.vision2}</h2>
                            </header>
                            <p>{data.process}</p>
                            <p>{data.home.textcompetitive}</p>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>{data.team.name}</h2>
                            </header>
                            <p>{data.home.heading}</p>
                            {/* <p>{JSON.stringify(data.team.developers,null,2)}</p> */}
                        </div>

                        { data.team.developers.map((dev,i)=>{
                            return (
                              <div className="col-3">
                                <span className="image fit" ><img src={imgdev[i]} alt="" /></span>
                                <h3>{dev.caption}</h3>
                                <p>{dev.content}</p>
                                <ul className="actions">
                                    <li><a href="#" className="button">More</a></li>
                                </ul>
                              </div> 
                            )
                          })
                        }
                    </div>
                </section>

                {/* <section id="four" className="main style2 special">
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
                </section> */}
            </Layout>
        );
    }
}

export default Homepage;