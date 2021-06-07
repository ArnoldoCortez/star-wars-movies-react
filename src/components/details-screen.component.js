import { useEffect, useState } from 'react';
import axios from "axios";
import './details-screen.styles.css';

function DetailScreen({ episode, title, opening, director, producer, characters }) {

  const [listCharacters, setListCharacters] = useState([]);

  useEffect(() => {
    if(episode) {
      const urlList = characters.map((character) => axios.get(character));
      axios.all(urlList)
      .then(response => response.map((character) => character.data.name))
      .then(names => setListCharacters(names)); 
    }
  }, [episode, characters]);

  return (
    <div className='screen-container'>
      <div className='screen'>
        { episode ?
          <div key={episode} className='details'>
            <h3>{ ` Episode ${ episode }` }</h3>
            <h1>{ title }</h1>
            <p>{ opening }</p>
            <span>{ `Directed by ${ director }` }</span><br/>
            <span>{ `Produced by ${ producer }` }</span>
            <h4>Characters:</h4>
            {listCharacters.map((character, i) => <span key={ i }>{ character }</span>)}
          </div> : null
        }
      </div>
    </div>
  );
}

export default DetailScreen;
