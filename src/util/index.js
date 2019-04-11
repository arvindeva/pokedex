export const types = [
  {
    key: 'normal',
    text: 'normal',
    value: 'normal'
  },
  {
    key: 'fighting',
    text: 'fighting',
    value: 'fighting'
  },
  {
    key: 'flying',
    text: 'flying',
    value: 'flying'
  },
  {
    key: 'poison',
    text: 'poison',
    value: 'poison'
  },
  {
    key: 'ground',
    text: 'ground',
    value: 'ground'
  },
  {
    key: 'rock',
    text: 'rock',
    value: 'rock'
  },
  {
    key: 'bug',
    text: 'bug',
    value: 'bug'
  },
  {
    key: 'ghost',
    text: 'ghost',
    value: 'ghost'
  },
  {
    key: 'steel',
    text: 'steel',
    value: 'steel'
  },
  {
    key: 'fire',
    text: 'fire',
    value: 'fire'
  },
  {
    key: 'water',
    text: 'water',
    value: 'water'
  },
  {
    key: 'grass',
    text: 'grass',
    value: 'grass'
  },
  {
    key: 'electric',
    text: 'electric',
    value: 'electric'
  },
  {
    key: 'psychic',
    text: 'psychic',
    value: 'psychic'
  },
  {
    key: 'ice',
    text: 'ice',
    value: 'ice'
  },
  {
    key: 'dragon',
    text: 'dragon',
    value: 'dragon'
  },
  {
    key: 'dark',
    text: 'dark',
    value: 'dark'
  },
  {
    key: 'fairy',
    text: 'fairy',
    value: 'fairy'
  }
];

export const capitalize = s => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};
