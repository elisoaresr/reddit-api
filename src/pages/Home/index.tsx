import React, { useState } from 'react';
import './styles.css';

import connection from '../../services/config';

interface Item {
  id: number;
  title: string;
}

const Home = () => {
  const [items, setItems] = useState<Item[]>([]);

  function handleHot() {
    connection('hot').then(response => {
      console.log(response);
    })
  }

  function handleNews() { }

  function handleRising() { }


  return (
    <div className="container">
      <header className="header">
        REACT <span>JS</span>
        <div className="bar">
          <button onClick={handleHot} type="button">HOT</button>
          <button onClick={handleNews} type="button">NEWS</button>
          <button onClick={handleRising} type="button">RISING</button>
        </div>
      </header>
      <div className="main">
        <ul>
          <span>Conteúdo</span>
        </ul>
      </div>
    </div>
  );
}

export default Home;