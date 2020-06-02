import React from 'react';
import './footerAssets/footer.css';
import { ReactComponent as Facebook } from './footerAssets/Facebook.svg';
import { ReactComponent as Twitter } from './footerAssets/Twitter.svg';
import { ReactComponent as YouTube } from './footerAssets/YouTube.svg';
import { ReactComponent as Arrow } from './footerAssets/Arrow.svg';


const SocialIcons = (props) => {
    return <div className="social">
        <a href="https://www.facebook.com/" ><Facebook /></a>
        <a href="https://twitter.com" ><Twitter /></a>
        <a href="https://www.youtube.com" ><YouTube /></a>
    </div>
}

const FooterForm = (props) => {
    return <div>
        <div className="footer-form__title">Subscribe to Newsletter</div>
        <form action="" className="footer-form">
            <input className="footer-form__input" type="email" placeholder="Email" />
            <button className="footer-form__submit" type="submit"><Arrow /></button>
        </form>
    </div>;
}

const FooterHead = (props) => {
    return <div className="footer-head footer-grid">
        <hr className="footer-head__line footer-grid-column-left" />
        <h2 className="footer-head__title footer-grid-column-center">CBD</h2>
        <hr className="footer-head__line footer-grid-column-right" />
    </div>
}

const FooterBody = (props) => {
    return <div className="footer-grid">
        <div className="footer-grid-column-left">
            <a href="#" className="footer__link">Privacy Policy</a>
            <a href="#" className="footer__link">Terms of Use</a>
            <a href="#" className="footer__link">Return Policy</a>
        </div>


        <div className="footer-grid-column-center">
            <SocialIcons />
            <div className="vline" />
            <FooterForm />
            <div className="footer__copy">© 2018. CbD health.</div>
        </div>


        <div className="footer-grid-column-right">
            <a href="#" className="footer__link">SHIPPING INFO</a>
            <a href="#" className="footer__link">RETURNS / EXCHANGES</a>
            <a href="#" className="footer__link">CONTACT</a>
        </div>
    </div>;
}



const Footer = (props) => {
    return <div className="footer">
        <FooterHead />
        <FooterBody />
    </div>;
}

export default Footer;