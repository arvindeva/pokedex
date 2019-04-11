## Pokedex

A simple Pokedex App using [Pokedex API](https://pokeapi.co/).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Deployed Site

[https://pokedex-jgmbwk2sf.now.sh/](https://pokedex-jgmbwk2sf.now.sh/)

Deployed using now.

### How to run locally

Make sure you have node installed. You can download it [here](https://nodejs.org/en/download/)

Then you can clone this repo, install dependendencies, and start using the following command:

```bash
$ git clone https://github.com/arvindeva/pokedex.git
$ npm install
$ npm start
```

## About this app

This is a tiny project using React to interact with [Pokedex API](https://jsonplaceholder.typicode.com/).

Scenarios:

- User can browse pokemon in infinite list - User can view detailed information of each pokemon
- User can view the image of each pokemon
- User can filter list of pokemon based on an attribute of pokemon (feel free to choose one attribute to use for filtering i.e. nature, types)

## Libraries/Frameworks used

- React for view library
- Create React App for boilerplate
- React Router for routing
- Semantic-UI for CSS framework
- Styled Components for CSS-in-JS
- Axios for HTTP requests
- react-infinite-scroll-component for Inifinte Scrolling

## Additional Comments and Assumptions

- I wanted to use the Pokedex GraphQL API but the REST is better.
- I did not have time to do error handling on get requests.
