import React from 'react';
import * as MonsterService from "../../Services/MonsterService";

export class Form extends React.Component {
    state = {
        name: "",
        size:"",
        type:"",
        alignment:"",
        strenght:""
    };

    componentWillMount = () => {
        MonsterService.getOne("5a52bc6f559f00418e5331b5").then(response => this.setState({
            name:       response.message.name,
            size:       response.message.size,
            type:       response.message.type,
            alignment:  response.message.alignment,
            strenght:   response.message.strenght,

        }))
    }

    updateName = (e) => {
        let name = e.target.value;

        this.setState({
            name: name,
        });
    }

    updateSize = (e) => {
        let size = e.target.value;

        this.setState({
            size: size,
        });
    }

    updateType = (e) => {
        let type = e.target.value;

        this.setState({
            type: type,
        });
    }

    updateAlignment = (e) => {
        let alignment = e.target.value;

        this.setState({
            alignment: alignment,
        });
    }

    updateStrenght = (e) => {
        let strenght = e.target.value;

        this.setState({
            strenght: strenght,
        });
    }

    onSubmit = e => {
        e.preventDefault();
        // this.props.onSubmit(this.state);
        var object = {
            name:       this.state.name,
            size:       this.state.size,
            type:       this.state.type,
            alignment:  this.state.alignment,
            strenght:   this.state.strenght,
        }

        this.props.submit(object);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}className="edit_form">
                <h1>{this.props.name}</h1>
                <p>Name: </p>
                <input type="text" name="name" value={this.state.name} onChange={ this.updateName} />
                <p>Size: </p>
                <input type="text" name="size" value={this.state.size} onChange={ this.updateSize} /> 
                <p>Type: </p>               
                <input type="text" name="type" value={this.state.type} onChange={ this.updateType} />
                <p>Alignment: </p>
                <input type="text" name="alignment" value={this.state.alignment} onChange={ this.updateAlignment} /> 
                <p>Strenght: </p> 
                <input type="text" name="strength" value={this.state.strenght} onChange={ this.updateStrenght} />  
                <input type="submit" value="Confirm" className="form_btn"/>
            </form>
        );
    }
}