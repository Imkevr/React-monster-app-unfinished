import React from 'react';
import { Link } from 'react-router-dom';

export class MainButton extends React.Component {
    render = () => {
        return (
            <button className="home_btn" >
              
                    <Link to={this.props.url}>
                        {this.props.name}
                    </Link>
                
            </button>
        )
    }
}