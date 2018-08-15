import React from "react";
import { MainButton } from "../buttons/MainButton.Component";
import { Form } from "../forms/Form";
import dndLogo from "../../assets/dnd-logo.png";

export class AddMonster extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {}
        };
    }

    onChange = updatedValue => {
        this.setState({
            fields: {
                ...this.state.fields,
                ...updatedValue
            }
        });
    };

    render = () => {
        return (
            <div>
                <img className="logo_home" src={dndLogo}></img>
               <span className="typewriter"> <h1 className="title">Add Monster</h1></span>
                <Form onChange={fields => this.onChange(fields)} />
                <MainButton url="/" name="Home" className="btn_align_left" />
            </div>
        );
    };
}
