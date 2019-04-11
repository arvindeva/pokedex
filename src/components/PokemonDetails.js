import React from 'react';
import axios from 'axios';

import { capitalize } from '../util';

class PokemonDetails extends React.Component {
  state = {
    details: {}
  };
  async componentDidMount() {
    const name = this.props.match.params.name;
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const details = res.data;
    this.setState({ details });
  }

  render() {
    return (
      <div className="pokemon-details">
        <h1>{capitalize(this.state.details.name)}</h1>
      </div>
    );
  }
}

export default PokemonDetails;
