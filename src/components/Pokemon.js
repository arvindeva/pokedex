import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { capitalize } from '../util';

const StyledPokemon = styled.div`
  a {
    color: black;
  }
  text-align: left;
`;

class Pokemon extends React.Component {
  state = {
    sprites: ''
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const res = await axios.get(this.props.pokemon.url);
      this.setState({
        sprites: res.data.sprites.front_default,
        loading: false
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <StyledPokemon className="item">
        <div className="ui tiny image">
          <Link className="header" to={`/pokemon/${this.props.pokemon.name}`}>
            <img src={this.state.sprites} alt={this.props.pokemon.name} />
          </Link>
        </div>
        <div className="middle aligned content">
          <Link className="header" to={`/pokemon/${this.props.pokemon.name}`}>
            {capitalize(this.props.pokemon.name)}
          </Link>
        </div>
      </StyledPokemon>
    );
  }
}

export default Pokemon;
