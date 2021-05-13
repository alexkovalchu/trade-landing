import React, {  useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import { generateActions, ActionList } from "../../constants/actions";
import { SignUpData } from "../../constants/types";
import SignUpForm from "../forms/signup-form";
import FcebookIcon from "../../shared/images/facebook-small-icon.svg";
import InstagramIcon from "../../shared/images/instagram-small-icon.svg";
import CloseButton from "../../shared/images/close-button.svg";
import GoogleIcon from "../../shared/images/google-small-icon.svg";
import TelegramIcon from "../../shared/images/telegram-small-icon.svg";
import TwitterIcon from "../../shared/images/twitter-small-icon.svg";
import ChromeLogoIcon from "../../shared/images/1.png"

let timeoutId:NodeJS.Timeout | undefined;
interface SignUpPopupProps { 
    status: string; 
    hidePopUp: ()=>void;
    showPopUp: ()=>void; 
    submitSignUpRequest: (data: SignUpData)=>void;
    showSocialLogin: (network: string)=>void 
}

function SignUpPopup (props: SignUpPopupProps) {
    const [first, updateFirst ] = useState(true);

    const formSubmitHandle = useCallback((data: SignUpData)=>{
        props.submitSignUpRequest(data);
    }, [props.submitSignUpRequest]);

    const socailClickHandle = useCallback((network: string)=>{
        return ()=>{ props.showSocialLogin(network); }
    }, [props.showSocialLogin]);    

    useEffect(()=>{
        if (first) {
            timeoutId = setTimeout(props.showPopUp, 12000);
            updateFirst(false);
        }
        if (props.status === 'open') {
           if (timeoutId) clearTimeout(timeoutId);
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
                Sign up below to receive notification when multiplayer tournaments are live. Once you sign up, you’ll get exclusive access to our closed alpha Telegram group where you can play single player.
            </div>
            <SignUpForm onSubmit={formSubmitHandle} />
            <div className="continue-or-separetor">OR</div>
            <div className="continue-text">  continue with  </div>
            <div className="signup-social">
                <div className="round-social-icon"> 
                    <button className="btn btn-icon" onClick={socailClickHandle('google')}><img src={GoogleIcon} /></button>
                </div>
                <div className="round-social-icon"> 
                    <button className="btn btn-icon" onClick={socailClickHandle('facebook')}><img src={FcebookIcon} /></button>
                </div>
                <div className="round-social-icon"> 
                    <button className="btn btn-icon" onClick={socailClickHandle('telegram')}><img src={TelegramIcon} /></button>
                </div>
                <div className="round-social-icon"> 
                    <button className="btn btn-icon" onClick={socailClickHandle('instagram')}><img src={InstagramIcon} /></button>
                </div>
                <div className="round-social-icon"> 
                    <button className="btn btn-icon" onClick={socailClickHandle('twitter')}><img src={TwitterIcon} /></button>
                </div>
            </div>
        </div>
    </div>)
}

export default connect((state:{ [key: string]: any }) => ({
    status: state.popups.signUpPopupState
}), dispatch=>({
    hidePopUp: ()=>{
        dispatch({ type: generateActions(ActionList.popup.signup.hide).request() });
    },
    showPopUp: ()=>{
        dispatch({ type: generateActions(ActionList.popup.signup.show).request() });
    },
    submitSignUpRequest: (data: SignUpData)=>{
        dispatch({ type: generateActions(ActionList.forms.signup.submit).request(), payload: data })
    },
    showSocialLogin: (network: string) => {
        dispatch({ type: generateActions(ActionList.popup.socialLogin.show).request(), payload: { network } });
    }
}))(SignUpPopup);
