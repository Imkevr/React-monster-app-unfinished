import React from 'react';
import * as  MonsterService from '../../Services/MonsterService';
import dndLogo from "../../assets/dnd-logo.png";


export class MonsterDelete extends React.Component{
    deleteMonster = () => {
        MonsterService.del("5a52bc6f559f00418e5331b5").then( () => {
            this.this.props.history.push("/monster-overview/");
        })
    }
}


render = () =>{
    return(
        <div>
                <img className="logo_home" src={dndLogo}></img>
                <h1 className="Typewriter"> Want to delete this magnificent monster? </h1>
                <button onClick={this.deleteMonster} name="delete">DELETE</button> 

        </div>
    )
}