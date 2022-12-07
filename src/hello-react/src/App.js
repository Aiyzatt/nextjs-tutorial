import React, {useState} from "react";
import axios from "axios";
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import ButtonApi from './components/ButtonApi';
import Resources from './components/Resources';
import jsonplaceholder from "./api/jsonplaceholder";
import SearchBar from "./components/SearchBar";
import Imagelist from "./components/Imagelist";

const App = () => {
  const pixabayApiKey = process.env.REACT_APP_PXABAY_APIKEY;
  const [resources, setResources] = useState([]);
  const [images, setImages] = useState([]);
  const getPosts = async () => {
    try {
      const results = await jsonplaceholder.get('/posts');
      setResources(results.data);
    } catch (error) {
      console.log(error);
    }
  }
  const getAlbums = async () => {
    try {
      const results = await jsonplaceholder.get('/albums');
      setResources(results.data);
    } catch (error) {
      console.log(error);
    }
  }
  const onSearchSubmit = async (imageTitle) => {
    try {
      const params = {
        key: pixabayApiKey,
        q: imageTitle,
      }
      const res = await axios.get('https://pixabay.com/api/', {params});
      setImages(res.data.hits);
      if (res.data.total === 0) {
        alert('No images found.');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <p>Components, Props</p>
          <Button title="post"/>
          <Button title="edit"/>
          <Button title="delete"/>
          <Button title="submit"/>
        </div>

        <hr />

        <div>
          <p>States</p>
          <Counter />
        </div>

        <hr />

        <div>
          <p>api, axios</p>
          <ButtonApi onClick={getPosts} text="GET POSTS" />
          <ButtonApi onClick={getAlbums} text="GET ALBUMS" />
          <Resources resources={resources} />
        </div>

        <hr />

        <div>
          <p>api with authentications, axios</p>
          <SearchBar onSubmit={onSearchSubmit} />
          <Imagelist images={images} />
        </div>

      </header>
    </div>
  );
}

export default App;
