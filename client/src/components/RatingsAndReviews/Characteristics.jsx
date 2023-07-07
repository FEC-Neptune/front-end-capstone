import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

const Characteristics = ({ metaData }) => {

  if (metaData === null) {
    return null;
  }

  const ratingKey = {
    1: '0',
    2: '25',
    3: '50',
    4: '75',
    5: '100'
  };

  let charsArray = [];
  for (var key in metaData.characteristics) {
    var result = [];
    result.push(key);
    result.push(Math.round(metaData.characteristics[key].value));
    charsArray.push(result);
  }

  return (
    <div className="characteristics">{charsArray.map((pair) => {
      return <div key={pair[0]} className="characteristic">
        <div className="characteristic-name">{pair[0]}{}</div>
        <div className="characteristic-rating"><FaCaretDown size={28} style={{ left: `${ratingKey[pair[1]]}%` }} className="caret"/></div>
      </div>;
    })}
    </div>
  );
};

export default Characteristics;