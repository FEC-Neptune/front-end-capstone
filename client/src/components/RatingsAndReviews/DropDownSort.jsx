import React, { useState } from 'react';

const DropDownSort = ({open}) => {

  if (!open) {
    return null;
  }

  return (
    <div className="drop-down">
      <div className="drop-down-option">helpfulness</div>
      <div className="drop-down-option">recent</div>
    </div>
  );
};

export default DropDownSort;