import React from "react";
import { connect } from "react-redux";
import { generateActions, ActionList } from "../constants/actions";
import { Link } from "react-router-dom";
import ChromeLogoIcon from "../shared/images/1.png";

function Header(props: { showPopUp: ()=>void }) {
    return (<div id="header-landing" className="header">
        <div className="header-row"> 
            <div className="brand-part"> 
                <Link to="/"><div className="logo-box"> <img className="logo-image" src={ChromeLogoIcon} /> TRADE </div></Link>
            </div>
            <div className="profile-part"> 
                <button className="btn filled" onClick={props.showPopUp}>Sign Up</button>
            </div>
        </div>
    </div>)
}

export default connect(state=>({}), dispatch=>({
    showPopUp: ()=> {
        dispatch({ type: generateActions(ActionList.popup.signup.show).request() })
    }
}))(Header);