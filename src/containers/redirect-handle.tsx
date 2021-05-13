import React from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { ActionList, generateActions } from "../constants/actions";

function RedirectRow(props: { redirectURL: string, clearRedirect: () => void }) {
    if (props.redirectURL) {
        props.clearRedirect();

        return <Redirect to={props.redirectURL} />
    }

    return (<div></div>)
}

export default connect((state:any)=>({
    redirectURL: state.redirect.redirectURL
}), dispatch=>({
    clearRedirect: ()=>{
        dispatch({ type: generateActions(ActionList.redirect.clear).request() });
    }
}))(RedirectRow);