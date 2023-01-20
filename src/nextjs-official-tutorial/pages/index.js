
import { useState } from 'react';

function setTitle(title) {
  return title ? title : 'default title';
} 

function Header({title}) {
  return <h1>{setTitle(title)}</h1>;
}

export default function HomePage() {

  function handleClick() {
    setLikes(likes + 1);
  }

  const names = ['Taq', 'Luca', 'Oto', 'Xi'];
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {
          names.map((name, index) => {
            return <li key={name}>{name}</li>;
          })
        }
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}