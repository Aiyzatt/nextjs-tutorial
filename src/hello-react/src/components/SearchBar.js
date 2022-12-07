import React, {useState} from "react";

const SearchBar = ({onSubmit}) => {
  const [imageTitle, setImageTitle] = useState('');
  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(imageTitle);
  }

  return (
    <>
    <form onSubmit={onFormSubmit} action="">
      <label htmlFor="image_title"></label>
      <input 
        id="image_title" 
        name="image_title" 
        type="text" 
        value={imageTitle}
        onChange={(e) => {
          setImageTitle(e.target.value);
        }}
      />
    </form>
    </>
  );
}

export default SearchBar;