import React from 'react';
import { useState, useEffect } from 'react';
import './scss/app.scss';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import Skeleton from './components/PizzaBlock/Skeleton';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://64295fee5a40b82da4d189a9.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setLoading(false);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : items.map((el) => (
                  <React.Fragment key={el.id}>
                    <PizzaBlock {...el} />
                  </React.Fragment>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
