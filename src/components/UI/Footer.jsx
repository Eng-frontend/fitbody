import React from 'react'
import '../../styles/footer.css'
import logo from '../../assets/img/dumble.png'

const Footer = () => {

    const year = new Date().getFullYear()
  return <footer className="footer" data-aos='fade-up' data-aos-duration="1500">
    <div className="container">
        <div className="footer__wrapper">
            <div className="footer__box">
                <div className="logo">
                    <div className="logo__img">
                        <img src={logo} alt="" />
                    </div>
                    <h2>Fitbody</h2>
                </div>
            </div>

            <div className="footer__box">
                <h4 className="footer__title">Company</h4>

                <ul className="footer__links">
                    <li><a href="#">Our program</a></li>
                    <li><a href="#">Our plan</a></li>
                    <li><a href="#">Become a member</a></li>
                </ul>
            </div>

            <div className="footer__box">
                <h4 className="footer__title">Quick Links</h4>

                <ul className="footer__links">
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </div>

            <div className="footer__box">
                <h4 className="footer__title">Quick Links By Mail</h4>

                <ul className="footer__links">
                    <li><a href="#">About Us By mail</a></li>
                    <li><a href="#">Contact Us By mail</a></li>
                    <li><a href="#">Support By mail</a></li>
                </ul>
            </div>

        </div>
    </div>
  </footer>
}

export default Footer