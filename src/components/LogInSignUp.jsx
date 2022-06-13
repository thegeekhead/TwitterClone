import React, { Component } from 'react';
import Twitter from '@mui/icons-material/Twitter';
import { Button } from '@mui/material';
import { Google } from '@mui/icons-material';
import { Apple } from '@mui/icons-material';
import "./css/LogInSignUp.css";

export default class LogInSignUp extends Component {
    render() {
        return (
            <div className="loginpage">
                <div className="loginimage">
                    <div className="tweeticon">
                        <Twitter style={{ fontSize: `2000%` }} />
                    </div>
                </div>
                <div className="logincontent">
                    <Twitter style={{ color: `var(--primary-blue)`, fontSize: `300%` }} />
                    <h1 style={{fontSize:`<i class="fa fa-500px" aria-hidden="true"></i>00%`}}>Happening Now</h1>
                    <h1>Join Twitter today.</h1>
                    <div className="sign-btns">
                        <Button className="signin-up"> <Google/> Signup with Google </Button> <br />
                        <Button className="signin-up"> <Apple/> Signup with Apple </Button>
                        <h1>or</h1>
                        <Button className="tweetbutton" variant="contained" disableElevation> Signup with phone or email </Button>
                        <h1>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</h1>
                        <h1>Already have an account</h1>
                        <Button className="signin-up"> Sign in</Button>
                    </div>
                </div>
            </div>
        )
    }
}