import React, { Component } from 'react';
import "./SidenavbarItem.css"


export default class SidenavbarItem extends React.Component {
    
    componentDidMount(){
        if(this.state.test === "bold") {
            this.setState({
                test: "normal"
            })
            console.log("componentDidMount");
        }
        
    }
    
    constructor(){
        super();
        this.state = {
            active: false,
            test: "normal"
        }
    }

    onChange = () => {
        // this.setState({active: !this.state.active});
        if(this.state.test === "normal") {
            this.setState({
                test: "bold"
            })
        } else {
            this.setState({
                test: "normal"
            })
        }
        console.log("active set to true", this.state.test);
    }



    render() {
        return (
            <div className="sidenavbarItem" onClick={() => this.onChange()}>
                <div style={{fontWeight: this.state.test}}>
                {this.props.icon} <span className="navname">{this.props.name}</span>
                </div>
                {/* {this.state.active == true ? <div style={{fontWeight: this.state.test}}>
                {this.props.icon} <span className="navname">{this.props.name}</span>
                </div> : <div style={{fontWeight: this.state.test}}>
                {this.props.icon} <span className="navname">{this.props.name}</span>
                </div>} */}
                
            </div>
        )
    }
}
