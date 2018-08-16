import React from 'react';
import { Link } from 'react-router-dom';

export class Monster extends React.Component {
    render = () => {
        return (
            <div className="monster_overview_page">

                <Link to={"/monster/" + this.props.name}><h1>{this.props.name}</h1></Link>
                <p> {this.props.type} </p>
            </div>
        )
    }
}