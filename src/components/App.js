import React, { Component } from 'react';
import { Heading } from 'rebass';

import PokemonList from './PokemonList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading>List of Pokemon</Heading>
        <PokemonList />
      </div>
    );
  }
}

export default App;
