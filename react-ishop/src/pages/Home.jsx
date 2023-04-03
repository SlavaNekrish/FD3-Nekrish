import React, { useState, useEffect } from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setsortType] = useState({
    name: 'популярности DESC',
    code: 0,
    sortProp: 'rating',
  });

  useEffect(() => {
    setLoading(true);

    const sortBy = sortType.sortProp.replace('-', '');
    const order = sortType.sortProp.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';

    fetch(
      `https://64295fee5a40b82da4d189a9.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setLoading(false);
        window.scrollTo(0, 0);
      });
  }, [categoryId, sortType]);

  return (
    <div className="container">
      {' '}
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={(id) => setCategoryId(id)} />
        <Sort value={sortType} onChangeSort={(id) => setsortType(id)} />
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
  );
};

export default Home;
