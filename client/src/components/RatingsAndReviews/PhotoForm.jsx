import React from 'react';

const PhotoForm = ({ open, handleSubmit, handleFileChange }) => {

  if (!open) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="photo">Select a photo:</label>
      <input type="file" id="photo" name="photo" onChange={handleFileChange}/>
      <input type="submit" value="Upload" />
    </form>

  );
};

export default PhotoForm;