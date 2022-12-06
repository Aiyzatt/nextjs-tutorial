import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import ButtonApi from './components/ButtonApi';
import Resources from './components/Resources';
import jsonplaceholder from "./api/jsonplaceholder";

const App = () => {
  const [resources, setResources] = useState([]);
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
      </header>
    </div>
  );
}

export default App;
