import React, {  useCallback, useState } from "react";
import ReactFacebookLogin, { ReactFacebookLoginInfo } from "react-facebook-login";
import { FacebookAppId } from "../../constants/social-networks";


const responseFacebook = (response: ReactFacebookLoginInfo) => {
    console.log(response);
}

function FacebookLogin() {
    const [ show, setShow ] = useState(false);

    const clickHandle = useCallback(()=>{
        setShow(true);
    }, []);

    return <div>
        {!show?(<button className="btn filled" onClick={clickHandle}> Login with Facebook </button>):(<ReactFacebookLogin
            appId={FacebookAppId}
            autoLoad={true}
            fields="name,email,picture"
            cssClass="btn filled"
            callback={responseFacebook} />)}
        </div>
}

export default FacebookLogin;