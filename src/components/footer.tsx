import React from "react";
import SignUpPopup from "./popups/signup";
import SuccessPopUp from "./popups/success-signup";
import SocialLoginPopUp from "./popups/social-login-popup";
import { Link } from "react-router-dom";

function Footer() {

    return (<React.Fragment>
        <SignUpPopup />
        <SuccessPopUp />
        <SocialLoginPopUp />
        <div id="footer" className="footer">
            <div className="footer-container">
                <div className="footer-links">
                    <Link className="footer-link" to="privacy-policy"> Privacy Policy </Link>
                </div>
            </div>
        </div>
    </React.Fragment>)
}

export default Footer;