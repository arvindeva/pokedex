import React from 'react';

import { formatString } from '../util';

const MoveList = props => {
  return (
    <div>
      <h1>Move List</h1>
      {props.moves.map(move => {
        return <p key={move.move.name}>{formatString(move.move.name)}</p>;
      })}
    </div>
  );
};

export default MoveList;
