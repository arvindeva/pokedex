import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';
import PokemonList from './PokemonList';
import PokemonDetails from './PokemonDetails';
import Header from './Header';

const StyledApp = styled.div`
  text-align: center;
  margin: 0 auto;
  .page {
    margin-top: 80px;
    margin-left: 5%;
    margin-right: 5%;
    z-index: 0;
  }
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <StyledApp>
            <Header />
            <div className="page">
              <Switch>
                <Route path="/" exact component={PokemonList} />
                <Route path="/pokemon/:name" component={PokemonDetails} />
              </Switch>
            </div>
          </StyledApp>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
