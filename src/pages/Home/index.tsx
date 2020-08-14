import React, { useState, useEffect } from 'react';
import './styles.css';

import token from '../../services/passport';

const Home = () => {
  const api = token.getSubreddit('reactjs')

  const [items, setItems] = useState([]);

  const getData = async (params: any) => {
    try {
      if (params === 'hot') {
        params = await api.getHot({ limit: 10 })
      }
      if (params === 'new') {
        params = await api.getNew({ limit: 10 })
      }
      if (params === 'rising') {
        params = await api.getRising({ limit: 10 })
      }
      return params;
    } catch (err) {
      console.log(err);
    }
  }

  function handleHot(this: any) {
    

  }

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