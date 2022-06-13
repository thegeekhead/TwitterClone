import React, { Component } from 'react'
import image from "../assets/profile-pic.jpg";
import { MoreHorizOutlined } from '@mui/icons-material';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';

export default class SingleTweet extends Component {
    render() {
        return (
            <div>
                <hr />
                <div className="tweet-post">
                    <div className="tweet-input">
                        <img className="profile-pic" src={image} alt="" style={{ width: 50, height: 50 }} />
                        {/* profile-pic */}
                        <div className="input-button-area">
                            <p className="tweet-name">Anshansh Suman <span className="tweet-username">@anshanshsuman . 14m</span><MoreHorizOutlined style={{ float: "right" }} /></p>
                            <p className="tweet-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam repudiandae,
                                sunt itaque cumque sapiente, autem quo ipsum iusto et magnam vero atque facere
                                ut. Quaerat, odit vero! Maiores, corporis. Et est nulla aliquid consequuntur
                                nobis eligendi optio nam, deserunt inventore id repellendus, fugit dicta
                                totam dolorem. Distinctio id repudiandae nulla?</p>
                            <img className="tweet-image" src={image} alt="image" />
                            <div className="like-retweet-share">
                                <div className="reactions">
                                    <ModeCommentOutlinedIcon style={{ fontSize: "20px" }} />
                                </div>
                                <div className="reactions">
                                    <RepeatOutlinedIcon style={{ fontSize: "20px", marginRight: "40%" }} /><span>3</span>
                                </div>
                                <div className="reactions">
                                    <FavoriteBorderOutlinedIcon style={{ fontSize: "20px", marginRight: "40%" }} /><span>3</span>
                                </div>
                                <div className="reactions">
                                    <IosShareOutlinedIcon style={{ fontSize: "20px" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
