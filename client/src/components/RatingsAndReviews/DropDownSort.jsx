import React, { useState } from 'react';

const DropDownSort = ({open}) => {

  if (!open) {
    return null;
  }

  return (
    <div className="drop-down">
      <div className="sort-word">helpfulness</div>
      <div className="sort-word">recent</div>
    </div>
  );
};

export default DropDownSort;