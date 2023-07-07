import React, { useState } from 'react';

const DropDownSort = ({ resetReviews, open, sortOptions, setCurrentSort, currentSort, onClose }) => {

  if (!open) {
    return null;
  }

  return (
    <div onClick={(e) => {
      e.stopPropagation();
    }}className="drop-down">
      {sortOptions.map((word) => {
        if (word === currentSort) {
          return null;
        }
        return <div onClick={() => {
          setCurrentSort(word);
          resetReviews(word);
          onClose(false);
        }} key={word} className="sort-word">{word}</div>;
      })}

    </div>
  );
};

export default DropDownSort;