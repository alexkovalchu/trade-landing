import React, {  useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { SignUpData } from "../../constants/types";


function SignUpForm (props: { onSubmit?: (data: SignUpData )=>void }) {
    const firstNameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const lastNameRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const SubmitHandle = useCallback((evt: React.FormEvent) => {
        const data: SignUpData = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
        if (typeof props.onSubmit === 'function') {
            props.onSubmit(data)
        }
    }, [props.onSubmit]);

    return <div className="signup-form-box">
        <div className="signup-inputs">
            <div className="form-inputs mb-2">
                <div className="outlines-box">
                    <input ref={firstNameRef} className="outlined-input" name="first_name" type="text" placeholder="First Name" />
                </div>
            </div>
            <div className="form-inputs mb-2">
                <div className="outlines-box">
                    <input ref={lastNameRef} className="outlined-input" name="last_name" type="text" placeholder="Last Name" />
                </div>
            </div>
            <div className="form-inputs">
                <div className="outlines-box">
                    <input ref={emailRef} className="outlined-input" type="email" name="email" required placeholder="Email *" />
                </div>
            </div>
            <div className="form-inputs">
                <div className="outlines-box">
                    <input ref={passwordRef} className="outlined-input" type="password" name="password" required placeholder="Password *" />
                </div>
            </div>
        </div>
        <div className="signup-checkboxes mb-2">
            <div className="checkbox-input mb-1">
                <input type="checkbox" required name="agree-terms-of-use" id="agree-terms-of-use" />
                <label htmlFor="agree-terms-of-use"> I agree to the <Link to="/privacy-policy">Privacy Policy</Link> </label>
            </div>
            <div className="checkbox-input"> 
                <input type="checkbox" required name="older-16" id="older-16" />
                <label htmlFor="older-16"> I am 16 or older </label>
            </div>
        </div>
        <div className="buttons-container">
            <div className="accept-button-box">
                <button className="btn filled" onClick={SubmitHandle}>Accept and Create</button>
            </div>
            
        </div>
    </div>
}

export default SignUpForm;