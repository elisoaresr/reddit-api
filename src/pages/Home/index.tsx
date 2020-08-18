import React, { useState } from 'react';
import './styles.css';

import connection from '../../services/config';

interface Item {
  id: number;
  title: string;
}

const Home = () => {
  const [items, setItems] = useState<Item[]>([]);

  function handleHot() { }

  function handleNews() { }

  function handleRising() { }


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