import React, { useState } from 'react';

const Characteristics = ({ metaData }) => {

  if (metaData === null) {
    return null;
  }

  let charsArray = [];
  for (var key in metaData.characteristics) {
    var result = [];
    result.push(key);
    result.push(Math.round(metaData.characteristics[key].value));
    charsArray.push(result);
  }

  return (
    <div className="characteristics">{charsArray.map((pair) => {
      return <div key={pair[0]}>{pair[0]}: {pair[1]}</div>;
    })}
    </div>
  );
};

export default Characteristics;