import './details-screen.styles.css';

function DetailScreen({ episode, title, opening, director, producer, characters }) {

  return (
    <div className='screen-container'>
      <div className='screen'>
        { episode ?
          <div className='details'>
            <h3>{ ` Episode ${ episode }` }</h3>
            <h1>{ title }</h1>
            <p>{ opening }</p>
        </div> : null
        }
      </div>
    </div>
  );
}

export default DetailScreen;
