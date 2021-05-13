import React from 'react';
import { Link } from "react-router-dom";
import ChromeLogoIcon from "../shared/images/1.png";
import TelegramIcon from "../shared/images/telegram-icon-5.png";

function ConfirmSignUp () {

    return (<div className="tl-container">
        <div className="confirm-signup-box">
            <div className="logo-header">
                <Link to="/">
                    <img className="trade-logo-popup" src={ChromeLogoIcon} />
                    <p className="logo-text"> TRADE </p>
                </Link>
            </div>
            <div className="content">
                <p>Thanks for signing up! Click below to join to our early-access community on Telegram! Our mods are active in our Closed Alpha group and your feedback is welcome. Please feel free to tell us about any features or improvements you would like to see.</p>
            </div>
            <div className="pt-5 mt-5">
                <div className="text-center animated-image-scale">
                    <img src={TelegramIcon} style={{ width: '80px', height: '80px' }}/>
                </div>
                <p className="text-join mt-5 mb-4"> Join TRADE on Telegram to play </p>
                <div className="pt-5 pb-3">
                    <a href="https://t.me/joinchat/T25Q4EouNZ399POs" className="btn btn-link"> Join telegram group </a>
                </div>
            </div>
            <div className="bottom-text mt-5 pt-5">
                Thanks again for joining and please share the game with your friends        
            </div>
            <div className="website-show mt-5 pt-5">tradethegame.com</div>
        </div>
    </div>);
}

export default ConfirmSignUp;