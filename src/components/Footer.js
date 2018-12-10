import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <section id="footer">
                <ul className="icons">
                    <li><a href="https://twitter.com/tecla5page" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="https://www.facebook.com/pages/Tecla5/212268649550997" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                    {/* <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li> */}
                    <li><a href="https://github.com/tecla5" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                    <li><a href="contact@tecla5.com" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy;</li><li>Design: <a href="https://www.tecla5.com">Tecla5</a></li>
                </ul>
            </section>
        )
    }
}

export default Footer
