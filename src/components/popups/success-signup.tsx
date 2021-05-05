import React, {  useEffect, useState } from "react";
import { connect } from "react-redux";
import { generateActions, ActionList } from "../../constants/actions";
import CloseButton from "../../shared/images/close-button.svg";
import TelegramIcon from "../../shared/images/telegram-icon-5.png";

function SignUpSuccess(props: { status: string, onClose: ()=>void }) {
    return (<div className="popup-screen-full" style={{ display: props.status === 'open' ? 'block' : 'none' }}>
        <div className="popup-overlay" onClick={props.onClose}></div>
        <div className="popup-content">
            <div className="close-button"> <img src={CloseButton} onClick={props.onClose} /> </div>
            <div className="content-view pt-5">
                <div className="pb-2" />
                <div className="text-center animated-image-scale">
                    <img src={TelegramIcon} style={{ width: '80px', height: '80px' }}/>
                </div>
                <p className="mt-5 mb-4"> Thanks for signing up! Get access to our exclusive closed alpha group on Telegram. </p>
                <div className="pt-5 pb-3">
                    <a href="https://t.me/joinchat/T25Q4EouNZ399POs" className="btn btn-link"> Join telegram group </a>
                </div>
            </div>
        </div>
    </div>);
}

export default connect((state:{ [key: string]: any }) => ({
    status: state.popups.successSignup
}),
dispatch=>({
    onClose: ()=>{
        dispatch({ type: generateActions(ActionList.popup.success.hide).request() });
    }
}))(SignUpSuccess)