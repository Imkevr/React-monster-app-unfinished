import React from "react";
import * as MonsterService from "../../Services/MonsterService";
import { Monster } from "../monsters/Monster";
import { MainButton } from "../buttons/MainButton.Component";
import dndLogo from "../../assets/dnd-logo.png";

export class MonsterOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: []
    };
  }

  componentWillMount = () => {
    MonsterService.getAll().then(response =>
      this.setState({ monsters: response.message})
    );
  };

  renderMonsters = () => {
    return this.state.monsters.map((monster, i) => <Monster name={monster.name}/>);
  };

  render = () => {
    return (
      <div>
         <img className="logo_home" src={dndLogo}></img>
        <MainButton url="/" name="Home" />
        <MainButton url="/add-monster" name="Add Monster" />
        <ul className="align_center">
          {this.renderMonsters()}

        </ul>
      </div>
    );
  };
}
