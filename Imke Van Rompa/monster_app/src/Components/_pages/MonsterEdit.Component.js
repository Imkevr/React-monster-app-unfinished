import React from 'react';
import * as MonsterService from '../../Services/MonsterService';
import { Form } from '../forms/Form';
import dndLogo from '../../assets/dnd-logo.png';

export class MonsterEdit extends React.Component {


    onSubmit = (data) =>{
        console.log('edit monster ' + JSON.stringify(data));
        MonsterService.update("5a52bc6f559f00418e5331b5", data).then(() => {
            this.props.history.push("/monster-overview/");

        })

    }
    render = () => {
        return (
            <div>
                
               <img className="logo_home" src={dndLogo}></img> 
              <span className="colorWrap"> <div className="typewriter"> <h1 className="headTitle">Edit Monster</h1></div></span>
                <Form submit={this.onSubmit} name={this.props.match.params.name} />
            </div>
        )
    }
}