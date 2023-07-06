import React, { useState } from 'react';

const DropDownSort = ({ open, sortOptions, setCurrentSort, currentSort, onClose }) => {

  if (!open) {
    return null;
  }

  return (
    <div className="drop-down">
      {sortOptions.map((word) => {
        if (word === currentSort) {
          return null;
        }
        return <div onClick={() => {
          setCurrentSort(word);
          onClose(false);
        }} key={word} className="sort-word">{word}</div>;
      })}

    </div>
  );
};

export default DropDownSort;