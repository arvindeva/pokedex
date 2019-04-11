import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { capitalize, formatString } from '../util';

import MoveList from './MoveList';

const StyledPokemonDetails = styled.div``;

class PokemonDetails extends React.Component {
  state = {
    loading: false,
    details: {},
    sprites: '',
    abilities: [],
    types: [],
    moves: []
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const name = this.props.match.params.name;
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const details = res.data;
    this.setState({
      loading: false,
      details,
      sprites: details.sprites.front_default,
      abilities: details.abilities,
      types: details.types,
      moves: details.moves
    });
  }

  render() {
    return (
      <StyledPokemonDetails className="pokemon-details">
        {this.state.loading ? (
          <div className="ui active dimmer">
            <div className="ui massive text loader">Loading</div>
          </div>
        ) : (
          <div>
            <h1>
              #{this.state.details.id} - {capitalize(this.state.details.name)}
            </h1>
            <img src={this.state.sprites} alt={this.state.details.name} />
            <h1>Type(s)</h1>
            {this.state.types.map(type => {
              return <p key={type.type.name}>{capitalize(type.type.name)}</p>;
            })}
            <h1>Abilities</h1>
            {this.state.abilities.map(ability => {
              return (
                <p key={ability.ability.name}>
                  {formatString(ability.ability.name)}
                </p>
              );
            })}
            <MoveList moves={this.state.moves} />
          </div>
        )}
      </StyledPokemonDetails>
    );
  }
}

export default PokemonDetails;
