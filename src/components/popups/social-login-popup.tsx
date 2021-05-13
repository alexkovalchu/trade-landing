import React, {  useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import { ActionList, generateActions } from "../../constants/actions";
import { Link } from "react-router-dom";
import FacebookLogin from "../socials/facebook-login";
import { capitalizeFirstLetter } from "../../utils/string-functions";
import CloseButton from "../../shared/images/close-button.svg";

function SocialLoginPopUp(props: { status: string, network: string, hidePopUp: ()=>void }) {
    const renderButton = useCallback(()=>{
        switch(props.network){
            case 'google':
                return <button className="btn filled"> SignUp </button>;
            case 'facebook':
                return <FacebookLogin />;
            case 'instagram':
                return <button className="btn filled"> SignUp </button>;
            case 'telegram':
                return <button className="btn filled"> SignUp </button>;
            case 'twitter':
                return <button className="btn filled"> SignUp </button>;
            default:
                return <div></div>
        }
    }, [props.network])

    return <div className="popup-screen-full" style={{ display: props.status === 'open' ? 'block' : 'none' }}>
        <div className="popup-overlay" onClick={props.hidePopUp}></div>
        <div className="popup-content pt-5">
            <div className="close-button"> <img src={CloseButton} onClick={props.hidePopUp} /> </div>
            <h3 style={{marginRight: '40px', marginLeft: '40px'}}> Sign Up via {capitalizeFirstLetter(props.network)} </h3>
            <div className="signup-checkboxes mt-5 mb-2">
                <div className="checkbox-input mb-1">
                    <input type="checkbox" required name="agree-terms-of-use" id="agree-terms-of-use-social" />
                    <label htmlFor="agree-terms-of-use-social"> I agree to the <Link to="/privacy-policy" target="_blank">Privacy Policy</Link> </label>
                </div>
                <div className="checkbox-input"> 
                    <input type="checkbox" required name="older-16" id="older-16-social" />
                    <label htmlFor="older-16-social"> I am 16 or older </label>
                </div>
            </div>
            <div className="button-box mt-3">
                {renderButton()}
            </div>
        </div>
    </div>
}

export default connect((state: any)=>({
    status: state.popups.socialLoginPopUp,
    network: state.popups.networkForLogin
}), dispatch=>({
    hidePopUp: ()=>{
        dispatch({ type: generateActions(ActionList.popup.socialLogin.hide).request() });
    }
}))(SocialLoginPopUp)