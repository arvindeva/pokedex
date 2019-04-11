import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Dropdown, Divider } from 'semantic-ui-react';

import { types } from '../util';
import Pokemon from './Pokemon';

const StyledPokemonList = styled.div`
  .buttons {
    margin-top: 10px;
  }
`;

class PokemonList extends React.Component {
  state = {
    pokemons: [],
    next: '',
    count: 0,
    type: ''
  };

  async componentDidMount() {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`
      );
      this.setState({
        pokemons: res.data.results,
        next: res.data.next,
        count: res.data.count
      });
    } catch (error) {
      console.log(error);
    }
  }

  fetchNextPokemon = async () => {
    try {
      const res = await axios.get(this.state.next);
      this.setState({
        pokemons: this.state.pokemons.concat(res.data.results),
        next: res.data.next,
        count: res.data.count
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (e, { value }) => this.setState({ type: value });

  onTypeSubmit = async () => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/type/${this.state.type}`
      );

      const pokemons = res.data.pokemon;

      let newPokemons = [];

      // the format for filtered pokemon array is different so
      // we have to format it accordingly.
      for (let pokemon of pokemons) {
        newPokemons.push(pokemon.pokemon);
      }

      this.setState({
        pokemons: newPokemons,
        next: res.data.next,
        count: res.data.count
      });
    } catch (error) {
      console.log(error);
    }
  };

  onClearFilter = async () => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50`
      );
      this.setState({
        pokemons: res.data.results,
        next: res.data.next,
        count: res.data.count
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <StyledPokemonList>
        <div>
          <Dropdown
            placeholder="Select a Type"
            fluid
            selection
            options={types}
            onChange={this.handleChange}
            value={this.state.value}
          />
          <div className="buttons">
            <button
              className="ui button basic black"
              onClick={() => this.onTypeSubmit(this.state.value)}
            >
              Filter
            </button>
            <button className="ui button red" onClick={this.onClearFilter}>
              Clear Filter
            </button>
          </div>
        </div>
        <Divider />
        <InfiniteScroll
          dataLength={this.state.pokemons.length}
          next={this.fetchNextPokemon}
          hasMore={this.state.next}
          loader={<h4>Loading...</h4>}
        >
          <div className="ui divided items">
            {this.state.pokemons.map(pokemon => (
              <Pokemon key={pokemon.name} pokemon={pokemon} />
            ))}
          </div>
        </InfiniteScroll>
      </StyledPokemonList>
    );
  }
}

export default PokemonList;
