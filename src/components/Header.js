import React from 'react'

import data from '../data/en.json'
import website_icon from '../assets/images/website-icon.png'
class Header extends React.Component {
    getData(){
        return data
    }
    render() {
        let data = this.getData()
        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major "><img src={website_icon} alt="" /></span>
                    <h1>{data.mission}<br />
                    Hi from <a href="http://www.tecla5.com">Tecla5</a>.</h1>
                    <p>{data.goal}</p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Discover</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
