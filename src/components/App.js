import React, { Component } from 'react';
import styled from 'styled-components';

import PokemonList from './PokemonList';

const StyledApp = styled.div.attrs({
  className: 'ui container'
})`
  text-align: center;
  margin: 0 auto;
`;

class App extends Component {
  render() {
    return (
      <StyledApp>
        <h1>Pokedex</h1>
        <PokemonList />
      </StyledApp>
    );
  }
}

export default App;
