import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./css/Sidenavbar.css";
// icons and buttons
import Twitter from '@mui/icons-material/Twitter';
import HomeRounded from '@mui/icons-material/HomeRounded';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import TagIcon from '@mui/icons-material/Tag';
import { BookmarkBorder } from '@mui/icons-material';
import { MailOutline } from '@mui/icons-material';
import { ListAltOutlined } from '@mui/icons-material';
import { PersonOutline } from '@mui/icons-material';
import { MoreHorizOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';

export default class Sidenavbar extends Component {
    render() {
        return (
            <div className="sidenavbar">
                <ul className="navlist">
                    <li><NavLink className="navlistitems" to="/"><Twitter style={{color:"var(--primary-blue)"}}/></NavLink></li>
                    <li><NavLink className="navlistitems" to="/"><HomeRounded />Home</NavLink></li>
                    <li><NavLink className="navlistitems" to="/explore"><TagIcon />Explore</NavLink></li>
                    <li><NavLink className="navlistitems" to="/notification"><NotificationsNoneOutlinedIcon />Notification</NavLink></li>
                    <li><NavLink className="navlistitems" to="/messages"><MailOutline />Messages</NavLink></li>
                    <li><NavLink className="navlistitems" to="/bookmark"><BookmarkBorder />Bookmark</NavLink></li>
                    <li><NavLink className="navlistitems" to="/list"><ListAltOutlined />List</NavLink></li>
                    <li><NavLink className="navlistitems" to="/profile"><PersonOutline />Profile</NavLink></li>
                    <li><NavLink className="navlistitems" to="/more"><MoreHorizOutlined />More</NavLink></li>
                    <Button className="tweetbutton" variant="contained" disableElevation fullWidth style={{
                        borderRadius: 50,
                        marginTop: 20,
                        padding: 10,
                        width: "80%",
                        marginRight: "20%",
                        textTransform: 'none',
                        backgroundColor: `#1DA1F2`,
                        '&:hover': { backgroundColor: `#000000` }
                    }}> Tweet </Button>
                </ul>
                {this.props.children}
            </div>
        )
    }
}