import React from "react";
import { MainButton } from "../buttons/MainButton.Component";


import dndLogo from "../../assets/dnd-logo.png";



export class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    //<img className="header_img" src={header}></img>

    render = () => {
        return (
            <div className="homePage">
                <img className="logo_home" src={dndLogo}></img>
                <br />
                <MainButton className="home_btn" url="/monster-overview" name="View DnD Monsters" />
                <br />

            </div>

            
        );
    };
}
