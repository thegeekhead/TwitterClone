import React, { Component } from 'react';
import image from "../assets/profile-pic.jpg";
import ImageIcon from '@mui/icons-material/Image';
import { Button } from '@mui/material';
import SingleTweet from './SingleTweet';
import "../css/Home.css";

export default class Home extends Component {
    render() {
        return (
            <div className="home-body">
                <h2 className="header">Home 🏠</h2>
                {/* header */}

                {/* tweet input */}
                <div className="tweet">
                    <div className="tweet-input">
                        <img className="profile-pic" src={image} alt="" style={{ width: 50, height: 50 }} />
                        {/* profile-pic */}
                        <div className="input-button-area">
                            <textarea className="tweet-area" placeholder="What's happening?" />
                            {/* inputarea */}
                            <hr />
                            <div className="image-button">
                                <ImageIcon style={{ color: "var(--primary-blue)", marginTop: "5px" }} />
                                <Button className="tweetbutton" variant="contained" disableElevation> Tweet </Button>
                            </div>
                            {/* image&button */}
                        </div>
                    </div>
                </div>
                {/* posts */}
                <SingleTweet />
                <SingleTweet />
                <SingleTweet />
                <SingleTweet />
                <SingleTweet />
                <SingleTweet />
                <SingleTweet />
                <SingleTweet />
                <SingleTweet />
                {/* posts */}
                {/* posts */}
                {/* posts */}
                {/* posts */}
                {/* posts */}
                {/* posts */}
                {/* posts */}
                {/* posts */}
                {/* posts */}
                {/* posts */}
                {/* posts */}
                {/* posts */}
                {/* posts */}

            </div>
        )
    }
}
