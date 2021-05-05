
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import SignUpPopup from "../components/popups/signup";
import { PrivacyPoliceHTML } from '../constants/privacy-text';

function PrivacyPolicy () {
    return <div className="tl-container">
    <Header />
    <div className="content-container html-container">
        <div dangerouslySetInnerHTML={{__html: PrivacyPoliceHTML}}>

        </div>
    </div>
    <SignUpPopup />
    <Footer />
    </div>
}

export default PrivacyPolicy;