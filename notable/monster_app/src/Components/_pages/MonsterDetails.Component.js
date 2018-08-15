import React from "react";
import { MainButton } from "../buttons/MainButton.Component";
import * as MonsterService from "../../Services/MonsterService";
import dndLogo from "../../assets/dnd-logo.png";


export class MonsterDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
            name: "",
            size: "",
            type: "",
            alignment:"",
            strenght:"",
           
        }
    }

    componentWillMount = () => {
        MonsterService.getOne("5a52bc6f559f00418e5331b5").then(response => this.setState({
            name: response.message.name,
            size: response.message.size,
            type: response.message.type,
            
        }),
        )
    }

    deleteMonster = () => {
        MonsterService.del("5a52bc6f559f00418e5331b5").then(() => {
            this.props.history.push("/monster-overview/");
        });
    }

    render = () => {
        return (
            <div>
                <img className="logo_home" src={dndLogo}></img>
                <h1>{this.state.name}</h1>
                <h1>{this.state.size}</h1>
                <h1>{this.state.type}</h1>
                <h1>{this.state.alignment}</h1>
                <h1>{this.state.strenght}</h1>
                <MainButton url="/" name="Home" />
                <MainButton url={"/monster/edit/" + this.state.name} name="edit" />
                <button onClick={this.deleteMonster} name="Delete" >delete</button>
            </div>
        );
    };
}
