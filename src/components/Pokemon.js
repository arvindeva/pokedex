import React from 'react';
import axios from 'axios';

class Pokemon extends React.Component {
  state = {
    sprites: ''
  };

  capitalize = s => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(this.props.pokemon.url);
    this.setState({
      sprites: res.data.sprites.front_default,
      loading: false
    });
  }

  render() {
    return (
      <div className="item">
        <div className="ui tiny image">
          <img src={this.state.sprites} alt={this.props.pokemon.name} />
        </div>
        <h1>{this.capitalize(this.props.pokemon.name)}</h1>
      </div>
    );
  }
}

export default Pokemon;
