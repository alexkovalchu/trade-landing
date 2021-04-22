import React from "react";
import { connect } from "react-redux";
import { generateActions, ActionList } from "../constants/actions";
import LogoIcon from "../shared/images/trade-logo-svg.svg";
import ChromeLogoIcon from "../shared/images/1.png";

function Header(props: { showPopUp: ()=>void }) {
    return (<div id="header-landing" className="header">
        <div className="header-row"> 
            <div className="brand-part"> 
                <div className="logo-box"> <img className="logo-image" src={ChromeLogoIcon} /> TRADE </div>
            </div>
            <div className="profile-part"> 
                <button className="btn filled" onClick={props.showPopUp}>Sign Up</button>
            </div>
        </div>
    </div>)
}

export default connect(state=>({}), dispatch=>({
    showPopUp: ()=> {
        dispatch({ type: generateActions(ActionList.popup.show).request() })
    }
}))(Header);