import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { generateActions, ActionList } from "../../constants/actions";
import FcebookIcon from "../../shared/images/facebook-small-icon.svg";
import InstagramIcon from "../../shared/images/instagram-small-icon.svg";
import CloseButton from "../../shared/images/close-button.svg";
import TradeLogo from "../../shared/images/trade-logo-svg.svg";
import GoogleIcon from "../../shared/images/google-small-icon.svg";
import TelegramIcon from "../../shared/images/telegram-small-icon.svg";
// import DiscordIcon from "../../shared/images/discord-icon.svg";
import TwitterIcon from "../../shared/images/twitter-small-icon.svg";
import ChromeLogoIcon from "../../shared/images/1.png";

function SignUpPopup (props: { status: string, hidePopUp: ()=>void, showPopUp: ()=>void }) {
    let [first, updateFirst ] = useState(true);

    useEffect(()=>{
        if (first) {
            setTimeout(props.showPopUp, 12000);
            updateFirst(false);
        }
        return;
    })

    return (<div className="popup-screen-full" style={{ display: props.status === 'open' ? 'block' : 'none' }}>
        <div className="popup-overlay" onClick={props.hidePopUp}></div>
        <div className="popup-content">
            <div className="close-button"> <img src={CloseButton} onClick={props.hidePopUp} /> </div>
            <div className="logo-header">
                <img className="trade-logo-popup" src={ChromeLogoIcon} />
                <p className="logo-text"> TRADE </p>
            </div>
            <div className="content-view">
                TRADE is a fast-paced multiplayer game where players can enter timed rounds and play their peers to see whose trading prowess is best.
            </div>
            <div className="pre-signup-message">
                Sign up below to join our closed alpha and receive notifications when tournaments are live
            </div>
            <div className="signup-inputs">
                <div className="form-inputs">
                    <div className="outlines-box">
                        <input className="outlined-input" type="email" placeholder="Email" />
                    </div>
                </div>
                <div className="form-inputs">
                    <div className="outlines-box">
                        <input className="outlined-input" type="password" placeholder="Password" />
                    </div>
                </div>
            </div>
            <div className="post-signup-message">
                We use cookies that are necessary to operate our website. By continuing, you agree to be bound by our Privacy Policy. Please choose whether or not to give us your consent to carry out profiling and use your data for marketing purposes. 
            </div>
            <div className="buttons-container">
                <div className="accept-button-box">
                    <button className="btn filled">Accept and Create</button>
                </div>
                <div className="accept-button-box">
                    <button className="btn outlined"><span className="inner">Skip and Create</span></button>
                </div>
            </div>
            <div className="continue-text">  Or continue with  </div>
            <div className="signup-social">
                <div className="round-social-icon"> 
                    <button className="btn btn-icon"><img src={GoogleIcon} /></button>
                </div>
                <div className="round-social-icon"> 
                    <button className="btn btn-icon"><img src={FcebookIcon} /></button>
                </div>
                <div className="round-social-icon"> 
                    <button className="btn btn-icon"><img src={TelegramIcon} /></button>
                </div>
                <div className="round-social-icon"> 
                    <button className="btn btn-icon"><img src={InstagramIcon} /></button>
                </div>
                <div className="round-social-icon"> 
                    <button className="btn btn-icon"><img src={TwitterIcon} /></button>
                </div>
            </div>
        </div>
    </div>)
}

export default connect((state:{ [key: string]: any }) => ({
    status: state.popups.signUpPopupState
}), dispatch=>({
    hidePopUp: ()=>{
        dispatch({ type: generateActions(ActionList.popup.hide).request() });
    },
    showPopUp: ()=>{
        dispatch({ type: generateActions(ActionList.popup.show).request() });
    }
}))(SignUpPopup);
