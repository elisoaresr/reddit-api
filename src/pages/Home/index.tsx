import React, { useState } from 'react';
import './styles.css';

import token from '../../services/passport';


interface Item {
  id: number,
  name: string,

}

const Home = () => {
  const [items, setItems] = useState<Item[]>([]);
  
  const subreddit = token.getSubreddit('reactjs')
  

  function handleHot() {}

  function handleNews() {}

  function handleRising() {}



  return (
    <div className="container">
      <header className="header">
        <span>REACT JS</span>
        <div className="bar">
          <button onClick={handleHot} type="button">HOT</button>
          <button onClick={handleNews} type="button">NEWS</button>
          <button onClick={handleRising} type="button">RISING</button>
        </div>
      </header>
      <div className="main">
        Conteúdo
      </div>
    </div>
  );
}

export default Home;